import prisma from "../../libs/prismaDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usersWithSubjects = await prisma.user.findMany({
      include: {
        resultFolder: {
          include: {
            semesters: {
              include: {
                subjects: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(usersWithSubjects);
  } catch (err) {
    return NextResponse.json(
      { message: "Result Not Found", err },
      { status: 500 }
    );
  }
}
