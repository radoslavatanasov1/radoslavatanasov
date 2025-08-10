import React from 'react'
import { motion } from 'framer-motion'
import profileImg from '../../assets/radopfp.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaLinkedin , FaTelegram, FaGithub, FaDiscord, FaSkype, FaMedium, FaMailchimp } from "react-icons/fa";
import './home.css'
import CV from '../../assets/rado.pdf'
import fiverr from '../../assets/fiverr.png'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
            <div className="home__container container">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="home__subtitle text-cs">
                    Hello, <span>My Name Is</span>
                </motion.p>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="home__title text-cs"><span>Radoslav</span></motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="home__job">
                    <span className="text-cs">I Am </span><b>Senior Full Stack Developer</b>
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileImg} alt="" className='home__profile' />
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="home__data home__data-one">
                        <span className="text-lg">4 <b>+</b></span>
                        <span className="text-sm text-cs">Years of <span>Experience</span></span>
                    </motion.p>

                    <motion.p 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="home__data home__data-two">
                        <span className="text-lg">15+</span>
                        <span className="text-sm text-cs">Completed <span>Projects</span></span>
                    </motion.p>

                    <img src={shapeOne} className="img shape shape__1"/>
                    <img src={shapeTwo} className="img shape shape__2"/>
                    <img src={shapeTwo} className="img shape shape__3"/>
                </motion.div>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="home__text">Senior Full Stack Developer with 4+ years of experience specializing in modern web technologies. Expert in React, Next.js, TypeScript, and Python, with a proven track record of delivering high-quality FinTech, AI-powered, and enterprise solutions.</motion.p>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="home__socials">

                    <a href="https://www.linkedin.com/in/radoslavatanasov1/" target='_blank' className="footer__social-links">
                        <FaLinkedin/>
                    </a>
                    <a href="https://github.com/radoslavatanasov1" target='_blank' className="footer__social-links">
                        <FaGithub/>
                    </a>

                    <a href="mailto:contact@devdone.io" target='_blank' className="footer__social-links">
                        <FaMailchimp/>
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="home__btns">
                    <a download='' href={CV} className="btn text-cs">Download CV</a>
                    <a href="#skills" className="hero__link text-cs">My Skills</a>
                </motion.div>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Full Stack</span>
        </div>
    </section>
  )
}

export default Home