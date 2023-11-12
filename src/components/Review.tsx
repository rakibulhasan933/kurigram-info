"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import { AddReviews } from './AddReviews'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { ReviewIProps } from '@/type';

function Review({ id, category }: { id: string, category: string }) {
	// Review List
	const { mutate, isPending, data } = useMutation({
		mutationFn: async (id: string) => {
			const response = await axios.get(`/api/review/${id}`);
			return response.data;
		},
	});

	useEffect(() => {
		mutate(id);
	}, []);

	return (
		<div className="flex flex-col gap-x-4">
			{
				isPending ? (
					<div className='flex justify-center top-1/2'>
						<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
					</div>
				) : (
					<div className="flex flex-col py-4 px-3">
						{
							data?.map((item: ReviewIProps) => (
								<div key={item.id} className="flex flex-row items-center my-4">
									<Image src={item.photoUrl} className=' rounded-full object-cover mr-2' width={30} height={30} alt='user' />
									<div className="flex flex-col gap-x-2">
										<h1 className=" text-xm font-bold ">{item.userName}</h1>
										<p className=" text-sm font-light">{item.comment}</p>
									</div>
								</div>
							))
						}
					</div>
				)
			}

			<AddReviews id={id} category={category} />
		</div>
	)
}

export default Review