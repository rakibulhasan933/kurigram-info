"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { ServicesProps } from '@/type';

function SliderCard({ data }: { data: ServicesProps }) {
	const photo = data.photos;
	return (
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
			{
				photo.map((item, index) => (
					<SwiperSlide key={index}>
						<Image src={item} className=' w-full object-cover' alt='banner' width={1280} height={400} />
					</SwiperSlide>
				))
			}
		</Swiper>
	)
}

export default SliderCard