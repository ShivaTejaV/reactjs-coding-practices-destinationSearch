// Write your code here
import './index.css'
import {Component} from 'react'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <div>
      <img src={imgUrl} />
      <p>{name}</p>
    </div>
  )
}

export default DestinationItem
