import React from 'react'
import image from '../assets/logo.png'
import classes from './Main.module.scss'

function Main() {
  return (
    <div className={classes.main}>
      <aside>
        <div className={classes.course}>
          <p>JavaScript</p>
        </div>
        <div className={classes.course}>
          <p>HTML</p>
        </div>
        <div className={classes.course}>
          <p>CSS</p>
        </div>
        <div className={classes.course}>
          <p>React</p>
        </div>
      </aside>
      <main>
        <div>
          <img src={image} alt='frontend developer' />
        </div>
        <h2>Mohsen</h2>
        <p>This is my CV</p>
      </main>
    </div>
  )
}

export default Main
