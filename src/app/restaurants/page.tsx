import { HeartIcon, LocateFixedIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import prisma from '@/lib/db/prisma';

async function Restaurants() {
	const data = await prisma.service.findMany({ where: { category: "restaurants" } });
	return (
		<div className='mx-2 md:mx-4 my-4'>
			<div className="flex flex-row items-center justify-between mt-2">
				<h2 className="px-4 py-2 rounded md:text-xl text-sm font-medium text-white bg-pink-400 w-fit">Best Restaurants in Kurigram</h2>
			</div>
			<div className="mt-4 grid md:grid-cols-4  grid-cols-1 gap-3">
				{
					data?.map((item) => (
						<Link key={item.id} href={`/${item.category}/${item.id}`}>
							<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
								<Image src={item.thumbnails} className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
								<div className="px-2 py-4 flex flex-col gap-x-3">
									<h2 className="font-bold text-lg  hover:text-pink-400">{item.title}</h2>
									<p className="text-sm font-semibold mb-2">{item.description}</p>
									<h2 className="flex flex-row mr-2 mb-2 hover:text-pink-400"><LocateFixedIcon className='w-4 mr-2  text-pink-400' />
										<a href={item?.location} target="_blank" rel="noopener noreferrer">Google Maps Link</a>
									</h2>
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
		</div>
	)
}

export default Restaurants