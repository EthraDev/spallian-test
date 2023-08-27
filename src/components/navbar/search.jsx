import React, {useRef, useState} from 'react';
import Arrow from './arrow';

export default function Search({setId,setName,setFirstType,setSecondType,setHeight,setWeight}) {

    const inputRef = useRef();
    const [currentId, setCurrentId] = useState(1);

    async function getPokemon(pokeId){
      const pokemon = await fetch(" https://pokeapi.co/api/v2/pokemon/" + pokeId)
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
    async function search(event) {
        if (event.key === 'Enter') {
          getPokemon(inputRef.current.value);
          setCurrentId(inputRef.current.value);
        }
      };
      
      function handleNext() {
        getPokemon(parseInt(currentId) + 1);
        setCurrentId(parseInt(currentId) + 1)
      }
    
      function handlePrevious() {
        getPokemon(parseInt(currentId) - 1);
        setCurrentId(parseInt(currentId) - 1)
        
      }
    
      if (setId < 1) {
        setId(1);
      }
      
  return (
    <div>
        <Arrow orientation="←" handle={handlePrevious}/>
        <input ref={inputRef} type="text" placeholder="Search" onKeyDown={search} />
        <Arrow orientation="→" handle={handleNext}/>
    </div>
  );
};