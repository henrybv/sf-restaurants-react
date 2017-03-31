import React from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link className={styles.logo} to="/"><h1>Late Night Eats</h1></Link>
        <section>
        
        </section>
      </div>
    )
  }
}

export default Header
