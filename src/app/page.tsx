import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-[1300px] mx-auto ">
        <Navbar/>
        <Form/>
      </div>
    </>
  );
}
