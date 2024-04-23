import { useRouter } from "next/navigation";
import { PokemonDetail } from "@/types";

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

function InfoLine({ title, value }: { title: string; value: string | number }) {
  return (
    <p>
      <strong>{title}:</strong> {value}
    </p>
  );
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const router = useRouter();

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full">
        <div className="flex flex-col mb-4 text-2xl gap-2">
          <button
            className="text-sm cursor-pointer text-left"
            style={{ width: "fit-content" }}
            onClick={() => router.push("/pokemon")}
          >
            Back to list
          </button>
          <span>{pokemon.name}</span>
        </div>
        <div className="flex flex-col mb-4">
          <InfoLine title="ID" value={pokemon.id} />
          <InfoLine title="Name" value={pokemon.name} />
          <InfoLine title="Height" value={pokemon.height} />
          <InfoLine title="Weight" value={pokemon.weight} />
          <InfoLine title="Base Experience" value={pokemon.base_experience} />
          <InfoLine title="Order" value={pokemon.order} />
          <InfoLine
            title="Is Default"
            value={pokemon.is_default ? "Yes" : "No"}
          />
        </div>

        <div className="flex flex-col">
          <strong>Abilities:</strong>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
