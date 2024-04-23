"use client";
import useGetPokemons from "@/hooks/useGetPokemons";
import PokemonList from "@/feature/Pokemon/PokemonList";
import Loader from "@/components/UI/Loader";

export default function PokemonListPage() {
  const {
    loading,
    pokemons,
    currentPage,
    lastPage,
    setCurrentPage,
    fetchLimit,
  } = useGetPokemons();

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
        />
      )}
    </div>
  );
}
