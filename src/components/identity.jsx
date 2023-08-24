import React from 'react';

export default function Identity({name, id}) {
 
  return (
    <div>
      <span>{name}</span>
      <span>{id}</span>
    </div>
  );
};