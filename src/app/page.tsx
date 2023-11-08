import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="my-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-full relative">
            {/* Image Size 1280X400 */}
            <Image src="/london.jpg" className='w-full object-cover' priority={true} width={1280} height={400} alt='banner' />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <h1 className=" md:text-4xl text-xl  text-center md:mb-12 mb-2 text-white font-extrabold">KURIGRAM</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
