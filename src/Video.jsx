import React from 'react'
import './video.css'

const Video = ({video}) => {

  return (
    <div className='container'>
        <h1>Nombre del cliente</h1>
        <h3>{video.cliente}</h3>

        <video src = {video.linkVideo} controls width='600px'></video>

        <h4>Transcripción</h4>
        <div style = {{overflow: 'scroll', maxHeight: '150px', maxWidth: '400px', margin: '30px 10px', whiteSpace: 'pre-wrap'}}>
        
            {video.transcripcion.split('<br>').join('\n\r')}
        </div>
        <h4>Tareas</h4>
        <h6>{video.escenario}</h6>
        <hr/>
        <div className='tareas'>    
        {video.preguntas.map((el, id) => 
            <div key = {id} >
                {console.log(el.texto.includes('n'))}
                <h4>Tarea {id}:</h4>
                <h5 >{el.texto.split('\n')}</h5>
                <h6 className='duration'>Duración de la tarea: {el.tiempo}</h6>
                <hr className='hr'/>
            </div>
        )}
        </div>
    </div>
  )
}

export default Video