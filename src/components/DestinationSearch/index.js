// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  render() {
    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchElementContainer">
          <input type="search" placeholder="search" className="searchBar" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="searchIcon"
            className="searchIcon"
          />
        </div>
        <ul className="destinationsItemContainer"></ul>
      </div>
    )
  }
}

export default DestinationSearch
