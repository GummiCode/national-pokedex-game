import React, { useEffect, useState } from 'react';
import Header from './Header';
import Grid from './Grid';
import refreshPokemonData from '../helpers/refreshPokemonData';

const Game = () => {
  const [busy, setBusy] = useState(true);

  const [difficulty, setDifficulty] = useState({
    mode: 'easy',
    numPokemon: 6,
  });

  const [pokemonData, setPokemonData] = useState({
    answer: null,
    selected: [],
    pokemon: [],
  });

  useEffect(() => {
    refreshPokemonData(setBusy, setPokemonData, difficulty);
  }, [difficulty]);

  return (
    <>
      <Header
        busy={busy}
        answer={pokemonData.answer}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setBusy={setBusy}
        setPokemonData={setPokemonData}
      />
      <Grid
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
      />
    </>
  );
};
export default Game;
