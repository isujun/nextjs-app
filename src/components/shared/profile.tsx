

export const Profile = ({ name, age, address, gender }) => {
	return (
		<div className={gender === "f" ? "bg-blue-500" : "bg-green-500"}>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<div>Address: {address}</div>
		</div>
	)
}
