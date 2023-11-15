"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { User, useUser } from "./ContextProvider"

export interface LoginIProps {
	phone: string,
	password: string
}

const formSchema = z.object({
	phone: z.string().min(11, {
		message: "phone number must be at 11 characters.",
	}).max(11, {
		message: "phone number must be at  11 characters.",
	}),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters.",
	}),
});

export function SingInForm() {

	const { user, setUser } = useUser();
	const router = useRouter();
	// Login
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ phone, password }: LoginIProps) => {
			const response = await axios.post("/api/login", {
				phone, password
			});
			return response.data;
		},
	});
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			phone: "",
			password: "",
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		const phone = values.phone;
		const password = values.password;

		mutate({ phone, password }, {
			onSuccess: (data: User) => {
				if (data.id) {
					setUser(data);
					localStorage.setItem('id', data?.id);
					toast.success("Login Successfully");
					router.push(`/dashboard`)
				} else {
					toast.error("Login Failed")
				}
			},
			onError: (error) => {
				toast.error("Login Failed");
			}
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="01700000000" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isPending ? <Button type="submit" disabled>Loading...</Button> : <Button type="submit">Submit</Button>}
			</form>
		</Form>
	);
};