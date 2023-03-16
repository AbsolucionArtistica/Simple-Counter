import React, {useState} from "react";
import SecondsCounter from "./SecondsCounter.jsx"
import CounterContainer from "./SecondsCounter.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="">
			<SecondsCounter/>
		</div>
	);
};

export default Home;
