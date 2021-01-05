import React from 'react'

import portrait from '../../assets/portrait.png'
import './Portrait.scss'

const Portrait = () => (
  <div className='portrait'>
    <img src={portrait} alt='nanna' />
    <svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' width='120%' className='blobSvg'>
      <g transform='translate(178.233, 220)'>
        <path
          className='blobPath'
          d='M434,307.5Q448,365,387,373Q326,381,288,400Q250,419,213,398.5Q176,378,127.5,363.5Q79,349,117,299.5Q155,250,99.5,190.5Q44,131,99.5,108.5Q155,86,202.5,57Q250,28,306.5,41.5Q363,55,402.5,97Q442,139,431,194.5Q420,250,434,307.5Z'
          fill='#05DBF2'
        ></path>
      </g>
    </svg>
  </div>
)

export default Portrait
