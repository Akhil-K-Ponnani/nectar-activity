import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Contacts.css'

function Contacts() {
  const navigate = useNavigate()
  const [isSearch, setIsSearch] = useState(false)
  const [searchKey, setSearchKey] = useState('')
  const [contents, setContents] = useState([])
  const [selectedContent, setSelectedContent] = useState(-1)
  document.addEventListener("keyup", (e) => {
    e.preventDefault()
    if (e.ctrlKey && e.key.toLowerCase() === "b")
      setIsSearch(!isSearch)
    if (e.key === "ArrowUp" && selectedContent > 0)
      setSelectedContent(selectedContent - 1)
    else if (e.key === "ArrowDown" && selectedContent < contents.length-1)
      setSelectedContent(selectedContent + 1)
    else if (e.key === "Enter" && selectedContent !== -1)
      navigate('/view-user/' + contents[selectedContent].id)
  })
  document.addEventListener("click", (e) => {
    let searchBox = document.getElementById("search-box")
    let searchInput = document.getElementById("search-input")
    let searchResult = document.getElementById("search-result")
    let userDetails = document.getElementById("user-details")
    let userDetailsTitle = document.getElementById("user-details-title")
    let actionDetails = document.getElementById("action-details")
    let actionDetailsTitle = document.getElementById("action-details-title")
    let noUser = document.getElementById("no-user")
    if (e.target !== searchBox && e.target !== searchInput && e.target !== searchResult && e.target !== userDetails && e.target !== userDetailsTitle && e.target !== actionDetails && e.target !== actionDetailsTitle && e.target !== noUser) {
      setIsSearch(false)
    }
  })
  function handleSearch(value) {
    setSearchKey(value)
    if (value !== '') {
      let users = JSON.parse(localStorage.getItem('users'))
      if (users) {
        users = users.filter((user) => {
          if (value === '')
            return user
          else if (user.name.toLowerCase().startsWith(value.toLowerCase()))
            return user
        })
        setContents(users)
      }
    }
    else {
      setContents([])
    }
    setSelectedContent(-1)
  }
  return (
    <div className={`contacts${isSearch ? ' search-active' : ''}`}>
      <div className="contacts-main">
        <h1 className='contacts-title'>Contacts</h1>
        <div className='contacts-desc'>Press Ctrl + B to activate Command Palette</div>
      </div>
      <div className="search-box" id="search-box">
        <input type="text" name="search" value={searchKey} className='search-input' id="search-input" placeholder='Start by Typing' onChange={(e) => handleSearch(e.target.value)} />
        <div className='far fa-search search-icon'></div>
      </div>
      <div className='search-result' id="search-result" style={{ display: `${(searchKey !== '' && isSearch) ? 'block' : 'none'}` }}>
        <div className='user-details' id="user-details">
          <div className='search-result-title' id="user-details-title">Users</div>
          {contents.length > 0 ? contents.map((content, key) =>
            <div><Link to={`/view-user/${content.id}`} className={`search-result-desc ${((selectedContent!==-1 && contents[selectedContent].id) === content.id) && 'select-content'} limit-line-length`} id={content.id} key={key}>{content.name}</Link><br /></div>
          ) : <div to="" className='search-result-desc no-user' id='no-user'>No Users Found</div>}
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