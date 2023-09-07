import { SEOUL_GU } from "@/constants/constant";

export default function GuList() {
  return (
    <>
      {Object.values(SEOUL_GU).map((value, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className="flex text-white bg-indigo-500 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900 text-[3px] lg:text-[13px]"
          >
            {value}
          </button>
        );
      })}
    </>
  );
}
