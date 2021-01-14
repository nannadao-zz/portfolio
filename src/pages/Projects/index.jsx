import React from 'react'
import ReactPlayer from 'react-player'

import joinme from '../../assets/joinme.png'
import './Projects.scss'

const Projects = () => (
  <div className='projects' id='projects'>
    <div className='projects__section'>
      <h1 className='section__title'> Webspyder </h1>
      <p className='section__desc'>
        The project includes a scheduled daily Scrapy + Selenium script to automatically scan for
        hotel rooms' prices on Booking.com and save to database.
        <br /> A backend is built with Django & analyze collected data with Pandas to return
        insights.
        <br /> User Interaction site is built with React & Chart.js to visualize said insights.
        <br />
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>Chart.js</li>
        <li>Python</li>
        <li>Django REST Framework</li>
        <li>Scrapy</li>
        <li>Selenium</li>
        <li>Pandas</li>
        <li>PostgreSQL</li>
        <br />
        User can filter to see and compare hotels' prices within a day. Dashboard page gives data
        insight of a specific hotel on its daily rate, monthly rate trend and average rate trend in
        the past 6 months.
        <br />
        This is a personal project where I individually responsible for all technologies & designs.
      </p>
      <div className='section__media'>
        <ReactPlayer url='https://vimeo.com/498282718' />
      </div>
      <div className='section__links'>
        <a href='https://github.com/nannadao/webspyder-fs'> Github </a>
        <a href='https://django-react-webspyder.herokuapp.com/'> Live site </a>
      </div>
      <div className='section__divider'>
        <hr />
      </div>
    </div>
    <div className='projects__section'>
      <h1 className='section__title'> Libman </h1>
      <p className='section__desc'>
        This is a project that simulates a Library Management System.
        <br />
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>MaterialUI</li>
        <li>Node</li>
        <li>Express</li>
        <li>JSON Web Tokens</li>
        <li>RESTful API</li>
        <li>MongoDB</li>
        <br />
        User's priviledges are implemented, where admins can create/edit/delete books and users can
        borrow/return books and customize profile picture. Besides local login, users can also log
        in with Google Account!
        <br />
        <br />
        This is a personal project I developed as part of Integrify Full-stack Program. The
        following video demonstrates how admin pages perform.
        <br />
        <br />
        <i> Use the following credentials to test out the website: </i>
        <br />
        <i>
          {' '}
          username: <b>user</b>{' '}
        </i>
        <br />
        <i>
          {' '}
          password: <b>Password@@</b>{' '}
        </i>
      </p>
      <div className='section__media'>
        <ReactPlayer url='https://vimeo.com/498103160' />
      </div>
      <div className='section__links'>
        <a href='https://github.com/nannadao/libman-mern-FE'> Github (client) </a>
        <a href='https://github.com/nannadao/libman-mern-BE'> Github (server) </a>
        <a href='https://silly-torvalds-9f7def.netlify.app/'> Live site </a>
      </div>
      <div className='section__divider'>
        <hr />
      </div>
    </div>
    <div className='projects__section'>
      <h1 className='section__title'> JoinMe (work in progress) </h1>
      <p className='section__desc'>
        This is a full-stack social media website where users can create events and seek like-minded
        users to join the party! This is still a work in progress.
        <br />
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>SCSS</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <br />
        This is a group project done with Integrify. In this project, I contribute both on the
        front-end and back-end. I mainly focus on authentication and database interaction.
        <br />
        <br />
        Below is a mutual Github repository where the team's effort is combined!
      </p>
      <div className='section__media--inprogress'>
        <div className='img-overlay'>In progress</div>
        <img src={joinme} alt='joinme' />
      </div>
      <div className='section__links'>
        <a href='https://github.com/MikeVedsted/JoinMe'> Github </a>
      </div>
      <div className='section__divider'>
        <hr />
      </div>
    </div>
    <div className='projects__section'>
      <h1 className='section__title'> GithubStats </h1>
      <p className='section__desc'>
        This is a project where you can find out more about other developers!
        <br />
        Simply enter their Github's username and you can see their activities as well as diversity
        of technologies that they've used.
        <br />
        <li>Python</li>
        <li>Flask</li>
        <li>Chart.js</li>
        <li>CSS</li>
        <br />
        This is a personal project where I individually responsible for all technologies & designs.
      </p>
      <div className='section__media'>
        <img src={joinme} alt='joinme' />
      </div>
      <div className='section__links'>
        <a href='https://github.com/nannadao/github-stats'> Github </a>
      </div>
      <div className='section__divider'>
        <hr />
      </div>
    </div>
  </div>
)

export default Projects
