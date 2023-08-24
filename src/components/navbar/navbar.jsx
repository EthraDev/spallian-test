import React from 'react';
import Search from './search';
import Arrow from './arrow';

export default function Navbar({setId,setName,setFirstType,setSecondType,setHeight,setWeight}) {
 
  return (
    <div>
        <Arrow orientation="<"/>
        <Search setId={setId} setName={setName} setFirstType={setFirstType} setSecondType={setSecondType} setHeight={setHeight} setWeight={setWeight}/>
        <Arrow orientation=">"/>
    </div>
  );
};