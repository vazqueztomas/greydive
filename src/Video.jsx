import React from 'react'
import { useParams } from 'react-router-dom'
import ClientName from './components/ClientName'
import Header from './components/Header'
import Tareas from './components/Tareas'
import Transcripcion from './components/Transcripcion'
import data from './data/db.json'
import './styles/Video.css'

const Video = () => {
  let params = useParams()
  const id = params.id;

  return (
    <>
      <Header/>
      <section className='container'>
          <ClientName name = {data[id].cliente}/>
          <h3 className='test'>Test: Test de usabilidad del sitio web.</h3>
          <pre>
            <div className='video-responsive'>
              <h4 className='titulo'>Video del testeador: </h4>
              <iframe src = {data[id].linkVideo} title={data[id].cliente} frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
            </div>
          </pre>
          <Transcripcion transcripcion={data[id].transcripcion}/>
          <Tareas tareas = {data[id].preguntas} escenario = {data[id].escenario}/>
      </section>
    </>
  )
}

export default Video;
