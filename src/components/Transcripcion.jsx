import React from 'react'
import '../styles/Video.css';

const Transcripcion = ({transcripcion}) => {
    let data = transcripcion.split('<br>').join('\n')
  return (
    <div>
    <h4 style = {{marginTop: '16px', marginBottom: '16px', color : '#41416d'}}>Transcripción del video:</h4>
    <div className='transcripcion'>
      {data}
    </div>
  </div>
  )
}

export default Transcripcion