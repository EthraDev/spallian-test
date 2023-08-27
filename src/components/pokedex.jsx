import React, { useState } from 'react';
import Characteristics from './characteristics/characteristics';
import Navbar from './navbar/navbar';
import Image from './image';
import Identity from './identity';
import './pokedex.css';

export default function Pokedex() {

    const [id, setId] = useState(1);
    const [name, setName] = useState("Bulbasaur");
    const [firstType, setFirstType] = useState("grass");
    const [secondType, setSecondType] = useState("poison");
    const [weight, setWeight] = useState(69);
    const [height, setHeight] = useState(7);

    const typesColors = {

        "grass": "#78C850",
        "poison": "#A040A0",
        "fire": "#F08030",
        "flying": "#A890F0",
        "water": "#6890F0",
        "bug": "#A8B820",
        "normal": "#A8A878",
        "electric": "#F8D030",
        "ground": "#E0C068",
        "fighting": "#C03028",
        "psychic": "#F85888",
        "rock": "#B8A038",
        "ice": "#98D8D8",
        "ghost": "#705898",
        "dragon": "#7038F8",
        "dark": "#705848",
        "steel": "#B8B8D0",
        "fairy": "#EE99AC"

    }
 
  return (
    <div>
        <Navbar setId={setId} setName={setName} setFirstType={setFirstType} setSecondType={setSecondType} setHeight={setHeight} setWeight={setWeight}/>
        <div className='image'>
          <Image image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png"}/>
          <div className='characteristic'>
            <div className='text'>
            <h2>About</h2>
            <h4>Name</h4>
          </div>
            <div className='name'>
              <Identity name={name + " #"} id={id}/>
            </div>
            <div className='types'>
                <div style={{backgroundColor: typesColors[firstType]}}>
                <Characteristics characteristics={firstType}/>
                </div>
                <div style={{backgroundColor: typesColors[secondType]}}>
                <Characteristics characteristics={secondType}/>
                </div>
            </div>
            <div className='weight-height'>
                <Characteristics characteristics={"Weight : "+ weight / 10 + " kg"}/>
                <Characteristics characteristics={"Height : "+ height / 10 + " m"}/>
            </div>
          </div>
        </div>
    </div>
  );
};