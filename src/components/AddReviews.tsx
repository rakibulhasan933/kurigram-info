"use client"
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { ReviewProps } from "@/type";

const FormSchema = z.object({
	comment: z
		.string()
		.min(5, {
			message: "Bio must be at least 10 characters.",
		})
		.max(160, {
			message: "Bio must not be longer than 30 characters.",
		}),
})

export function AddReviews({ id, category }: { id: string, category: string }) {
	const { user } = useUser();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			comment: "",
		},
	});

	// Create Services
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ productId, userId, userName, photoUrl, comment }: ReviewProps) => {
			const response = await axios.post("/api/review", {
				productId, userId, userName, photoUrl, comment
			});
			return response.data;
		}
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const productId = id;
		const userId = user?.id as string;
		const userName = user?.fullName as string;
		const photoUrl = user?.imageUrl as string;
		const comment = data.comment;
		mutate({ productId, userId, userName, photoUrl, comment }, {
			onSuccess: (data) => {
				if (data?.id) {
					toast.success("Comment Created Successfully");
				} else {
					toast.error("Comment Created Failed");
				}
			}
		});
	}


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
				<FormField
					control={form.control}
					name="comment"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type your message here."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isPending ? <Button type="submit" disabled>Loading...</Button> : <>
					{user === null ? <Button >
						<Link href={`/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F${category}%2F${id}`}>Login</Link>
					</Button> : <Button type="submit">Submit</Button>}
				</>}
			</form>
		</Form>
	)
}
