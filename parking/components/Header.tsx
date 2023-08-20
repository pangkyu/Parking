import Image from "next/image";
import { Title } from "@/public/svgs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between mt-[10px]">
      <div className="flex max-w-5xl w-[70%] items-center justify-between ">
        <Link href="/">
          <Image src={Title} alt="parking" className="w-[40px]" />
        </Link>
        <Link href="/parking">
          <p>근처 주차장찾기</p>
        </Link>
      </div>
    </header>
  );
}
