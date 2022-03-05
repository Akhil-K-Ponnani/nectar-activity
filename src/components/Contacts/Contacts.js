import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'

function Contacts() {
  const [isSearch, setIsSearch] = useState(false)
  document.addEventListener("keyup", (e) => {
    e.preventDefault()
    if (e.ctrlKey && e.key.toLowerCase() === "q") {
      setIsSearch(!isSearch)
    }
  })
  document.addEventListener("click", (e) => {
    let searchBox = document.getElementById("search-box")
    let searchInput = document.getElementById("search-input")
    let searchResult = document.getElementById("search-result")
    let userDetails = document.getElementById("user-details")
    let userDetailsTitle = document.getElementById("user-details-title")
    let actionDetails = document.getElementById("action-details")
    let actionDetailsTitle = document.getElementById("action-details-title")
    if (e.target !== searchBox && e.target !== searchInput && e.target !== searchResult && e.target !== userDetails && e.target !== userDetailsTitle && e.target !== actionDetails && e.target !== actionDetailsTitle) {
      setIsSearch(false)
    }
  })
  return (
    <div className={`contacts${isSearch ? ' search-active' : ''}`}>
      <div className="contacts-main">
        <h1 className='contacts-title'>Contacts</h1>
        <div className='contacts-desc'>Press Cmd + K to activate Command Palette</div>
      </div>
      <div className="search-box" id="search-box">
        <input type="text" name="search" className='search-input' id="search-input" placeholder='Start by Typing' />
        <div className='far fa-search search-icon'></div>
      </div>
      <div className='search-result' id="search-result">
        <div className='user-details' id="user-details">
          <div className='search-result-title' id="user-details-title">Users</div>
          <Link to="/view-user" className='search-result-desc'>Sam Alex</Link><br />
          <Link to="/view-user" className='search-result-desc'>Sam Alex</Link>
        </div>
        <div className='actions-details' id="action-details">
          <div className='search-result-title' id="action-details-title">Actions</div>
          <Link to="/users" className='search-result-desc'>Show All Users</Link>
        </div>
      </div>
    </div>
  )
}

export default Contacts