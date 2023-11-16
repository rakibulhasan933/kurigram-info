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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { MenuProps, TeacherProps } from "@/type";
import { useState } from "react"
import { UploadButton } from "@/lib/uploadthing"
import { Input } from "@/components/ui/input"
import "@uploadthing/react/styles.css";


const FormSchema = z.object({
	name: z
		.string()
		.min(5, {
			message: "name must be required.",
		}),
	price: z.string().min(5, {
		message: "phone must be required.",
	}),
})

export function AddMenu({ id }: { id: string }) {
	const [images, setImages] = useState<string | undefined>();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			price: "",
		},
	});

	// Create Services
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ productId, name, price, image }: MenuProps) => {
			const response = await axios.post("/api/menuitem", {
				productId, image, name, price
			});
			return response.data;
		}
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const productId = id;
		const name = data.name;
		const price = data.price;
		const image = images as string;
		mutate({ productId, name, price, image }, {
			onSuccess: (data) => {
				if (data?.id) {
					toast.success("menu Created Successfully");
				} else {
					toast.error("menu Created Failed");
				}
			}
		});
	}


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
				<div className="flex flex-col">
					<h2 className=" font-normal text-center text-sm">Image(100X100)</h2>
					<UploadButton className='w-full h-20 mt-1 text-sm text-blue-400'
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
								<Input
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
					name="price"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Price</FormLabel>
							<FormControl>
								<Input
									placeholder="Type price number here."
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
