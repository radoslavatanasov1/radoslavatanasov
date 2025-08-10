
import shapeTwo from '../../assets/shape-2.png'
import './pricing.css'
import { FaCheck , FaArrowRight} from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png'

const Pricing = () => {
  return (
    <section className="pricing section" id="pricing">
        <h2 className="section__title text-cs">Pricing</h2>
        <p className="section__subtitle">
            My <span>Service Packages</span>
        </p>

        <div className="pricing__container container grid">
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Modern Frontend</span>
                <h3 className="pricing__price">799 <span>€</span> <em></em></h3>
                <p className="pricing__description">Professional responsive website built with React, Next.js, and Tailwind CSS. Perfect for modern businesses needing fast, SEO-optimized sites with stunning UI/UX design.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>React/Next.js Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Responsive Design</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>SEO Optimization</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Performance Optimization</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Modern UI/UX Design</span>
                    </li>
                    <li className="list__item">
                        <del>Backend Integration</del>
                    </li>
                </ul>

                <div className="pricing__benefits">
                    <h4>Why Choose Me?</h4>
                    <ul>
                        <li>✅ 4+ Years Experience</li>
                        <li>✅ 15+ Projects Delivered</li>
                        <li>✅ Fast Turnaround (1-2 weeks)</li>
                        <li>✅ Ongoing Support</li>
                    </ul>
                </div>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

            <div className="pricing__item-wrapper">
                <span className="pricing__label text-cs">Popular</span>
            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Full Stack Solution</span>
                <h3 className="pricing__price">2,499 <span>€</span> <em></em></h3>
                <p className="pricing__description">Complete web application with React/Next.js frontend, robust backend with TypeScript, database integration, authentication, and deployment. Perfect for startups and growing businesses.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Frontend & Backend</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Database Integration</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Authentication System</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Cloud Deployment</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>API Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Testing & QA</span>
                    </li>
                </ul>

                <div className="pricing__benefits">
                    <h4>Why Choose Me?</h4>
                    <ul>
                        <li>✅ Full-Stack Expertise</li>
                        <li>✅ TypeScript & Modern Tech</li>
                        <li>✅ Scalable Architecture</li>
                        <li>✅ 3-4 Week Delivery</li>
                        <li>✅ 3 Months Support</li>
                    </ul>
                </div>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>
            </div>

            <div className="pricing__item card card-one">
                <span className="pricing__subtitle text-cs">Enterprise Solution</span>
                <h3 className="pricing__price">5,999 <span>€</span> <em></em></h3>
                <p className="pricing__description">Premium enterprise-grade solution with AI integration, advanced security, scalable architecture, and comprehensive testing. Includes everything plus blockchain capabilities, AI features, and dedicated support.</p>
                <ul className="pricing__list">
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Full Stack Development</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>AI Integration</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Advanced Security</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Blockchain Features</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>Microservices Architecture</span>
                    </li>
                    <li className="list__item">
                        <FaCheck className='list__icon'></FaCheck>
                        <span>CI/CD Pipeline</span>
                    </li>
                </ul>

                <div className="pricing__benefits">
                    <h4>Why Choose Me?</h4>
                    <ul>
                        <li>✅ Enterprise-Grade Quality</li>
                        <li>✅ AI & Blockchain Expert</li>
                        <li>✅ Scalable & Secure</li>
                        <li>✅ 6-8 Week Delivery</li>
                        <li>✅ 6 Months Support</li>
                        <li>✅ Dedicated Project Manager</li>
                    </ul>
                </div>

                <a href="#contact" className="btn pricing__btn text-cs">
                    Start Project
                    <FaArrowRight className='pricing__btn-icon'></FaArrowRight>
                </a>

                <img src={shapeTwo} alt="" className="shape c__shape" />
            </div>

           
        </div>

        {/* Comparison Section */}
        <div className="pricing__comparison container">
            <h3 className="comparison__title text-cs">Why Choose Me Over Others?</h3>
            <div className="comparison__grid">
                <div className="comparison__item">
                    <h4>🚀 Speed & Quality</h4>
                    <p>4+ years experience means faster delivery without compromising quality. Most developers take 2-3x longer for the same results.</p>
                </div>
                <div className="comparison__item">
                    <h4>💼 Business Focus</h4>
                    <p>I understand business needs, not just code. Your project will be built to grow your business, not just look pretty.</p>
                </div>
                <div className="comparison__item">
                    <h4>🔒 Long-term Support</h4>
                    <p>Unlike agencies that disappear after launch, I provide ongoing support and maintenance to ensure your success.</p>
                </div>
                <div className="comparison__item">
                    <h4>🎯 Modern Technology</h4>
                    <p>Using cutting-edge tech like Next.js 15, TypeScript, and AI integration that most developers haven't mastered yet.</p>
                </div>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        <div className="section__bg-wrapper">
            <span className="bg__title">Pricing</span>
        </div>
    </section>
  )
}

export default Pricing