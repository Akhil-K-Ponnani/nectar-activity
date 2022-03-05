import React, { useState } from 'react'
import './UpdateUsers.css';

function UpdateUsers(props) {
   const [name, setName] = useState()
   const [department, setDepartment] = useState()
   const [specialization, setSpecialization] = useState()
   const [position, setPosition] = useState()
   function handleSubmit() {
      console.log(name, department,specialization,position);
   }
   return (
      <div className="update-users container">
         <div className="row">
            <div className="col-md-6">
               <h3 className='update-user-title'>{props.addUser ? 'Add User' : 'Edit User'}</h3>
               <div className="row">
                  <div className="form-group col-md-8">
                     <label>Name</label>
                     <input type="text" name="name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Department</label>
                     <input type="text" name="department" value={department} className="form-control" onChange={(e) => setDepartment(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Specialization</label>
                     <input type="text" name="specialization" value={specialization} className="form-control" onChange={(e) => setSpecialization(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Current Position</label>
                     <input type="text" name="position" value={position} className="form-control" onChange={(e) => setPosition(e.target.value)} />
                  </div>
               </div>
               <button type="submit" className="btn submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
         </div>
      </div>
   )
}

export default UpdateUsers