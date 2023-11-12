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
	const { isLoaded, isSignedIn, user } = useUser();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			comment: "",
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		const productId = id;
		const userId = user?.id;
		const userName = user?.fullName;
		const photoUrl = user?.imageUrl;
		const comment = data.comment;
		console.log({ id, userId, userName, photoUrl, comment, productId });
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
				{user === null ? <Button >
					<Link href={`/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F${category}%2F${id}`}>Login</Link>
				</Button> : <Button type="submit">Submit</Button>}
			</form>
		</Form>
	)
}
