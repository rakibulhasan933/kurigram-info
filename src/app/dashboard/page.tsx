"use client"
import CreateServices from '@/components/CreateServices';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from '@/components/ui/dialog';
import { ServicesProps } from '@/type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2Icon, PlusSquareIcon } from 'lucide-react';
import React from 'react'
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import Image from 'next/image';
import UpdateServices from '@/components/UpdateServices';

function Dashboard() {
	// Products Load
	const { data, isLoading } = useQuery<ServicesProps[]>({
		queryKey: ["services"],
		queryFn: async () => {
			const response = await axios.get('/api/services');
			return response.data;
		},
		refetchInterval: 1000,
	});
	console.log(data, "services");
	return (
		<div className='mx-2 my-6 md:mx-6'>
			<h1 className="md:text-2xl text-lg font-bold text-orange-400 flex justify-center my-4">Content Management</h1>
			<div className="flex flex-col gap-x-4">
				<div className="">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline"><PlusSquareIcon className='w-4 mr-2' /> Add Services</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Add Services</DialogTitle>
							</DialogHeader>
							<div className="grid gap-2 py-2">
								<CreateServices />
							</div>
						</DialogContent>
					</Dialog>
				</div>
				<div className="py-4">
					{
						isLoading ? (
							<div className='flex justify-center top-1/2'>
								<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
							</div>
						) : (
							<Table>
								<TableCaption>A list of your Products.</TableCaption>
								<TableHeader>
									<TableRow>
										<TableHead>Index</TableHead>
										<TableHead>Avatar</TableHead>
										<TableHead>Title</TableHead>
										<TableHead>Category</TableHead>
										<TableHead>Updated</TableHead>
										<TableHead>Delete</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{
										data?.map((item, index) => (
											<TableRow key={item.id}>
												<TableCell>{index + 1}</TableCell>
												<TableCell>
													<Image src={item.thumbnails} className=' rounded-md' alt={item.title} width={80} height={40} />
												</TableCell>
												<TableCell>{item.title}</TableCell>
												<TableCell>{item.category}</TableCell>
												<TableCell>
													<TableCell>
														<Dialog>
															<DialogTrigger asChild>
																<Button variant="outline" className='bg-green-500'><PlusSquareIcon className='w-4 mr-2' />Edit</Button>
															</DialogTrigger>
															<DialogContent className="sm:max-w-[425px]">
																<DialogHeader>
																	<DialogTitle>Updated</DialogTitle>
																</DialogHeader>
																<div className="grid gap-2 py-2">
																	<UpdateServices item={item} />
																</div>
															</DialogContent>
														</Dialog>
													</TableCell>
												</TableCell>
												<TableCell>
													<AlertDialog>
														<AlertDialogTrigger><Button variant="destructive">Delete</Button></AlertDialogTrigger>
														<AlertDialogContent>
															<AlertDialogHeader>
																<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
																<AlertDialogDescription>
																	This action cannot be undone. This will permanently delete your account
																	and remove your data from our servers.
																</AlertDialogDescription>
															</AlertDialogHeader>
															<AlertDialogFooter>
																<AlertDialogCancel>Cancel</AlertDialogCancel>
																<AlertDialogAction>Continue</AlertDialogAction>
															</AlertDialogFooter>
														</AlertDialogContent>
													</AlertDialog>
												</TableCell>
											</TableRow>
										))
									}
								</TableBody>
							</Table>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default Dashboard