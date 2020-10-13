const getPokemon = (dex) => fetch(`https://pokeapi.co/api/v2/pokemon/${dex}`)
  .then((response) => response.json())
  .then((data) => {
    return (data);
  })
  .catch((error) => {
    console.log(error);
  });

export default getPokemon;
