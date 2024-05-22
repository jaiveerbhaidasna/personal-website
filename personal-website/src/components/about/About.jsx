import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css'

export const About = () => {
  return (
    <section className = {styles.container} id = 'about'>
        <h2 className = {styles.title}> About Me</h2>
        <div className = {styles.content}> 
            <img src = {getImageUrl('about/aboutpic.jpg')}  alt = 'Laptop placeholder' className = {styles.aboutImage}/>
            <ul className = {styles.aboutItems}>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/table.png')}  alt = 'Table Icon' />
                    <div className = {styles.aboutItemText}>
                        <h3> Data Driven Developer </h3>
                        <p> I mostly enjoy working with large datasets by developing mathematical models and making predictions, but I'm open to new 
                            experiences in different fields </p> 
                    </div>
                </li>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/grad.png')}  alt = 'Grad Icon' />
                    <div className = {styles.aboutItemText}>
                        <h3> Avid Learner </h3>
                        <p> I graduated from Georgia Tech with a MS in Computational Science and Engineering in 2023. Before that, I graduated from
                            UT Austin with both a BS in Computer Engineering and a BS in Mathematics in 2022</p> 
                    </div>
                </li>

                <li className = {styles.aboutItem}> 
                    <img src = {getImageUrl('about/headset.png')}  alt = 'Headset Icon'/>
                    <div className = {styles.aboutItemText}>
                        <h3> Balanced Lifestyle </h3>
                        <p> Outside of programming, my hobbies include gaming, watching/playing different sports, and trying new foods</p> 
                    </div>
                </li>
            
            </ul>
        </div>
    </section>
  )
};
