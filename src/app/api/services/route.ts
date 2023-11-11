import { ServicesIProps } from "@/type";
import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";


export const POST = async (request: Request) => {
	try {
		const body: ServicesIProps = await request.json();
		const { thumbnails, photos, title, category, description } = body;
		const result = await prisma.service.create({
			data: {
				title, description, category, photos, thumbnails
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}