import React from 'react'
import classes from './Cards.module.scss'
import Card from './Card'

function Cards() {
  return (
    <div className={classes.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Cards
