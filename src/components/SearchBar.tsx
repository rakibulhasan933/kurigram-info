"use client"

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
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { SearchIcon } from "lucide-react"


const FormSchema = z.object({
	search: z.string(),
	category: z.string(),
})

export function SearchBar() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			search: "",
			category: "",
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data, "result");
	}

	return (
		<Form  {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-fit items-center space-x-2">
				<FormField
					control={form.control}
					name="search"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Search" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Category" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="educational">Educational</SelectItem>
									<SelectItem value="places">Places</SelectItem>
									<SelectItem value="restaurants">Restaurants</SelectItem>
									<SelectItem value="Hotels">Hotels</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="hover:text-pink-400 bg-pink-400" type="submit"> <SearchIcon className="w-4 mr-2 hover:text-pink-400" /> Search </Button>
			</form>
		</Form>
	)
}
