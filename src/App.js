import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const AddUserHandler = (uName, uAge) => {
		setUsersList((previousUsersList) => {
			return [
				...previousUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() }
			];
		});
	};
	return (
		<div>
			<AddUser onAddUser={AddUserHandler} />
			<UserList users={usersList}></UserList>
		</div>
	);
}

export default App;
