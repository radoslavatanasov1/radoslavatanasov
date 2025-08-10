import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import { motion } from 'framer-motion';
import useScreenshot from '../../hooks/useScreenshot';
import { screenshotConfig } from '../../config/screenshot';

// Individual project item component to handle screenshot loading
const ProjectItem = ({ projectItem }) => {
  const {id, img, category, title, description, link, tech} = projectItem;
  const { screenshotUrl, isLoading, error } = useScreenshot(link, img);

  return (
    <motion.div
      layout
      animate = {{opacity:1, scale:1}}
      initial = {{opacity:0.8, scale:0.6}}
      exit={{opacity:0.8, scale:0.6}}
      transition={{duration:0.3}}
      className="portfolio__items card card-two">
      <div className="portfolio__img-wrapper">
        <div className="portfolio__img-container">
          {screenshotConfig.showLoadingStates && isLoading && (
            <div className="portfolio__img-loading">
              <div className="loading-spinner"></div>
              <span>Loading screenshot...</span>
            </div>
          )}
          <img 
            src={screenshotUrl} 
            alt={title} 
            className={`portfolio__img ${isLoading ? 'loading' : ''}`}
            loading="lazy"
            style={{ display: isLoading && screenshotConfig.showLoadingStates ? 'none' : 'block' }}
          />
          {screenshotConfig.showErrorStates && error && (
            <div className="portfolio__img-error">
              <span>Using fallback image</span>
            </div>
          )}
        </div>
      </div>
      <span className="portfolio__category text-cs">{category}</span>
      <h3 className="portfolio__title">{title}</h3>
      <p className="portfolio__description">{description}</p>
      {tech && (
        <div className="portfolio__tech">
          {tech.map((techItem, index) => (
            <span key={index} className="tech__tag">{techItem}</span>
          ))}
        </div>
      )}
      <div className="portfolio__links">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="link">
            View Live
            <FaArrowRight className='link__icon'></FaArrowRight>
          </a>
        )}
      </div>
      <img src={shapeTwo} alt="" className="shape c__shape" />
    </motion.div>
  );
};

const Items = ({projectItems}) => {
  return (
    <>
      {projectItems.map((projectItem) => (
        <ProjectItem key={projectItem.id} projectItem={projectItem} />
      ))}
    </>
  )
}

export default Items