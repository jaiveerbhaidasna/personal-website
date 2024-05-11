import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css'

export const About = () => {
  return (
    <section className = {styles.container} id = 'about'>
        <h2 className = {styles.title}> About Me</h2>
        <div className = {styles.content}> 
            <img src = {getImageUrl('about/aboutImage.png')}  alt = 'Laptop placeholder' className = {styles.aboutImage}/>
            <ul className = {styles.aboutItems}>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/cursorIcon.png')}  alt = 'Cursor Icon' />
                    <div className = {styles.aboutItemText}>
                        <h3> Fill in </h3>
                        <p> Fill in the blank with stuff</p> 
                    </div>
                </li>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/serverIcon.png')}  alt = 'Server Icon' />
                    <div className = {styles.aboutItemText}>
                        <h3> Fill in </h3>
                        <p> Fill in the blank with stuff</p> 
                    </div>
                </li>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/uiIcon.png')}  alt = 'UI Icon'/>
                    <div className = {styles.aboutItemText}>
                        <h3> Fill in </h3>
                        <p> Fill in think blank with stuff</p> 
                    </div>
                </li>
            
            </ul>
        </div>
    </section>
  )
};
