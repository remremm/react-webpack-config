import React from 'react';
import styles from './Component.css';

const firstComponent = (props) => {
  return (
    <div className={styles.componentBody}>
      <h1>Hello, this is your react component!</h1>
      <h2>Let's go make something new!</h2>
    </div>
  )
}

export default firstComponent;