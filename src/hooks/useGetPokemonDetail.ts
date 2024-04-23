import { useEffect, useState } from "react";
import axios from "@/clients/axios";
import { PokemonDetail } from "@/types";
import { AxiosError } from "axios";

export default function useGetPokemonDetail(name: string) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [pokemonNotFound, setPokemonNotFound] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 404) {
            setPokemonNotFound(true);
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  return {
    loading,
    pokemon,
    pokemonNotFound,
  };
}
