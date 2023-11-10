"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BedDoubleIcon, Bookmark, FileSpreadsheet, Globe, HeartIcon, MailIcon, MapPin, PhoneCallIcon, Star, StarHalf, StarIcon } from 'lucide-react';

function EducationCard() {
	return (
		<div className='bg-gray-50'>
			<Swiper
				spaceBetween={5}
				centeredSlides={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image src="/london.jpg" className=' w-full object-cover' alt='banner' width={1280} height={400} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/london.jpg" className=' w-full object-cover' alt='banner' width={1280} height={400} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/london.jpg" className=' w-full object-cover' alt='banner' width={1280} height={400} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src="/london.jpg" className=' w-full object-cover' alt='banner' width={1280} height={400} />
				</SwiperSlide>
			</Swiper>
			<div className="mx-2 md:mx-4 my-8">
				<div className="flex justify-between md:flex-row flex-col gap-4  px-2  md:px-12 py-2">
					<div className="flex flex-col">
						<h1 className="text-xl font-bold mb-2">Pera Palace Hotel</h1>
						<p className=" text-xs font-light">Become a witness of the past with a stay in our rooms previously graced by Agatha Christie and Ernest Hemingway</p>
					</div>
					<div className="">
						<Button className=' border-2 hover:border-pink-400 hover:text-pink-400 md:mr-4 mr-2' variant="secondary"><HeartIcon className='w-10 text-pink-400 mr-2' />Favorite</Button>
						<Button className=' bg-pink-500 text-white hover:bg-pink-400' variant="secondary"><BedDoubleIcon className='w-10 text-white mr-1' />Book Now</Button>
					</div>
				</div>
				<hr className='w-full h-2 my-4' />
				<div className="px-2 md:px-4">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
						<div className="flex flex-col gap-y-4 gap-x-2">
							<div className="bg-white p-2 rounded">
								<h2 className="uppercase p-1 flex flex-row font-bold"><StarIcon className='w-4 mr-2' />AVERAGE REVIEWS</h2>
								<hr className='w-full' />
								<div className="flex flex-row gap-y-4 justify-around p-2">
									<h1 className=' text-gray-600 font-bold'> <span className=' text-4xl font-bold text-gray-800'>9</span>/10</h1>
									<div className="flex flex-col">
										<h1 className=' text-sm font-bold'>Quality</h1>
										<h1 className='text-gray-600 font-bold text-xl'>9/10</h1>
									</div>
									<div className="flex flex-col">
										<h1 className=' text-sm font-bold'>Location</h1>
										<h1 className='text-gray-600 font-bold text-xl'>9/10</h1>
									</div>
									<div className="flex flex-col">
										<h1 className=' text-sm font-bold'>Space</h1>
										<h1 className='text-gray-600 font-bold text-xl'>9/10</h1>
									</div>
									<div className="flex flex-col">
										<h1 className=' text-sm font-bold'>Service</h1>
										<h1 className='text-gray-600 font-bold text-xl'>9/10</h1>
									</div>
								</div>
								<hr className='w-full' />
								<h2 className="uppercase flex py-2 flex-row justify-center font-bold"><StarIcon className='w-4 mr-2' />ADD A REVIEWS</h2>
							</div>
							<div className="bg-white px-3 py-4 rounded">
								<h2 className="uppercase p-1 flex flex-row font-bold"><FileSpreadsheet className='w-4 mr-1' /> DESCRIPTION</h2>
								<hr className='w-full' />
								<div className="py-1">
									<p className=" text-sm font-normal">A preserved neo-classical icon dating back to the 19th century, the Pera Palace Hotel is a uniquely atmospheric context of the remarkable history, comfort following the conditions of the modern world and serene overlooks. Blend of neo-classical, art nouveau and oriental style; the building sketched with 115 rooms including 16 suites. Each one distinctively shaped to display unique details and to combine with the more than a hundred years of history that provide the hotel its incomparable grace.</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-y-4 gap-2 mb-4">
							<div className="bg-white px-3 py-4 rounded">
								<h2 className="uppercase p-1 flex flex-row font-bold"><Bookmark className='w-4 mr-1' />BUSINESS INFO</h2>
								<hr className='w-full' />
								<div className="px-3 py-4  flex flex-col gap-y-5">
									<h1 className=" text-sm flex flex-row items-center font-medium hover:text-pink-400"> <MailIcon className='w-6 mr-3' /> info@perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <PhoneCallIcon className='w-6 mr-3' />+8801793874052 </h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <Globe className='w-6 mr-3' />https://www.perapalace.com</h1>
									<h1 className=" text-sm flex flex-row items-center font-medium  hover:text-pink-400"> <MapPin className='w-6 mr-3' />Kurigram</h1>
								</div>
							</div>
							<div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
								<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
									<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
									<div className="p-2">
										<h2 className=" text-lg font-bold">Pizza</h2>
										<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
										<p className="text-sm font-normal">Kurigram restaurant</p>
									</div>
								</div>
								<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
									<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
									<div className="p-2">
										<h2 className=" text-lg font-bold">Pizza</h2>
										<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
										<p className="text-sm font-normal">Kurigram restaurant</p>
									</div>
								</div>
								<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
									<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
									<div className="p-2">
										<h2 className=" text-lg font-bold">Pizza</h2>
										<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
										<p className="text-sm font-normal">Kurigram restaurant</p>
									</div>
								</div>
								<div className="flex flex-col gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
									<Image src="/pizza.jpg" className=' w-full object-cover rounded' alt='pizza' width={300} height={200} />
									<div className="p-2">
										<h2 className=" text-lg font-bold">Pizza</h2>
										<h2 className="text-base font-bold flex flex-row"><span className='text-orange-400 mr-4'>4.5</span>  <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /> <Star color="#e3ad16" className='w-4' /><StarHalf className='w-4' color="#e3ad16" /></h2>
										<p className="text-sm font-normal">Kurigram restaurant</p>
									</div>
								</div>
							</div>
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

export default EducationCard