import Image from "next/image";

export default function Testimonials() {
	return (
		<div className="mx-4 my-6">
			<h2 className="my-4 text-2xl text-center font-bold text-orange-400">Testimonials</h2>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-x-1 gap-y-2">
				<div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] px-2 py-4 rounded-md flex flex-col gap-y-2 items-center">
					<p className=" text-base font-bold">“Kurigram is a wonderful place, if you visit here, your mind will feel better.”</p>
					<Image className=" rounded-full" priority={true} src="https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg" width={50} height={50} alt="profile" />
					<p className=" font-bold text-sm">Rakibul Hasan</p>
				</div>
				<div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] px-2 py-4 rounded-md flex flex-col gap-y-2 items-center">
					<p className=" text-base font-bold">“Kurigram is a wonderful place, if you visit here, your mind will feel better.”</p>
					<Image className=" rounded-full" priority={true} src="https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg" width={50} height={50} alt="profile" />
					<p className=" font-bold text-sm">Rakibul Hasan</p>
				</div>
			</div>
		</div>
	)
}
