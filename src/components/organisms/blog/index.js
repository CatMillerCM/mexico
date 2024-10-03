import PropTypes from 'prop-types';
import styles from './blog.module.css';

const Blog = ({ countryName }) => {
  return (
    <div className={styles.blog}>
      <h2 className={styles.countryName}>{countryName}</h2>
      <h1>Project Name</h1>
      <p className={styles.summary}>Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary Summary </p>
      <div className={styles.inspoPhotos}></div>
      <p className={styles.info}>Info info info info info info info</p>
      <div className={styles.projectPhotos}></div>
      <p>You can have a play with the project here</p>
      <button className={styles.hosted}>HOSTED HERE</button>
      <p>As always, drop me a message if you spot any bugs, have any improvement ideas, or have any suggestions for future country projects!</p>
    </div>
  )
};

Blog.propTypes = {
  countryName: PropTypes.string.isRequired
};

export { Blog };