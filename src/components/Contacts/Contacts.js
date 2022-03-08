import React, { useState } from 'react'
import Search from '../Search/Search'
import './Contacts.css'

function Contacts() {
  const [isSearch, setIsSearch] = useState(false)
  document.addEventListener("keyup", (e) => {
    e.preventDefault()
    if (e.ctrlKey && e.key.toLowerCase() === "b")
      setIsSearch(!isSearch)
  })
  return (
    <div className={`contacts${isSearch ? ' search-active' : ''}`}>
      <div className="contacts-main">
        <h1 className='contacts-title'>Contacts</h1>
        <div className='contacts-desc'>Press Ctrl + B to activate Command Palette</div>
      </div>
      {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
    </div>
  )
}

export default Contacts