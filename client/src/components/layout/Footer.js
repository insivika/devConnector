import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-white mt-5 p-4 text-center">
      Copyright &copy; { new Date().getFullYear() } HackConnect
    </footer>  
  )
}

