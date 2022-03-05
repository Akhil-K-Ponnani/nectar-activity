import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ViewUsers.css';

function ViewUsers(props) {
   const [name, setName] = useState()
   const [department, setDepartment] = useState()
   const [specialization, setSpecialization] = useState()
   const [position, setPosition] = useState()
   return (
      <div className="view-users container">
         <div className="row">
            <div className="col-md-6">
               <h3 className='view-user-title'>View User</h3>
               <div className="row">
                  <div className="form-group col-md-8">
                     <label>Name</label>
                     <input type="text" name="name" value={name} className="form-control" style={{background:'#fff'}} disabled onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Department</label>
                     <input type="text" name="department" value={department} className="form-control" style={{background:'#fff'}} disabled onChange={(e) => setDepartment(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Specialization</label>
                     <input type="text" name="specialization" value={specialization} className="form-control" style={{background:'#fff'}} disabled onChange={(e) => setSpecialization(e.target.value)} />
                  </div>
                  <div className="form-group col-md-8">
                     <label>Current Position</label>
                     <input type="text" name="position" value={position} className="form-control" style={{background:'#fff'}} disabled onChange={(e) => setPosition(e.target.value)} />
                  </div>
               </div>
               <Link to="/edit-user" className="btn submit-btn">Edit User</Link>
            </div>
         </div>
      </div>
   )
}

export default ViewUsers