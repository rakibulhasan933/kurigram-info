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
import { Textarea } from "@/components/ui/textarea"
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { TeacherProps } from "@/type";
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"

const FormSchema = z.object({
	name: z
		.string()
		.min(5, {
			message: "name must be required.",
		}),
	department: z.string().min(5, {
		message: "department must be required.",
	}),
	phone: z.string().min(5, {
		message: "phone must be required.",
	}),
})

export function AddTeachers({ id }: { id: string }) {
	const [images, setImages] = useState<string | undefined>();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			department: "",
			phone: "",
		},
	});

	// Create Services
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ productId, name, department, phone, image }: TeacherProps) => {
			const response = await axios.post("/api/teacher", {
				productId, image, name, department, phone
			});
			return response.data;
		}
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const productId = id;
		const name = data.name;
		const department = data.department;
		const phone = data.phone;
		const image = images as string;
		mutate({ productId, name, department, phone, image }, {
			onSuccess: (data) => {
				if (data?.id) {
					toast.success("Teachers Created Successfully");
				} else {
					toast.error("Teachers Created Failed");
				}
			}
		});
	}


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
				<div className="flex flex-col">
					<h2 className=" font-normal text-center text-sm">Image(100X100)</h2>
					<UploadButton className='w-full h-20 mt-1 text-sm text-slate-400'
						endpoint="imageUploader"
						onClientUploadComplete={(res) => {
							setImages(res?.[0]?.url);
							toast.success("Image Upload Completed");
						}}
						onUploadError={(error: Error) => {
							toast.error(`ERROR! ${error.message}`);
						}}
					/>
				</div>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type name here."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="department"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Department</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type department here."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Your Message</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Type phone number here."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{isPending ? <Button type="submit" disabled>Loading...</Button> : <Button type="submit">Submit</Button>}
			</form>
		</Form>
	)
}
