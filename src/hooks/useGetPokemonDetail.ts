import { useEffect, useState } from "react";
import axios from "@/clients/axios";
import { PokemonDetail } from "@/types";

export default function useGetPokemonDetail(name: string) {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Partial<PokemonDetail> | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  return {
    loading,
    pokemon,
  };
}
