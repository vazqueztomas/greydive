import React from 'react'

const ClientName = ({name}) => {
  let cliente = name.charAt(0).toUpperCase() + name.slice(1);
  return <h1 className='titulo'>Nombre del cliente: {cliente}</h1> 
}

export default ClientName;
