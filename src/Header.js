import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='Header'>
     <div className='Header__menu'>

         <a className='si' href='#'>GM</a>
        
       <div className='Header__nav'>
         <nav>
         <a href='./Contact.js'>Contact</a>
          <a href='./About'>About me</a>
          <a href='#'>Github</a>
         </nav>



       </div>

     </div>
    </div>
  )
}

export default Header
