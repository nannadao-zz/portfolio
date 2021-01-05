import React from 'react'

import Portrait from '../../components/Portrait'
import './Homepage.scss'

const Homepage = () => (
  <div className='homepage'>
    <div className='homepage__intro'>
      <h1> Hi! </h1>
      <p> I'm Nanna Dao </p>
      <p> A Full-stack Developer </p>
    </div>
    <div className='homepage__picture'>
      <Portrait />
    </div>
  </div>
)

export default Homepage
