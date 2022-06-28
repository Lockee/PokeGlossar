import { trpc } from "@/utils/trpc";
import styles from "@/styles/Overview.module.css";
import { getRandomPokemonId } from "@/utils/pokemon";
import { useState } from "react";

export const Overview: React.FC<{}> = () => {
  const [pokeId, setPokeId] = useState(() => getRandomPokemonId());
  const [pokeId2, setPokeId2] = useState(() => getRandomPokemonId());
  const pokemon = trpc.useQuery(["get-pokemon-by-id", { id: pokeId }]);
  const pokemon2 = trpc.useQuery(["get-pokemon-by-id", { id: pokeId2 }]);

  if (pokemon.isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imageContainer}>
          <img
            className={styles.sprite}
            src={pokemon.data?.sprites.front_default!}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.sprite}
            src={pokemon2.data?.sprites.front_default!}
          />
        </div>
      </div>
    </div>
  );
};
