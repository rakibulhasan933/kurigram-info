"use client";
import { GraduationCapIcon, HeartIcon, HotelIcon, LocateFixedIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { isMobile } from 'react-device-detect';

function TopEducations() {
	return (
		<div className='my-4 mx-2 md:mx-6'>
			<div className="flex flex-row items-center justify-between mt-2">
				<h2 className="px-4 py-2 rounded md:text-xl text-sm font-medium text-white bg-pink-400 w-fit">Educational Institutions</h2>
				<Link className=' px-4 py-2 hover:text-white w-fit hover:bg-pink-400 rounded text-sm text-pink-400 font-semibold border-2 border-pink-400' href="/education">More</Link>
			</div>
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
			</div>
		</div>
	)
}

export default TopEducations