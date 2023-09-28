import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import Home from "./components/Home";

export default async function dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen  bg-gray-100">
      <div className="container mx-auto py-8 max-2xl">
        <Home name={session?.user?.name} />
      </div>
    </div>
  );
}
