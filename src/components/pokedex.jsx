import React, { useState } from 'react';
import Characteristics from './characteristics/characteristics';
import Navbar from './navbar/navbar';
import Image from './image';
import Identity from './identity';

export default function Pokedex() {

    const [id, setId] = useState(1);
    const [name, setName] = useState("Bulbasaur");
    const [firstType, setFirstType] = useState("Grass");
    const [secondType, setSecondType] = useState("Poison");
    const [weight, setWeight] = useState(69);
    const [height, setHeight] = useState(7);
 
  return (
    <div>
        <Navbar setId={setId} setName={setName} setFirstType={setFirstType} setSecondType={setSecondType} setHeight={setHeight} setWeight={setWeight}/>
        <Image image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"}/>
        <Identity name={"name : " + name + " id : "} id={id}/>
        <div>
            <Characteristics characteristics={firstType}/>
            <Characteristics characteristics={secondType}/>
        </div>
        <div>
            <Characteristics characteristics={weight / 10 + " kg"}/>
            <Characteristics characteristics={height / 10 + " m"}/>
        </div>
    </div>
  );
};