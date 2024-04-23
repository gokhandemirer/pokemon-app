import { useEffect, useState } from "react";
import axios from "@/clients/axios";
import { PokemonResponse } from "@/types";

export default function useGetPokemons() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonResponse | null>(null);
  const [lastPage, setLastPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchLimit = Number(process.env.FETCH_LIMIT);

  useEffect(() => {
    const offset = (currentPage - 1) * fetchLimit;
    const endpoint = `/pokemon?limit=${fetchLimit}&offset=${offset}`;

    const fetchPokemons = async () => {
      setLoading(true);

      try {
        const response = await axios.get(endpoint);
        setPokemons(response.data);
        setLastPage(Math.ceil(response.data.count / fetchLimit));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [currentPage, fetchLimit]);

  return {
    loading,
    pokemons,
    currentPage,
    lastPage,
    setCurrentPage,
    setLastPage,
    fetchLimit,
  };
}
