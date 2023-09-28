import Provider from "../context/AuthContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Footer from "../components/Footer";
import Navbar from "./components/Navbar";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <section>
      <Navbar
        image={session?.user?.image}
        name={session?.user?.name}
        email={session?.user?.email}
      />
      <Provider>{children}</Provider>
      {/* <Footer /> */}
    </section>
  );
}
