"use client";
import { HeartIcon, Loader2Icon, LocateFixedIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { isMobile } from 'react-device-detect';
import { ServicesProps } from '@/type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function TopRestaurant() {
	const { data, isLoading } = useQuery<ServicesProps[]>({
		queryKey: ["restaurants"],
		queryFn: async () => {
			const response = await axios.get('/api/restaurants');
			return response.data;
		},
		refetchInterval: 1000,
	});
	return (
		<div className='my-4 mx-2 md:mx-6'>
			<div className="flex flex-row items-center justify-between mt-2">
				<h2 className="px-4 py-2 rounded md:text-xl text-sm font-medium text-white bg-pink-400 w-fit">Best Restaurants in Kurigram</h2>
				<Link className=' px-4 py-2 hover:text-white w-fit hover:bg-pink-400 rounded text-sm text-pink-400 font-semibold border-2 border-pink-400' href="/restaurants">More</Link>
			</div>
			{
				isLoading ? (
					<div className='flex justify-center top-1/2'>
						<Loader2Icon className="h-10 w-10 text-blue-500 animate-spin" />
					</div>
				) : (
					<div className="my-4">
						<Swiper
							slidesPerView={isMobile ? 1 : 4}
							spaceBetween={5}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Autoplay, Navigation]}
							className="mySwiper flex flex-row"
						>
							{
								data?.slice(0, 4)?.map((item: ServicesProps, index: number) => (
									<SwiperSlide key={index}>
										<div className="flex justify-center flex-col mt-4 rounded-md border-[1px] hover:border-pink-400 hover:border-2 shadow-lg">
											<Link href={`/${item.category}/${item.id}`}>
												<Image src={item.thumbnails} className=' rounded-md object-cover w-full' alt='room' width={300} height={200} priority={true} />
												<div className="px-2 py-4 flex flex-col gap-x-3">
													<h2 className="font-bold text-lg  hover:text-pink-400">{item.title}</h2>
													<p className="text-sm font-semibold mb-2">{item.description.slice(0, 20)}..</p>
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
											</Link>
										</div>
									</SwiperSlide>
								))
							}
						</Swiper>
					</div>
				)
			}
		</div>
	)
}

export default TopRestaurant