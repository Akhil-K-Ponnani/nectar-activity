import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import './UpdateUsers.css';

function UpdateUsers(props) {
   const { id } = useParams()
   const navigate = useNavigate()
   const [userKey, setUserKey] = useState('')
   const [name, setName] = useState('')
   const [department, setDepartment] = useState('')
   const [specialization, setSpecialization] = useState('')
   const [position, setPosition] = useState('')
   const [nameErr, setNameErr] = useState('')
   const [departmentErr, setDepartmentErr] = useState('')
   const [specializationErr, setSpecializationErr] = useState('')
   const [positionErr, setPositionErr] = useState('')
   const [isSearch, setIsSearch] = useState(false)
   let userId = id
   useEffect(() => {
      if (id) {
         let users = JSON.parse(localStorage.getItem('users'))
         let user = users.find(user => user.id === id)
         if (user) {
            setUserKey(user.id)
            setName(user.name)
            setDepartment(user.department)
            setSpecialization(user.specialization)
            setPosition(user.position)
         }
      }
   }, [id])
   document.addEventListener("keyup", (e) => {
      e.preventDefault()
      if (e.ctrlKey && e.key.toLowerCase() === "b")
         setIsSearch(!isSearch)
   })
   function handleSubmit() {
      let originalName = name
      let reversedName = ""
      for(let i = originalName.length-1;i>=0;i--) {
         reversedName = reversedName+originalName[i]
     }
      if (name.length > 0)
         if (department.length > 0)
            if (specialization.length > 0)
               if (position.length > 0) {
                  let localUsers = JSON.parse(localStorage.getItem('users'))
                  let users = []
                  if (localUsers)
                     users = localUsers
                  let userIndex = -1
                  userIndex = users.findIndex(user => userId === user.id)
                  if (userIndex !== -1) {
                     console.log(reversedName);
                     users[userIndex].name = reversedName
                     users[userIndex].department = department
                     users[userIndex].specialization = specialization
                     users[userIndex].position = position
                  }
                  else {
                     let userExist = -1
                     function generateId(length) {
                        let id = '';
                        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
                        let charactersLength = characters.length;
                        for (let i = 0; i < length; i++) {
                           id += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                        return id;
                     }
                     do {
                        var id = generateId(16)
                        userExist = users.findIndex(user => id === user.id);
                     } while (userExist !== -1)
                     console.log(reversedName);
                     let user = { id, name:reversedName, department, specialization, position }
                     users.push(user)
                  }
                  window.localStorage.setItem('users', JSON.stringify(users))
                  navigate('/users')
               }
               else
                  setPositionErr("Enter user Position")
            else
               setSpecializationErr("Enter user Specialization")
         else
            setDepartmentErr("Enter user Department")
      else
         setNameErr("Enter user Name")
   }
   return (
      <div className={`update-users${isSearch ? ' search-active' : ''}`}>
         <div className="container">
            {(props.addUser || userKey) && <div className="row">
               <div className="col-md-6">
                  <h3 className='update-user-title'>{props.addUser ? 'Add User' : 'Edit User'}</h3>
                  <div className="row">
                     <div className="form-group col-md-8">
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" value={name} className="form-control" id='name' onChange={(e) => setName(e.target.value)} />
                        <div className='submit-err'>{nameErr}</div>
                     </div>
                     <div className="form-group col-md-8">
                        <label htmlFor='department'>Department</label>
                        <input type="text" name="department" value={department} className="form-control" id='department' required onChange={(e) => setDepartment(e.target.value)} />
                        <div className='submit-err'>{departmentErr}</div>
                     </div>
                     <div className="form-group col-md-8">
                        <label htmlFor='specialization'>Specialization</label>
                        <input type="text" name="specialization" value={specialization} className="form-control" id='specialization' required onChange={(e) => setSpecialization(e.target.value)} />
                        <div className='submit-err'>{specializationErr}</div>
                     </div>
                     <div className="form-group col-md-8">
                        <label htmlFor='position'>Current Position</label>
                        <input type="text" name="position" value={position} className="form-control" id='position' required onChange={(e) => setPosition(e.target.value)} />
                        <div className='submit-err'>{positionErr}</div>
                     </div>
                  </div>
                  <button type="submit" className="btn submit-btn" onClick={handleSubmit}>Submit</button>
               </div>
            </div>}
         </div>
         {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
      </div>
   )
}

export default UpdateUsers