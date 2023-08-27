import React from 'react';

export default function Arrow({orientation, handle}) {
 
  return (
    <div>
        <button onClick={handle}>{orientation}</button>
    </div>
  );
};