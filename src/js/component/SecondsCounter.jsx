import React,{useState} from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

function SecondsCounter({n1 = 0, n2 = 0, n3 = 0, n4 = 0}) {
    return(
        <div className="mainContainer d-flex text-white justify-content-center p-1"> 
            <div className="bg-dark px-2 m-1 rounded fs-1"><i class="fa-regular fa-clock"></i></div>
            <div className="bg-dark px-2 m-1 rounded cuarto fs-1">{n4 % 10}</div>
            <div className="bg-dark px-2 m-1 rounded tercer fs-1">{n3 % 10}</div>
            <div className="bg-dark px-2 m-1 rounded segundo fs-1">{n2 % 10}</div>
            <div className="bg-dark px-2 m-1 rounded primer fs-1">{n1 % 10}</div>
           
        </div>
    );
}
SecondsCounter.propTypes =    {
    n1: PropTypes.number,
    n2: PropTypes.number,
    n3: PropTypes.number,
    n4: PropTypes.number
};
let seconds  = 0;
setInterval(function() {
    const cuarto = Math.floor (seconds/1000);
    const tercer = Math.floor (seconds/100);
    const segundo = Math.floor (seconds/10);
    const primer = Math.floor (seconds/1);

    seconds++;
    ReactDOM.render(
        <SecondsCounter n1={primer} n2={segundo} n3={tercer} n4={cuarto}/>, document.querySelector("#app")
    );
},1000)
export default SecondsCounter;