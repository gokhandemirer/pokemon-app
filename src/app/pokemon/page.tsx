"use client";
import useGetPokemons from "@/hooks/useGetPokemons";
import { useRouter } from "next/navigation";
import PokemonList from "@/feature/Pokemon/PokemonList";
import Loader from "@/components/UI/Loader";
import { Pokemon } from "@/types";
import Header from "@/components/UI/Layout/Header";

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
      <Header title="Pokemon List" />
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
