import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react'
import Users from './components/Users/Users';
import './App.css';
import UpdateUsers from './components/UpdateUsers/UpdateUsers';
import ViewUsers from './components/ViewUsers/ViewUsers';
import Search from './components/Search/Search';

function App() {
  const [isSearch, setIsSearch] = useState(false)
  document.addEventListener("keyup", (e) => {
    e.preventDefault()
    if (e.ctrlKey && e.key.toLowerCase() === "b")
      setIsSearch(!isSearch)
  })
  return (
    <div className={`App${isSearch ? ' search-active' : ''}`}>
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add-user' element={<UpdateUsers addUser />} />
        <Route path='/edit-user/:id' element={<UpdateUsers editUser />} />
        <Route path='/view-user/:id' element={<ViewUsers />} />
      </Routes>
      {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
    </div>
  );
}

export default App;
