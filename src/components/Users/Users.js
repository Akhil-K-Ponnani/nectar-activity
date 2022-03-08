import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from '../Search/Search'
import './Users.css'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [toDeleteUserId, setToDeleteUserId] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    useEffect(() => {
        let localUsers = JSON.parse(window.localStorage.getItem('users'))
        if (localUsers)
            setUsers(localUsers)
    }, [])
    document.addEventListener("keyup", (e) => {
        e.preventDefault()
        if (e.ctrlKey && e.key.toLowerCase() === "b")
            setIsSearch(!isSearch)
    })
    function deleteUser() {
        let localUsers = JSON.parse(window.localStorage.getItem('users'))
        let userIndex = localUsers.findIndex(localUser => toDeleteUserId === localUser.id)
        let usersList = users
        usersList.splice(userIndex, 1)
        setUsers(usersList)
        window.localStorage.setItem('users', JSON.stringify(usersList))
        navigate('/users')
    }
    return (
        <div className={`users-list${isSearch ? ' search-active' : ''}`}>
        <div className='container'>
            <div style={{ marginBottom: '32px' }}>
                <span className='users-count'>{users.length} Users</span>
                <Link to="/add-user" className='add-user-btn'>Add User</Link>
            </div>
            {
                users.map((user, key) =>
                    <div className='user-card' key={key}>
                        <Link to={`/view-user/${user.id}`} className="user-name limit-line-length">{user.name}</Link>
                        <Link to={`/edit-user/${user.id}`}><div className="far fa-edit control-icon" style={{ right: '80px' }}></div></Link>
                        <div className="far fa-trash control-icon" data-toggle="modal" data-target="#delete-user" onClick={() => setToDeleteUserId(user.id)} style={{ right: '40px' }}></div>
                    </div>
                )
            }
            <div class="modal fade" id="delete-user" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Delete User</h5>
                            <div class="close-btn" data-dismiss="modal"><i class="fal fa-times"></i></div>
                        </div>
                        <div class="modal-body">
                            <div style={{ fontWeight: '500' }}>Do you want to Delete the User?</div>
                            <button class="btn float-right submit-btn" id="delete-btn" data-dismiss="modal" onClick={deleteUser}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {isSearch && <Search isSearch={isSearch} setIsSearch={setIsSearch} />}
        </div>
    )
}

export default Users