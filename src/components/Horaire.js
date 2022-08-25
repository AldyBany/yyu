import React from 'react'

const Horaire = ({item}) => {
  return (
    <div className="grid grid-cols-2 mb-1">
        <div className="text-blue">{item.jour}:</div>
        <div className="text-blue">{item.heure}</div>

    </div>
  )
}

export default Horaire