import TopEducations from '@/components/TopEducations'
import TopHotels from '@/components/TopHotels'
import TopPlaces from '@/components/TopPlaces'
import TopRestaurant from '@/components/TopRestaurant'
import { GraduationCapIcon, UtensilsCrossedIcon, LandPlotIcon, HotelIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/lib/db/prisma'
import HelpLine from '@/components/HelpLine'
import Stats from '@/components/Stats'
import Team from '@/components/Team'

export default async function Home() {
  const education = await prisma.service.findMany({ where: { category: "education" } });
  const hotels = await prisma.service.findMany({ where: { category: "hotels" } });
  const restaurants = await prisma.service.findMany({ where: { category: "restaurants" } });
  const places = await prisma.service.findMany({ where: { category: "places" } });
  return (
    <main>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full relative">
          {/* Image Size 1280X400 */}
          <Image src="/london.jpg" className='w-full object-cover opacity-90' priority={true} width={1280} height={400} alt='banner' />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className=" md:text-4xl text-xl  text-center md:mb-12 mb-2 text-white font-extrabold uppercase ">Welcome To KURIGRAM</h1>
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
            <h1 className=" text-center text-2xl font-bold mb-4">Kurigram District</h1>
            <p className=" font-light text-sm">Kurigram District is a district of Bangladesh in the Rangpur Division. The district is located in northern Bangladesh along the country border with India. Under Indian rule, the area was organized as a mahakuma and was not established as a district until 1984.
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
      {/* Category */}
      <div className="md:px-20 px-4 md:py-12 py-6">
        <h1 className="text-center text-2xl font-bold md:py-10 py-4">Category</h1>
        <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
          <Link href="/education">
            <div className="flex flex-col md:gap-y-6 gap-y-1 rounded items-center md:py-8 py-4  hover:shadow-xl px-2 border-2">
              <GraduationCapIcon color='blue' size={40} />
              <h1 className='md:text-xl text-sm font-bold'>Institutions</h1>
            </div>
          </Link>
          <Link href="/restaurants">
            <div className="flex flex-col md:gap-y-6 gap-y-1 rounded items-center md:py-8 py-4  hover:shadow-xl px-2 border-2">
              <UtensilsCrossedIcon color='blue' size={40} />
              <h1 className='md:text-xl text-sm font-bold'>Restaurants</h1>
            </div>
          </Link>
          <Link href="/places">
            <div className="flex flex-col md:gap-y-6 gap-y-1 rounded items-center md:py-8 py-4  hover:shadow-xl px-2 border-2">
              <LandPlotIcon color='blue' size={40} />
              <h1 className='md:text-xl text-sm font-bold'>Places</h1>
            </div>
          </Link>
          <Link href="/hotels">
            <div className="flex flex-col md:gap-y-6 gap-y-1 rounded items-center md:py-8 py-4  hover:shadow-xl px-2 border-2">
              <HotelIcon color='blue' size={40} />
              <h1 className='md:text-xl text-sm font-bold'>Hotels</h1>
            </div>
          </Link>
        </div>
      </div>
      <TopHotels data={hotels} />
      <TopPlaces data={places} />
      <TopRestaurant data={restaurants} />
      <TopEducations data={education} />
      <Stats />
      <Team />
      <HelpLine />
    </main>
  )
}
