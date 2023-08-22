import Image from "next/image";
import { Title } from "@/public/svgs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src={Title}
            alt="parkingGood"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          />
          <span className="ml-3 text-xl">Parking Good</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/parking" className="mr-5 hover:text-gray-900">
            <button className="bg-indigo-500 focus:outline-none text-white hover:bg-indigo-600 rounded w-[140px] h-[30px]">
              주차장 찾기
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
