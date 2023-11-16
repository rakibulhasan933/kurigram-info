import { DoctorProps } from "@/type";
import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";


export const POST = async (request: Request) => {
	try {
		const body: DoctorProps = await request.json();
		const { productId, name, image, department, phone } = body;
		const result = await prisma.doctor.create({
			data: {
				productId, name, department, phone, image
			}
		})
		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.json(error);
	}
};