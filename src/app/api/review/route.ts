import { ReviewI, ReviewProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const GET = async (request: Request) => {
	try {
		const body: ReviewI = await request.json();
		const { productId } = body;

		const result = await prisma.review.findMany({
			where: {
				productId
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}

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