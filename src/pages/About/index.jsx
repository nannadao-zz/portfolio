import React from 'react'

import './About.scss'

const About = () => (
  <div className='about' id='about'>
    <div className='about__title'>About me</div>
    <div className='about__content'>
      <hr />
      <p>
        I am a highly-motivated developer with background in Data Analytics.
        <br />
        With intensive training in analyzing business data, I would like to continue contributing to
        business objectives by providing business insights at large scale, besides with other
        software solutions.
        <br />
        <br />I am skilled in{' '}
        <b> JavaScript, Python, React, TypeScript, Django, PostgreSQL, MongoDB</b>, as well as{' '}
        <b>Git/Github, Docker</b> and <b>AWS</b>.
        <br />
        Besides coding, I also actively focus on the UI/UX Design in all of my projects. Hence, I am
        comfortable with using <b>Adobe Creative Suite</b> & <b>Figma</b>.
      </p>
      <hr />
      <ul className='about__links'>
        <li>
          <a href='https://github.com/nannadao'>
            <i className='fab fa-github fa-2x'></i>{' '}
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/nanna-dao-2a5a04111/'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default About
