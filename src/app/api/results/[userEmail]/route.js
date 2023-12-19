import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDB";

export async function GET(req, { params }) {
  const userEmail = params.userEmail;
  try {
    const resultFolder = await prisma.resultFolder.findMany({
      where: { userEmail },
    });

    if (!userEmail) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json(resultFolder);
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error", error: err },
      { status: 500 }
    );
  }
}
