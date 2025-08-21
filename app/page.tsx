import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // <section className=" gird grid-cols-1 md:grid-cols-2 items-center gap-8 p-4">
    <>
    <Navbar />
    <section className=" grid grid-cols-1 md:grid-cols-2 items-center gap-9 px-8  py-16">
      <div>
        <h1 className="text-xs py-2">Your go-to platform for 3D printing files</h1>

      <p className="text-4xl font-bold">Discover what’s possible with 3D printing!</p>
      <p>Join our community of creators and explore a vast library of user-submitted models.</p>
      <button className="font-bold border mt-6 py-2 px-2 cursor-pointer uppercase hover:bg-black hover:text-white"> Browse models</button>
      </div>
      <Image    className="rounded-full" src="/home.png" width={500} height={500}/>
    </section>
    </>
  );
}
