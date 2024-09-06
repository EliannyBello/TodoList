import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const addTask = (e) => {
		e.preventDefault();
		if (task === "") return;
		setTasks([...tasks, task]);
		setTask("");
	};

	const deleteTask = (i) => {
		const updatedTasks = tasks.filter(task => task !== i);
		setTasks(updatedTasks);
	};

	return (
		<div className="container">
			<h1>To-Do List</h1>
			<form onSubmit={addTask}>
				<input
					type="text"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					onKeyUp={(e) => setTask(e.target.value)}
					placeholder="Escribe una tarea..."
				/>
			</form>
			<ul>
				{tasks.length === 0 ? (
					<li>No hay tareas pendientes</li>
				) : (
					tasks.map((task, index) => (
						<li key={index}>
							{task}{" "}
							<button onClick={() => deleteTask(task)}>X</button>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Home;
