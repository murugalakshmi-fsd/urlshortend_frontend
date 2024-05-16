import React from 'react'
import './page.css'

const Footer = () => {
  return (
    <>
    <footer className='text-center text-lg-start bg-light text-muted' style={{marginTop:"40vh"}}>
       <div className='text-center p-4' style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
        @ 2024 Copyright:
        <br/>
        <a className='text-reset fw-bold' href=''>Murugalakshmi(URL Shortner)</a>
        </div>
    </footer>
    </>
  )
}

export default Footer