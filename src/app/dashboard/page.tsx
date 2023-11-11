"use client"
import CreateServices from '@/components/CreateServices';
import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from '@/components/ui/dialog';
import { ServicesProps } from '@/type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PlusSquareIcon } from 'lucide-react';
import React from 'react'

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
				<div className="my-4">

				</div>
			</div>
		</div>
	)
}

export default Dashboard