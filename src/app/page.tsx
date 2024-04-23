import Header from "@/components/UI/Layout/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header title="Pokemon APP" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link
          href={"/pokemon"}
          className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Go to Pokemon List
        </Link>
      </main>
    </>
  );
}
