import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='Contact'>
                <div className='Contact__tittle'>
                <h1>Contact </h1>    
                </div>
            <div className='Contact__form'>
            <form>
            <input name='Name' placeholder='Your name'></input> 
            <textarea placeholder='here..'></textarea>
            <button>Send </button>


            </form>

            </div>
            
    </div>
  )
}
