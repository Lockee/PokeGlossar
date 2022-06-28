import { trpc } from "@/utils/trpc";
import styles from "@/styles/Overview.module.css";
import { getRandomPokemonId } from "@/utils/pokemon";
import { useState } from "react";

export const Overview: React.FC<{}> = () => {
  const [pokeId, setPokeId] = useState(() => getRandomPokemonId());
  const [pokeId2, setPokeId2] = useState(() => getRandomPokemonId());
  const pokemon = trpc.useQuery(["get-pokemon-by-id", { id: pokeId }]);
  const pokemon2 = trpc.useQuery(["get-pokemon-by-id", { id: pokeId2 }]);

  const generateNewPokemon = () => {
    setPokeId(getRandomPokemonId());
    setPokeId2(getRandomPokemonId());
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {!pokemon.isLoading && !pokemon2.isLoading && (
          <>
            <div className={styles.imageContainer}>
              <span>{pokemon.data?.name}</span>
              <img
                className={styles.sprite}
                src={pokemon.data?.sprites.front_default!}
              />
            </div>
            <div className={styles.imageContainer}>
              <span>{pokemon2.data?.name}</span>
              <img
                className={styles.sprite}
                src={pokemon2.data?.sprites.front_default!}
              />
            </div>
          </>
        )}
      </div>
      <div className={styles.spacer} />
      <button
        onClick={() => {
          generateNewPokemon();
        }}
      >
        Generate new Pokemon
      </button>
    </div>
  );
};
