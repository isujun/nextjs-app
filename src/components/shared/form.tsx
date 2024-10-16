"use client";

import { useState, useEffect } from "react"

export const Form = () => {
	const [input, setInput] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		if (username && password === "admin") {
			console.log("kamu adminnya")
		}
	}, [username, password])

	return (
		<div>
			<div>Form</div>
			<div className="">
				<textarea rows={4} onChange={(e) => { setInput(e.target.value) }} />
				<div>{input}</div>
			</div>
			<input onChange={(e) => setUsername(e.target.value)} />
			<input onChange={(e) => setPassword(e.target.value)} />
		</div>
	)
}
