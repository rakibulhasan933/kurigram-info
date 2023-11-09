import { GraduationCapIcon, UtensilsCrossedIcon, LandPlotIcon, HotelIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center gap-2">
        <div className="w-full relative">
          {/* Image Size 1280X400 */}
          <Image src="/london.jpg" className='w-full object-cover' priority={true} width={1280} height={400} alt='banner' />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <h1 className=" md:text-4xl text-xl  text-center md:mb-12 mb-2 text-white font-extrabold">KURIGRAM</h1>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-4 md:py-12 py-6">
        <h1 className="text-center text-2xl font-bold md:py-10 py-4">Category</h1>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          <Link href="/education">
            <div className="cursor-pointer flex flex-col gap-y-6 rounded items-center py-8 hover:shadow-xl px-2 border-2">
              <GraduationCapIcon size={50} />
              <h1 className=' text-xl font-bold'>Educational Institutions</h1>
            </div>
          </Link>
          <Link href="/restaurants">
            <div className="cursor-pointer flex flex-col gap-y-6 rounded items-center py-8 hover:shadow-xl px-2 border-2">
              <UtensilsCrossedIcon size={50} />
              <h1 className=' text-xl font-bold'>Restaurants</h1>
            </div>
          </Link>
          <Link href="/places">
            <div className="cursor-pointer flex flex-col gap-y-6 rounded items-center py-8 hover:shadow-xl px-2 border-2">
              <LandPlotIcon size={50} />
              <h1 className=' text-xl font-bold'>Places</h1>
            </div>
          </Link>
          <Link href="/education">
            <div className="cursor-pointer flex flex-col gap-y-6 rounded items-center py-8 hover:shadow-xl px-2 border-2">
              <HotelIcon size={50} />
              <h1 className=' text-xl font-bold'>Hotels</h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
