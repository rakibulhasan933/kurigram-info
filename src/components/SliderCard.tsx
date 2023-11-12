"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

function SliderCard() {
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
	)
}

export default SliderCard