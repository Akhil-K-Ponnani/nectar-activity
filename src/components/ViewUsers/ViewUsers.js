import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Search from '../Search/Search';
import './ViewUsers.css';

function ViewUsers() {
   const { id } = useParams()
   const [userKey, setUserKey] = useState()
   const [name, setName] = useState()
   const [department, setDepartment] = useState()
   const [specialization, setSpecialization] = useState()
   const [position, setPosition] = useState()
   const [isSearch, setIsSearch] = useState(false)
   useEffect(() => {
      let users = JSON.parse(localStorage.getItem('users'))
      let user = users.find(user => user.id === id)
      if (user) {
         setUserKey(user.id)
         setName(user.name)
         setDepartment(user.department)
         setSpecialization(user.specialization)
         setPosition(user.position)
      }
   }, [id])
   document.addEventListener("keyup", (e) => {
      e.preventDefault()
      if (e.ctrlKey && e.key.toLowerCase() === "b")
         setIsSearch(!isSearch)
   })
   return (
      <div className={`view-users${isSearch ? ' search-active' : ''}`}>
      <div className="container">
         <div className="row">
            <div className="col-md-6">
               <h3 className='view-user-title'>View User</h3>
               <div className="row">
                  <div className="form-group col-md-8">
                     <label>Name</label>
                     <input type="text" name="name" value={name} className="form-control" style={{ background: '#fff' }} disabled onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Department</label>
                     <input type="text" name="department" value={department} className="form-control" style={{ background: '#fff' }} disabled onChange={(e) => setDepartment(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Specialization</label>
                     <input type="text" name="specialization" value={specialization} className="form-control" style={{ background: '#fff' }} disabled onChange={(e) => setSpecialization(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Current Position</label>
                     <input type="text" name="position" value={position} className="form-control" style={{ background: '#fff' }} disabled onChange={(e) => setPosition(e.target.value)} />
                  </div>
               </div>
               <Link to={`/edit-user/${userKey}`} className="btn submit-btn">Edit User</Link>
            </div>
         </div>
      </div>
      {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
      </div>
   )
}

export default ViewUsers