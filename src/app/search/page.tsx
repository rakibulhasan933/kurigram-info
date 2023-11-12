"use client";
import { ServicesProps } from '@/type';
import axios from 'axios';
import { HeartIcon, Loader2Icon, LocateFixedIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Search() {
	const [search, setSearch] = useState("");
	const [services, setServices] = useState<ServicesProps[]>([]);
	const [isLoading, setLoading] = useState<Boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post("/api/search", {
					search
				})
				const result = response.data;
				setServices(result)
				setLoading(false);
			} catch (error) {
				// console.log(error);
				setLoading(false);
			}
		}
		fetchData();
	}, [search]);

	console.log(services, "search result");
	return (
		<div className='mx-2 md:mx-6 my-8'>
			<div className="flex justify-center my-2">
				<input onChange={(e) => setSearch(e.target.value)} type="text" className='flex md:mx-10 w-2/4 rounded-md  items-center space-x-2 border-2 border-black px-4 py-2' />
			</div>
			<p className="my-4 text-blue-400 flex justify-center">
				{services.length === 0 ? 'There are no products that match ' : `Showing ${services.length} ${search} for `}
			</p>
			{
				isLoading ? (
					<div className='flex justify-center top-1/2'>
						<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
					</div>
				) : (
					<div className="mt-10 grid md:grid-cols-4  grid-cols-1 gap-3">
						{
							services?.map((item) => (
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