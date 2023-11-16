"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { DialogHeader, DialogTitle, DialogTrigger, DialogContent, Dialog } from '@/components/ui/dialog';
import { Loader2Icon, PlusSquareIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddTeachers } from './AddTeacher';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { TeacherIProps } from '@/type';

function TeacherCard({ id }: { id: string }) {
	const { mutate, isPending, data } = useMutation({
		mutationFn: async (id: string) => {
			const response = await axios.get(`/api/teacher/${id}`);
			return response.data;
		},
	});

	useEffect(() => {
		mutate(id);
	}, []);
	return (
		<div className="">
			<h2 className=' text-xl font-semibold py-4 text-center'>Teacher List</h2>
			<div className="my-4">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline"><PlusSquareIcon className='w-4 mr-2' /> Add Teacher</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Add Teacher</DialogTitle>
						</DialogHeader>
						<div className="grid gap-2 py-2">
							<AddTeachers id={id} />
						</div>
					</DialogContent>
				</Dialog>
			</div>
			{
				isPending ? (
					<div className='flex justify-center top-1/2'>
						<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
					</div>
				) : (
					<div className='flex md:flex-row flex-col items-stretch gap-1'>
						{
							data?.map((item: TeacherIProps) => (
								<div key={item.id} className="md:basis-1/3 flex flex-col gap-x-1 items-center rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[1px] shadow-xl p-2">
									<Image src={item.image} className=' object-cover rounded' alt='pizza' width={100} height={100} />
									<div className="px-1">
										<h2 className="text-base mb-1 font-bold">{item?.name}</h2>
										<p className="text-sm  mb-1 font-medium">{item?.department} Department</p>
										<p className="text-sm mb-1 font-bold text-blue-400">{item.phone}</p>
									</div>
								</div>
							))
						}
					</div>
				)
			}
		</div>
	)
}

export default TeacherCard