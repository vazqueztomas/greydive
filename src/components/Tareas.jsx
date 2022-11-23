import React from 'react'
import '../styles/Video.css'

const Tareas = ({tareas, escenario}) => {
  return (
    <>
        <div>
            <h1 className='titulo'>Tareas a realizar : </h1>
            <h4 className='escenario'>
                {escenario}
            </h4>
        </div>

        <div className='tareasContainer'>
            {tareas.map((el, id) => 
                <div key = {id} className = 'tareas'>
                    <h4>Tarea {id + 1}:</h4>
                    <h5 >{el.texto.split('\n')}</h5>
                    <h6 className='duration'>Duración de la tarea: {el.tiempo}</h6>
                </div>
            )}
        </div>
    </>
  )
}

export default Tareas