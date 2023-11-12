import Image from 'next/image'
import React from 'react'

function TeacherCard() {
	return (
		<>
			<div className="flex flex-row gap-x-1 items-center rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' object-cover rounded' alt='pizza' width={150} height={120} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">MD Rakibul Hasan</h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
			<div className="flex flex-row items-center gap-x-1 rounded-md cursor-pointer bg-white hover:border-pink-400 hover:border-[2px] shadow-xl">
				<Image src="/pizza.jpg" className=' object-cover rounded' alt='pizza' width={150} height={120} />
				<div className="p-2">
					<h2 className=" text-lg font-bold">MD Rakibul Hasan</h2>
					<p className="text-sm font-normal">Kurigram restaurant</p>
				</div>
			</div>
		</>
	)
}

export default TeacherCard