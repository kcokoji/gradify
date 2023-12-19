import prisma from "../../libs/prismaDB";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function POST(request) {
  const body = await request.json();
  const date = new Date().toLocaleDateString();
  const session = await getServerSession();
  const email = session?.user?.email;
  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const { folderName, semesterName, subjects, userEmail } = body;
  if (!folderName || !semesterName || !subjects) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const user = await prisma.user.update({
      where: {
        email: userEmail,
      },

      data: {
        resultFolder: {
          create: [
            {
              name: folderName,
              createdAt: date,
              semesters: {
                create: [
                  {
                    name: semesterName,
                    subjects: {
                      create: subjects.map((subject) => ({
                        // Specify the properties of each subject here
                        name: subject.name,
                        grade: subject.grade,
                        unit: subject.unit,
                        code: subject.code,
                      })),
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(
      { message: "Missing Fields", err },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const body = await request.json();
  const { folderId } = body;
  const session = await getServerSession();
  const email = session?.user?.email;

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const deleteFolder = await prisma.resultFolder.delete({
      where: {
        id: folderId,
      },
    });

    return NextResponse.json(deleteFolder);
  } catch (err) {
    return NextResponse.json(
      { message: "Error deleting folder", err },
      { status: 500 }
    );
  }
}
