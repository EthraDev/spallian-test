import React, { useState } from 'react';
import Search from './search';
import Arrow from './arrow';
import './navbar.css';

export default function Navbar({setId,setName,setFirstType,setSecondType,setHeight,setWeight}) {

 
  return (
    <div className="flexSearch">
        
        <Search setId={setId} setName={setName} setFirstType={setFirstType} setSecondType={setSecondType} setHeight={setHeight} setWeight={setWeight}/>

    </div>
  );
};