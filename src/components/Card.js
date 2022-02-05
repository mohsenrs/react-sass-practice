import React from 'react'
import classes from './Card.module.scss'
import image from '../assets/logo.png'

function Card() {
  return (
    <div className={classes.card__container}>
      <img src={image} alt='card image' />
      <div className={classes.card__content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          officiis quibusdam fuga sint veniam totam molestias hic possimus odit,
          delectus soluta in esse et aspernatur nemo! Amet illum libero
          voluptas!
        </p>
        <span>Mohsen Salehi</span>
      </div>
    </div>
  )
}

export default Card
