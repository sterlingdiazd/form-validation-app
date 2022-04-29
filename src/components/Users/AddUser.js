import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
	const nameRef = useRef()
	const ageRef = useRef()

	const [error, setError] = useState('')

	const addUserHandler = (event) => {
		event.preventDefault()

		console.log(nameRef.current.value)
		const nameUserRef = nameRef.current.value
		const ageUserRef = ageRef.current.value

		if (nameUserRef.trim().length === 0 || ageUserRef.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)'
			})
			return
		}
		if (+ageUserRef < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter an age greater than 0'
			})
			return
		}
		props.onAddUser(nameUserRef, ageUserRef)
		nameRef.current.value = ''
		ageRef.current.value = ''
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
					<input id='username' type='text' ref={nameRef} />

					<label htmlFor='age'>Age (Years)</label>
					<input id='age' type='number' ref={ageRef} />

					<Button type='submit' onClick={addUserHandler}>
						Add User
					</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
