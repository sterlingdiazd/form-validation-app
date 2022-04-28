import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState('')

	const addUserHandler = (event) => {
		event.preventDefault()

		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)'
			})
			return
		}
		if (+age < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter an age greater than 0'
			})
			return
		}

		console.log(username, age)
		props.onAddUser(username, age)
		setUsername('')
		setAge('')
	}

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value)
	}
	const ageChangeHandler = (event) => {
		setAge(event.target.value)
	}

	const errorHandler = () => {
		setError(false)
	}

	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onClose={errorHandler} />}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input id='username' type='text' value={username} onChange={usernameChangeHandler} />

					<label htmlFor='age'>Age (Years)</label>
					<input id='age' type='number' value={age} onChange={ageChangeHandler} />

					<Button type='submit' onClick={addUserHandler}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
