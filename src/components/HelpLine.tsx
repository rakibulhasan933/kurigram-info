import React from 'react'

function HelpLine() {
	return (
		<div className='bg-gradient-to-r from-violet-100 to-violet-200 py-10'>
			<h2 className="text-2xl my-6 text-center font-bold text-blue-600">Emergency Contact Numbers</h2>
			<div className="flex justify-center px-4">
				<div className="flex flex-col justify-start">
					<h2 className=" text-lg font-bold my-2">Kurigram Fire Service: <span className='ml-2 text-blue-500'>01901-023337</span></h2>
					<h2 className=" text-lg font-bold my-2">Kurigram Police:<span className='ml-2 text-blue-500'> +8801320133300</span></h2>
					<h2 className=" text-lg font-bold my-2">Kurigram Nesco Helpline:<span className='ml-2 text-blue-500'> +8801320133300</span></h2>
					<h2 className=" text-lg font-bold my-2">Emergency Ambulance :<span className='ml-2 text-blue-500'> +8801730-324808</span></h2>
				</div>
			</div>
		</div>
	)
}

export default HelpLine