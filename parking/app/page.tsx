import Image from "next/image";
import { Marker } from "@/public/svgs";

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <p className="text-[14px] sm:text-[18px] md:text-[18px] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            근처 주차장을 찾느라 시간을 허비한 적이 있나요?
          </p>
          <p className="text-[14px] sm:text-[18px] md:text-[18px] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            주차장을 찾는 과정에서 자리가 있는지 불확실한 상태로 접근한 적이
            있나요?
          </p>
          <p className="text-[14px] sm:text-[18px] md:text-[18px] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            주차장에서 나오는 과정에서 예상치 못한 금액으로 인해 기분이 나쁜
            적이 있나요?
          </p>
          <h1 className="flex mt-20 justify-center text-[20px] sm:text-2xl md:text-3xl font-medium title-font mb-4">
            <p className="text-indigo-500">파킹 굿</p>
            <p className="text-gray-900">에서 쉽게 주차장을 찾아보세요!</p>
          </h1>
          <div className="flex mt-16 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 w-[100%] flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              {/* <Image src={Marker} alt="marker" className="w-10 h-10" /> */}
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3"></h2>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px] "></p>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px]"></p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%] flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image src={Marker} alt="marker" className="w-10 h-10" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                주차장 위치를 지도에 표시합니다.
              </h2>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px] ">
                현재 서울에 있는 203곳의 주차장 실시간 정보를 제공하고 있어요.
              </p>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px]">
                전국 주차장으로 점점 확대해 나갈 계획을 갖고 있어요
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-[100%] flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              {/* <Image src={Marker} alt="marker" className="w-10 h-10" /> */}
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3"></h2>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px] "></p>
              <p className="leading-relaxed text-[12px] sm:text-[16px] md:text-[16px]"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
