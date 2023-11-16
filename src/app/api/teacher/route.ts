import { TeacherProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
	try {
		const body: TeacherProps = await request.json();
		const { productId, name, image, department, phone } = body;
		const result = await prisma.teacher.create({
			data: {
				productId, name, department, phone, image
			}
		})
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};