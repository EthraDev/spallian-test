import React, {useRef} from 'react';

export default function Search({setId,setName,setFirstType,setSecondType,setHeight,setWeight}) {

    const inputRef = useRef();

    async function search(event) {
        if (event.key === 'Enter') {
          const pokemon = await fetch(" https://pokeapi.co/api/v2/pokemon/" + inputRef.current.value)
          const pokemonJson = await pokemon.json();
            console.log(pokemonJson);
            setId(pokemonJson.id);
            setName(pokemonJson.name);
            setFirstType(pokemonJson.types[0].type.name);
            if (pokemonJson.types.length > 1) {
                setSecondType(pokemonJson.types[1].type.name);
            } else { setSecondType(""); }
            setHeight(pokemonJson.height);
            setWeight(pokemonJson.weight);
        }
      };
 
  return (
    <div>
        <input ref={inputRef} type="text" placeholder="Search" onKeyDown={search} />
    </div>
  );
};