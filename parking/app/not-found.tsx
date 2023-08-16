import Link from "next/link";

export default async function Notfound() {
  return (
    <div className="flex min-h-[100dvh] justify-center items-center">
      <div>
        <h2 className="font-bold text-3xl">NOT FOUND </h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            메인 화면으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}
