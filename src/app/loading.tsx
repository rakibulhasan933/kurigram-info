import { Loader2 } from 'lucide-react'
import React from 'react'

export default function loading() {
	return (
		<div className='py-20 flex justify-center'>
			<Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
		</div>
	)
}