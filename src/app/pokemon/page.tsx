"use client";
import useGetPokemons from "@/hooks/useGetPokemons";
import { useRouter } from "next/navigation";
import PokemonList from "@/feature/Pokemon/PokemonList";
import Loader from "@/components/UI/Loader";
import { Pokemon } from "@/types";
import Header from "@/components/UI/Layout/Header";
import Link from "next/link";

export default function PokemonListPage() {
  const router = useRouter();
  const {
    loading,
    error,
    pokemons,
    currentPage,
    lastPage,
    setCurrentPage,
    fetchLimit,
  } = useGetPokemons();

  const handleRowClick = (row: Pokemon) => {
    router.push(`/pokemon/${row.name}`);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Header title="Pokemon List">
        <Link
          href={"/"}
          className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Go to Home
        </Link>
      </Header>
      <div className="py-4"></div>
      <main className="w-8/12 mx-auto">
        <PokemonList
          data={pokemons!}
          currentPage={currentPage}
          lastPage={lastPage}
          fetchLimit={fetchLimit}
          setCurrentPage={setCurrentPage}
          onClickRow={handleRowClick}
        />
      </main>
    </>
  );
}
