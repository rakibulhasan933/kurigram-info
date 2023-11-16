import { MenuProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
	try {
		const body: MenuProps = await request.json();
		const { productId, name, image, price } = body;
		const result = await prisma.menu.create({
			data: {
				productId, price, name, image
			}
		})
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};