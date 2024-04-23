"use client";
import useGetPokemons from "@/hooks/useGetPokemons";
import PokemonList from "@/feature/Pokemon/PokemonList";

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
        <p>Loading...</p>
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
