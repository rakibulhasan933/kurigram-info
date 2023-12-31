import Image from 'next/image'

export default async function Raomari() {
	return (
		<main>
			<div className="flex flex-col items-center gap-2">
				<div className="w-full relative">
					{/* Image Size 1280X400 */}
					<Image src="/london.jpg" className='w-full object-cover opacity-90' priority={true} width={1280} height={400} alt='banner' />
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
						<h1 className=" md:text-4xl text-xl  text-center md:mb-12 mb-2 text-white font-extrabold uppercase ">Welcome To Raomari</h1>
					</div>
				</div>
			</div>
			{/* Hero */}
			<div className="md:mx-3 mx-2 my-6">
				<div className="grid md:grid-cols-2  grid-cols-1 gap-2">
					<div className="flex justify-center">
						<Image src="/hero.jpg" alt='hero' className=' object-cover rounded-md' width={500} height={500} priority={true} />
					</div>
					<div className="flex flex-col px-3 my-4">
						<h1 className=" text-center text-2xl font-bold mb-4">Raomari District</h1>
						<p className=" font-light text-sm">Raomari is the northernmost upazila of Kurigram District in the Division of Rangpur, Bangladesh.
						</p>
						<p className="mb-[2px] font-light text-sm">
							The name <span className='font-bold text-base'>Kurigram</span> is derived from the words Kuri and Gram. Kuri  <span className='font-bold text-base'>twenty</span> and Gram means <span className='font-bold text-base'>village</span> in Kol, a Munda language formerly spoken in the district.
						</p>
						<p className="mb-[2px] font-light text-sm">
							Kurigram District is located in the northern region of Bangladesh along the border with India. The district is bordered by Jamalpur district of Mymensingh division to the south, Gaibandha, Rangpur and Lalmonirhat districts as well as West Bengal state of India to the west, and the Indian states of Assam and Meghalaya to the east. In total, the district has 278.28 kilometers of international border with India. The district consists of 9 upazilas, 72 unions, and 1,872 villages.
							The climate of the district is higher in the summer and lower in the winter compared to other parts of Bangladesh. The average maximum temperature is around 32_33 degrees Celsius and the average minimum temperature is around 5-10 degrees Celsius. Like other parts of Bangladesh, the district experiences heavy rainfall during the rainy season, and the average annual rainfall is about 3,000 millimetres (120 in).
							Several rivers flow through the center of Kurigram. The major rivers are the Brahmaputra (now called the Jamuna), Dharla, and Teesta. Minor rivers include the Dudhkumar, Phulkuar, Gangadhar, Jinjiram, and others. The three northern upazilas of the district were recently connected to the southern upazilas by a bridge over the Dharla river.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
