"use client";
import { notFound } from "next/navigation";
import Loader from "@/components/UI/Loader";
import PokemonCard from "@/feature/Pokemon/PokemonCard";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import Header from "@/components/UI/Layout/Header";

type PokemonDetailPageProps = {
  name: string;
};

export default function PokemonDetailPage({
  params,
}: {
  params: PokemonDetailPageProps;
}) {
  const { name } = params;
  const { pokemon, loading, pokemonNotFound } = useGetPokemonDetail(name);

  if (loading) {
    return <Loader />;
  }

  if (pokemonNotFound) {
    return notFound();
  }

  return (
    <>
      <Header title="Pokemon Detail" />
      <div className="py-4"></div>
      <main>
        <div className="flex justify-center w-full">
          <div className="flex w-full md:w-1/2">
            <PokemonCard pokemon={pokemon!} />
          </div>
        </div>
      </main>
    </>
  );
}
