import Content from "@/components/content";
import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
export default async function Home() {

  return (
    <div className="text-bg-dark d-flex justify-content-center flex-column align-items-center">
      <Content/>
    </div>
  );
}
