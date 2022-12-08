// Write your code here
import './index.css'
import {Component} from 'react'

const DestinationItem = props => {
  const {name, imgUrl} = props

  return (
    <li className="destinationItemContainer">
      <img src={imgUrl} className="destinationImage" />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem
