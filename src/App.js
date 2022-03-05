import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Users from './components/Users/Users';
import './App.css';
import UpdateUsers from './components/UpdateUsers/UpdateUsers';
import ViewUsers from './components/ViewUsers/ViewUsers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/users' element={<Users />} />
        <Route path='/add-user' element={<UpdateUsers addUser />} />
        <Route path='/edit-user' element={<UpdateUsers editUser />} />
        <Route path='/view-user' element={<ViewUsers />} />
      </Routes>
    </div>
  );
}

export default App;
