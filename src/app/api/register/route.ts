import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { UserProps } from "@/type";


export const POST = async (request: NextRequest) => {
	try {
		const body: UserProps = await request.json();
		const { username, phone, password, photoUrl } = body;
		const data = await prisma.user.create({
			data: {
				username, phone, password, photoUrl
			}
		});
		return NextResponse.json({ message: "Successfully account  created", data });
	} catch (error) {
		// console.log(error);
		return NextResponse.json({ message: "error" });
	};
};