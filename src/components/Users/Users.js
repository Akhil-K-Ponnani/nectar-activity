import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
    return (
        <div className='users-list container'>
            <div style={{ marginBottom: '32px' }}>
                <span className='users-count'>20 Users</span>
                <Link to="/add-user" className='add-user-btn'>Add User</Link>
            </div>
            <div className='user-card'>
                <Link to='/view-user' className="user-name">User Name</Link>
                <Link to='/edit-user'><div className="far fa-edit control-icon" style={{ right: '80px' }}></div></Link>
                <div className="far fa-trash control-icon" data-toggle="modal" data-target="#delete-user" style={{ right: '40px' }}></div>
            </div>
            <div class="modal fade" id="delete-user" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Delete User</h5>
                            <div class="close-btn" data-dismiss="modal"><i class="fal fa-times"></i></div>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">Do you want to Delete the User?</div>
                            <a href="" class="btn btn-danger float-right" id="delete-btn">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users