import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Intro.module.css';

export const Intro = () => {
  
    return <section className = {styles.container}>
        <div className = {styles.content}> 
            <h1 className = {styles.title}> Hi, I'm Jay</h1>
            <p className = {styles.description}> 
                I'm a software developer interested in data analysis and machine learning looking to join the industry. Please feel free to contact me and learn more!
            </p>
            <a href = 'mailto:jaiveerbhaidasna@gmail.com' className = {styles.contactButton}> Contact Me</a>
        </div>
        <img src={getImageUrl('intro/circle.png')} alt = 'Intro pic of Me' className = {styles.introImg}/>
        <div className = {styles.topBlur} />
        <div className = {styles.bottomBlur} /> 
    </section>
};
