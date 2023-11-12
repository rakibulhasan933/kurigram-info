import { ReviewI, ReviewProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
	try {
		const body: ReviewProps = await request.json();
		const { photoUrl, productId, userId, userName, comment } = body;
		const result = await prisma.review.create({
			data: {
				productId, photoUrl, userId, userName, comment
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};