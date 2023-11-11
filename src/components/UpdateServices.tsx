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
import { UploadButton } from "@/lib/uploadthing"
import { useState } from "react"
import "@uploadthing/react/styles.css";
import toast from "react-hot-toast"
import { Textarea } from "@/components/ui/textarea"
import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ServicesProps, UpdateIProps } from "@/type"

const formSchema = z.object({
	title: z.string().min(4, {
		message: "Empty title not allow.",
	}),
	description: z.string(),
});

function UpdateServices({ item }: { item: ServicesProps }) {
	const [photo, setPhotos] = useState<string[] | undefined>(item.photos);
	const [thumbnail, setThumbnail] = useState<string | undefined>(item.thumbnails);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: item.title,
			description: item.description,
		},
	});

	// Create Services
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ id, title, description, thumbnails, photos }: UpdateIProps) => {
			const response = await axios.patch("/api/services", {
				title, description, id, thumbnails, photos,
			});
			return response.data;
		}
	})



	function onSubmit(values: z.infer<typeof formSchema>) {
		const title = values.title;
		const description = values.description;
		const thumbnails = thumbnail as string;
		const photos = photo as string[];
		const id = item.id;
		mutate({ id, title, description, thumbnails, photos }, {
			onSuccess: (data) => {
				if (data?.id) {
					toast.success("Services Updated Successfully");
				} else {
					toast.error("Services Updated Failed");
				}
			}
		});
	};

	return (
		<Form  {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="flex flex-col">
					<h2 className=" font-normal text-center text-sm">Thumbnail(300X200)</h2>
					<UploadButton className='w-full h-20 mt-1 text-sm text-slate-400'
						endpoint="imageUploader"
						onClientUploadComplete={(res) => {
							setThumbnail(res?.[0]?.url);
							toast.success("Image Upload Completed");
						}}
						onUploadError={(error: Error) => {
							toast.error(`ERROR! ${error.message}`);
						}}
					/>
				</div>
				<div className="flex flex-col">
					<h2 className=" font-normal text-center text-sm">Photos(1280X400)</h2>
					<UploadButton className='w-full h-20 mt-1 text-sm text-slate-400'
						endpoint="photosUploader"
						onClientUploadComplete={(res) => {
							setPhotos(res?.map((item: any) => item?.fileUrl))
							toast.success("Image Upload Completed");
						}}
						onUploadError={(error: Error) => {
							toast.error(`ERROR! ${error.message}`);
						}}
					/>
				</div>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Description"
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

export default UpdateServices