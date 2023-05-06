import React from 'react'
import "./home.css";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a href="https://www.instagram.com/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a href="https://twitter.com/login?lang=en" className="home__social-link" target="_blank">
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a href="https://in.pinterest.com/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-pinterest"></i>
      </a>

      <a href="https://www.linkedin.com/" className="home__social-link" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>

    </div>
  )
}

export default HeaderSocials