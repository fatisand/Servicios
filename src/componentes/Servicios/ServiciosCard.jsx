import React from 'react';

function ServiciosCard({ src, h3, p }) {
  return (
    <>
    <div className='card'>
    <img src={src} className="hover" alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>

    </>
  );
}

export default ServiciosCard;
