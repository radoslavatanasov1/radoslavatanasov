import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg'
import Blog2 from '../../assets/blog2.jpg'
import Blog3 from '../../assets/blog3.jpg'
import './blog.css'
import shapeOne from '../../assets/shape-1.png'

const Blog = () => {
  return (
    <section className="blog section" id="blog">
        <h2 className="section__title text-cs">Latest Blog</h2>
        <p className="section__subtitle">
            My <span>Articles and Advice</span>
        </p>

        <div className="blog__container container grid">
            <div className="blog__item card card-two">
                <span className="blog__date text-cs">JANUARY 15, 2025</span>
                <h3 className="blog__title">Next.js 15: The Future of React Development</h3>
                <p className="blog__description">Exploring the latest features in Next.js 15 and how they revolutionize full-stack React development with improved performance, better TypeScript support, and enhanced developer experience.</p>

                <a href="#contact" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog1} alt="" className="blog__img" />

            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">JANUARY 10, 2025</span>
                <h3 className="blog__title">Building Secure FinTech Applications</h3>
                <p className="blog__description">Best practices for developing secure financial platforms, implementing proper authentication, data encryption, and compliance with modern security standards in web applications.</p>

                <a href="#contact" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog2} alt="" className="blog__img" />

            </div>

            <div className="blog__item card card-two">
                <span className="blog__date text-cs">JANUARY 5, 2025</span>
                <h3 className="blog__title">AI Integration in Modern Web Apps</h3>
                <p className="blog__description">How to effectively integrate AI and machine learning features into web applications, from chatbots to predictive analytics, using modern tools and frameworks.</p>

                <a href="#contact" className="link">
                    Read more
                    <FaArrowRight className='link__icon'></FaArrowRight>

                </a>

                <img src={Blog3} alt="" className="blog__img" />

            </div>
        </div>

        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Blog</span>
        </div>
    </section>
  )
}

export default Blog