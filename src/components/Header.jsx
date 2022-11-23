import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header' onClick={() => {navigate('/')}}>Greydive</div>
  )
}

export default Header