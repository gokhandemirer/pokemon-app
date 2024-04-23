"use client";
import useGetPokemons from "@/hooks/useGetPokemons";
import { useRouter } from "next/navigation";
import PokemonList from "@/feature/Pokemon/PokemonList";
import Loader from "@/components/UI/Loader";
import { Pokemon } from "@/types";

export default function PokemonListPage() {
  const router = useRouter();
  const {
    loading,
    pokemons,
    currentPage,
    lastPage,
    setCurrentPage,
    fetchLimit,
  } = useGetPokemons();

  const handleRowClick = (row: Pokemon) => {
    router.push(`/pokemon/${row.name}`);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <PokemonList
          data={pokemons!}
          currentPage={currentPage}
          lastPage={lastPage}
          fetchLimit={fetchLimit}
          setCurrentPage={setCurrentPage}
          onClickRow={handleRowClick}
        />
      )}
    </div>
  );
}
