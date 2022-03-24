import React from 'react'
import './home.css'


function Home() {
  return (
    <div className='home'>
      <div className='Home__banner'>
          <h1>Gonzalo <strong>Morbelli</strong></h1>
      </div>
      <div className='Home__subBanner'>
         ~Full Stack Web developer ~   
      </div>
      <div className='Home__content'>
          <div className='Home__content__tittle'>
              <h2>Projects</h2>
          </div>
          <div className='Home__content__clusters'>
              <div> <a href='#'> <h3>Project 1
                  </h3> </a></div>

                  <div> <a href='#'> <h3>Project 2
                  </h3> </a></div>

                  <div> <a href='#'><h3>Project 3
                  </h3> </a></div>

                  <div> <a href='#'> <h3>Project 4
                  </h3> </a></div>

                  <div> <a href='#'> <h3>Project 5
                  </h3> </a></div>

                  <div> <a href='#'> <h3>Project 6
                  </h3> </a></div>
          </div>

          

      </div>
    </div>
  )
}

export default Home
