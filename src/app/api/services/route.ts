import { ServicesIProps, UpdateIProps } from "@/type";
import { NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

// All Data
export const GET = async () => {
	try {
		const result = await prisma.service.findMany();
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}
// Services Update
export const PATCH = async (request: Request) => {
	try {
		const body: UpdateIProps = await request.json();
		const { id, title, description, photos, thumbnails } = body;
		const result = await prisma.service.update({
			where: {
				id
			},
			data: {
				title,
				description,
				photos,
				thumbnails
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};

// Deleted Services
export const DELETE = async (request: Request) => {
	try {
		const body = await request.json();
		const { id } = body;
		const result = await prisma.service.delete({
			where: {
				id
			}
		});
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
}


// Create Services
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