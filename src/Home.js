import { useState } from 'react';


const Home = () => {
	// let name = 'Zikri';

	const [name, setName] = useState('Zikri');
	let [age, setAge] = useState(18);
 	const handleClick = (e) => {	
		setName('Bipo');
		setAge(++age);
		console.log(e);
	};

	return (
		<div className='home'>
			<h2>Homepage</h2>
			<p>{name} is {age} years old!</p>
			<button onClick={handleClick}>Click Me!</button>
		</div>
	);
};

export default Home;
