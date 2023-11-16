import React from 'react';
import { Bookmark, FileSpreadsheet, Globe, HeartIcon, MailIcon, MapPin, PhoneCallIcon } from 'lucide-react';
import SliderCard from '@/components/SliderCard';
import { ParamsIProps } from '@/type';
import TeacherCard from '@/components/TeacherCard';
import prisma from '@/lib/db/prisma';
import Comment from '@/components/Comment';


async function EducationCard({ params }: ParamsIProps) {
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
				<div className="flex flex-col gap-4  px-2  md:px-12 py-2">
					<h1 className="md:text-2xl text-xl  font-bold mb-2">{data?.title}</h1>
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

						</div>
						<div className="flex flex-col gap-y-4 gap-2 mb-4">
							<div className="bg-white px-3 py-4 rounded">
								<h2 className="uppercase p-1 flex flex-row font-bold"><Bookmark className='w-4 mr-1' />Contacts INFO</h2>
								<hr className='w-full' />
								<div className="px-3 py-4  flex flex-col gap-y-5">
									<h1 className=" text-sm flex flex-row items-center font-medium hover:text-pink-400"> <MailIcon className='w-6 mr-3' color='blue' /> info@perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <Globe className='w-6 mr-3' color='blue' />https://www.perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <MapPin className='w-6 mr-3' color='blue' />Kurigram</h1>
								</div>
							</div>
							<div className="bg-white px-3 py-4">
								<Comment data={data} id={id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EducationCard