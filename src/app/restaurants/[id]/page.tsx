import React from 'react';
import { Button } from '@/components/ui/button';
import { BedDoubleIcon, Bookmark, FileSpreadsheet, Globe, HeartIcon, MailIcon, MapPin, PhoneCallIcon, SoupIcon } from 'lucide-react';
import SliderCard from '@/components/SliderCard';
import RestaurantMenu from '@/components/RestaurantMenu';
import Review from '@/components/Review';
import { ParamsIProps, ServicesProps } from '@/type';
import prisma from '@/lib/db/prisma';

async function RestaurantCard({ params }: ParamsIProps) {
	const { id } = params;
	const data: {
		id: string;
		title: string;
		thumbnails: string;
		category: string;
		photos: string[];
		description: string;
	} | null = await prisma.service.findUnique({ where: { id } });

	return (
		<div className='bg-gray-50'>
			<SliderCard data={data} />
			<div className="mx-2 md:mx-4 my-8">
				<div className="flex justify-between md:flex-row flex-col gap-4  px-2  md:px-12 py-2">
					<div className="flex flex-col">
						<h1 className="text-xl font-bold mb-2">{data?.title}</h1>
					</div>
					<div className="">
						<Button className=' border-2 hover:border-pink-400 hover:text-pink-400 md:mr-4 mr-2' variant="secondary"><HeartIcon className='w-10 text-pink-400 mr-2' />Favorite</Button>
						<Button className=' bg-pink-500 text-white hover:bg-pink-400' variant="secondary"><SoupIcon className='w-10 text-white mr-1' />Oder Now</Button>
					</div>
				</div>
				<hr className='w-full h-2 my-4' />
				<div className="px-2 md:px-4">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
						<div className="flex flex-col gap-y-4 gap-x-2">
							<div className="bg-white px-3 py-4 rounded">
								<h2 className="uppercase p-2 flex flex-row font-bold"><FileSpreadsheet className='w-4 mr-2' />{data?.category} DESCRIPTION</h2>
								<hr className='w-full' />
								<div className="py-1">
									<p className=" text-sm font-normal">{data?.description}</p>
								</div>
							</div>
							<div className="bg-white px-3 py-4">
								<Review id={id} />
							</div>
						</div>
						<div className="flex flex-col gap-y-4 gap-2 mb-4">
							<div className="bg-white px-3 py-4 rounded">
								<h2 className="uppercase p-1 flex flex-row font-bold"><Bookmark className='w-4 mr-1' />Contacts INFO</h2>
								<hr className='w-full' />
								<div className="px-3 py-4  flex flex-col gap-y-5">
									<h1 className=" text-sm flex flex-row items-center font-medium hover:text-pink-400"> <MailIcon className='w-6 mr-3' /> info@perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <PhoneCallIcon className='w-6 mr-3' />+8801793874052 </h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <Globe className='w-6 mr-3' />https://www.perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <MapPin className='w-6 mr-3' />Kurigram</h1>
								</div>
							</div>
							<RestaurantMenu />
							<div className="bg-white rounded">
								<h2 className="p-1 flex flex-row font-bold"><Bookmark className='w-4 mr-1' />Map</h2>
								<hr className='w-full my-3' />
								<div className="">
									<iframe className='w-full rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919515.5403311296!2d89.00917749514751!3d25.80827225152525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2c8648556f8cb%3A0xfaa7d471019abb1f!2sKurigram%20District!5e0!3m2!1sen!2sbd!4v1699635212697!5m2!1sen!2sbd" width="500" height="300" style={{ border: 0 }} loading="lazy"></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RestaurantCard