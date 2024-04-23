export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  base_experience: number;
  is_default: boolean;
  location_area_encounters: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  cries: {
    latest: string;
    lageacy: string;
  };
  forms: [
    {
      name: string;
      url: string;
    }
  ];
  game_indices: [
    {
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }
  ];
  held_items: [
    {
      item: {
        name: string;
        url: string;
      };
      version_details: [
        {
          rarity: number;
          version: {
            name: string;
            url: string;
          };
        }
      ];
    }
  ];
  species: {
    name: string;
    url: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
