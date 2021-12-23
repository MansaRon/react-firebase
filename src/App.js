
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './fireabase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {

  const [newName, updatedName] = useState("");
  const [newAge, updatedAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      // Looping through the docs array
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getUsers();
  }, [])

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})
  }

  const updateAge = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newAge = {age: age + 1};
    const newName = {name: "Chelsea"};
    await updateDoc(userDoc, {name: newName, age: Number(newAge)});
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  return (
  <div className="App"> 
  <input type="string" placeholder='Enter name...' onChange={(event) => {updatedName(event.target.value)}}></input>
  <input type="number" placeholder='Enter age...' onChange={(event) => {updatedAge(event.target.value)}}></input>
  <button className='btn btn-primary' onClick={createUser}>Create User</button>
    {users.map((users) => {
      return (
        <div>
          { " " }
          <h1>Name: {users.name} </h1>
          <h1>Age: {users.age} </h1>
          {/* With update and delete buttons, if you dont declare them with parameters, it will not work because they need the key parameters to update or delete */}
          <button className='btn btn-success' onClick={() => {updateAge(users.id, users)}}>Update User</button>
          <button className='btn btn-danger' onClick={() => {deleteUser(users.id)}}>Delete User</button>
        </div>
      )
    })} 
  </div>
  );
}

export default App;
