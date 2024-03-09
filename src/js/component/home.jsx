import React, {useState} from "react";

//create your first component
const Home = () => {

	const [lightGreen,setLightGreen] = useState("btn-success")
	const [lightYellow,setLightYellow] = useState("btn-secondary")
	const [lightRed,setLightRed] = useState("btn-secondary")

	function modSemaforo() {
		if (lightRed === "btn-danger") {
			setLightRed("btn-secondary")
			setLightGreen("btn-success")
		} else if  (lightGreen === "btn-success"){
			setLightGreen("btn-secondary")
			setLightYellow("btn-warning")
		} else if (lightYellow === "btn-warning"){
			setLightYellow("btn-secondary")
			setLightRed("btn-danger")
		} else setLightGreen("btn-success")
	}

	return (
		<>
		<div className={"container d-flex justify-content-center bg-dark text-white"}>
		</div>
			<div className={"ligths container d-flex justify-content-center flex-column bg-dark"}>
				<div className={"btn rounded-circle "+lightRed} onClick={changeColorRed}></div>
				<div className={"btn rounded-circle "+lightYellow} onClick={changeColorYellow}></div>
				<div className={"btn rounded-circle "+lightGreen} onClick={changeColorGreen}></div>
			</div>
			<div className="d-flex justify-content-center">
		
		</div>
		</>
	);

	function changeColorRed() {
				if (lightRed === "btn-danger") {
					setLightRed("btn-secondary")
					} else setLightRed("btn-danger")
					setLightYellow("btn-secondary")
					setLightGreen("btn-secondary")
				}
	
	function changeColorYellow() {
				if (lightYellow === "btn-warning") {
					setLightYellow("btn-secondary")
					} else setLightYellow("btn-warning")
					setLightRed("btn-secondary")
					setLightGreen("btn-secondary")
				}
	
	function changeColorGreen() {
				if (lightGreen === "btn-success") {
					setLightGreen("btn-secondary")
					} else setLightGreen("btn-success")
					setLightRed("btn-secondary")
					setLightYellow("btn-secondary")
				}
};

export default Home;