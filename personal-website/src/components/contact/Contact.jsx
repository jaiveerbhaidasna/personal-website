import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <footer className = {styles.container} id = 'contact'>
        <div className = {styles.text}> 
            <h2>Contact Me!</h2>
            <p> Feel free to reach out!</p>
        </div>
        <ul className = {styles.links}>
            <li className = {styles.link}> 
                <img src = {getImageUrl('contact/emailIcon.png')} alt = 'Email icon'/>
                <a href = 'mailto:jaiveerbhaidasna@gmail.com'> jaiveerbhaidasna@gmail.com</a>
            </li>
            
            <li className = {styles.link}> 
                <img src = {getImageUrl('contact/linkedinIcon.png')} alt = 'LinkedIn icon'/>
                <a href = 'https://www.linkedin.com/in/jaiveer-bhaidasna-630a45190/'  target = '_blank'> linkedin.com/jaiveerbhaidasna</a>
            </li>

            <li className = {styles.link}> 
                <img src = {getImageUrl('contact/githubIcon.png')} alt = 'Github icon'/>
                <a href = 'https://github.com/jaiveerbhaidasna' target = '_blank'> github.com/jaiveerbhaidasna</a>
            </li>

        </ul>
    </footer>  
  );
};
