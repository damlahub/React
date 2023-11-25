import React from 'react'
import { pageLinks, pageIcons } from '../data';
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {
          pageLinks.map((link) => {
            const { id, name, href } = link;
            return (
              <li key={id}>
                <a href={href} className="footer-link"> {name} </a>
              </li>
            )
          })
        }
      </ul>
      <ul className="footer-icons">
        {
          pageIcons.map((linkIcon) => {
            const { id, icon, href } = linkIcon;
            return (
              <li key={id}>
                <a href={href} target="_blank" className="footer-icon"
                ><i className={icon}></i></a>
              </li>
            )
          })
        }
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer;