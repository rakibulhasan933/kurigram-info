"use client";
import { SearchIProps, ServicesProps } from '@/type';
import axios from 'axios';
import { HeartIcon, Loader2Icon, LocateFixedIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
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
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const FormSchema = z.object({
	search: z.string(),
	category: z.string(),
})


function Search() {
	// const [services, setServices] = useState<ServicesProps[]>([]);

	const { mutate, isPending, data } = useMutation({
		mutationFn: async ({ search, category }: SearchIProps) => {
			const response = await axios.post("/api/search", {
				category, search,
			});
			return response.data;
		}
	})

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			search: "",
			category: "all",
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data, "result");
		const category = data.category;
		const search = data.search;

		mutate({ category, search });
	}

	console.log(data, "search result");
	return (
		<div className='mx-2 md:mx-6 my-8'>
			<div className="flex justify-center my-2">
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
											<SelectItem defaultChecked value="all">All</SelectItem>
											<SelectItem value="education">Educational</SelectItem>
											<SelectItem value="places">Places</SelectItem>
											<SelectItem value="restaurants">Restaurants</SelectItem>
											<SelectItem value="hotels">Hotels</SelectItem>
											<SelectItem value="hospitals">Hospitals</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						{isPending ? <Button type="submit" disabled>Loading...</Button> : <Button className="hover:text-pink-400 bg-pink-400" type="submit"> <SearchIcon className="w-4 mr-2 hover:text-pink-400" /> Search </Button>}
					</form>
				</Form>
			</div>
			<p className="my-4 text-blue-400 flex justify-center">
				{data?.length === 0 ? 'There are no products that match ' : `Showing ${data?.length === undefined ? "0" : data?.length} for `}
			</p>
			{
				isPending ? (
					<div className='flex justify-center top-1/2'>
						<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
					</div>
				) : (
					<div className="mt-10 grid md:grid-cols-4  grid-cols-1 gap-3">
						{
							data?.map((item: ServicesProps) => (
								<Link key={item.id} href={`${item.category}/${item.id}`}>
									<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
										<Image src={item.thumbnails} className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
										<div className="px-2 py-4 flex flex-col gap-x-3">
											<h2 className="font-bold text-lg  hover:text-pink-400">{item.title}</h2>
											<p className="text-sm font-semibold mb-2">{item.description.slice(0, 20)}...</p>
											<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />Kurigram</h2>
											<hr className='w-full my-2' />
											<div className="flex justify-between">
												<div className="flex flex-row gap-y-2">
													<h2 className="text-lg font-medium">{item.category}</h2>
												</div>
												<HeartIcon className='w-10 hover:text-pink-400' />
											</div>
										</div>
									</div>
								</Link>
							))
						}
					</div>
				)
			}
		</div>
	)
}

export default Search