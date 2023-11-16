import Script from 'next/script'
import React, { useEffect } from 'react'

function Comment({ data, id }: {
	data: {
		id: string;
		title: string;
		thumbnails: string;
		category: string;
		photos: string[];
		description: string;
	} | null, id: string
}) {
	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0`}
			></Script>
			<div
				className="fb-comments bg-gray-100 p-4 rounded-md w-full"
				data-href={`https://kurigram.vercel.app/${data?.category}/${id}`}
				data-width="400" // Customize width as needed
				data-numposts="5" // Number of comments to display
			></div>
		</>
	)
}

export default Comment