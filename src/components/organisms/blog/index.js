'use client'

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import NotReady from '@/app/not-ready';
import NotFound from '@/app/not-found';
import { countriesList } from '@/data';
import styles from './blog.module.css';

const Blog = ({ countryName, project }) => {

  if (!project) {
    return (
      countriesList.includes(countryName)
        ? <NotReady/>
        : <NotFound/>
    )
  }

  return (
    <div className={styles.blog}>
      <div className={styles.intro}>
        <h2 className={styles.countryName}>{countryName}</h2>
        <h1>{project.projectName}</h1>
        <p>{project.projectIntro}</p>
      </div>
      <div className={styles.inspirationImages}>
        {project.inspirationImages.map((image) => {
          return (
            <div className={styles.image}>
              <Image 
                src={image.src}
                alt={image.alt}
                objectFit="cover"
              />
              <p className={styles.caption}>{image.caption}</p>
            </div>
          )
        })}
      </div>
      <p className={styles.description}>{project.projectDescription}</p>
      <div className={styles.projectImages}>
        {project.projectImages.map((image) => {
          return (
            <div className={styles.image}>
              <Image 
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                objectFit="cover"
              />
              <p className={styles.caption}>{image.caption}</p>
            </div>
          )
        })}
      </div>
      <p className={styles.finalThoughts}>{project.projectFinalThoughts}</p>
      <Link className={styles.hostedLink} href={project.hostedLink}>
        <button>HOSTED HERE</button>
      </Link>
      <p>As always, drop me a message if you spot any bugs, have any improvement ideas, or have any suggestions for future country projects!</p>
    </div>
  )
};

Blog.propTypes = {
  countryName: PropTypes.string.isRequired,
  project: PropTypes.object
};

export { Blog };