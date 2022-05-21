const applicationElement = document.querySelector(".calculator");
const submit = document.querySelector('#submit');
const inputForm = document.querySelector('#inputForm');

const dropdownZone = document.querySelector('.dropdownZone');
const resultsBox = document.querySelector('#results');



let results = "";
var cal = document.inputForm;
var i = document.getElementById('#inputAmps');
var r = document.getElementById('#inputOhms');
var e = document.getElementById('#inputVolts');
var p = document.getElementById('#inputPower');

applicationElement.addEventListener("change", event => {
    if (event.target.id === "inputAmps") {
        i = event.target.value;
        console.log(i);
    }
    else if (event.target.id === "inputOhms") {
        r = event.target.value;
        console.log(r);
    }
    else if (event.target.id === "inputPower") {
        p = event.target.value;
    }
    else if (event.target.id === "inputVolts") {
        e = event.target.value;
    }
})
//console.log(i.value)
// Checking for valid parameters


const answerPowerAndVolts = (result1, result2) => {
    return (`<h4>Power: ${result1}</h4><h4>Volts: ${result2}</h4>`);
};
const answerPowerAndOhms = (result1, result2) => {
     return (`<h4>Power: ${result1}</h4><h4>Ohms: ${result2}</h4>`);
};
const answerOhmsAndVolts = (result1, result2) => {
     return (`<h4>Ohms: ${result1}</h4><h4>Volts: ${result2}</h4>`);
}
const answerPowerAndAmps = (result1, result2) => {
     return (`<h4>Power: ${result1}</h4><h4>Amps: ${result2} </h4>`);
}
const answerAmpsAndVolts = (result1, result2) => {
     return (`<h4>Amps: ${result1}</h4><h4>Volts: ${result2} </h4>`);
}
const answerAmpsAndOhms = (result1, result2) => {
     return (`<h4>Amps: ${result1}</h4><h4>Ohms: ${result2}</h4>`);
}

const calcPowerandVoltsFromIandR = () => {
    let answerHTML = "";
    result1 = (Math.pow(i, 2) * r); // Power/Watts
    result2 = (r * i); // Volts/Voltage
    console.log(result1, "Power");
    console.log(result2, "Volts");
    answerHTML += answerPowerAndVolts(result1, result2);
    resultsBox.innerHTML = answerHTML;
}
const calcPowerAndOhmsFromEandI = () => {
     let answerHTML = "";
     result1 = (e * i); // Power/Watts
     result2 = (e / i); // Ohms/Resistance
     console.log(result1, "Power");
     console.log(result2, "Ohms");
     answerHTML += answerPowerAndOhms(result1, result2);
     resultsBox.innerHTML = answerHTML;
}
const calcPowerAndAmpsFromEandR = () => {
     let answerHTML = "";
     result1 = (Math.pow(e, 2) / r); // Power/Watts
     result2 = (e / r); // Amps/Ampere
     console.log(result1, "Power");
     console.log(result2, "Amps");
     answerHTML += answerPowerAndAmps(result1, result2);
     resultsBox.innerHTML = answerHTML; 
}
const calcOhmsAndAmpsFromEandP = () => {
     let answerHTML = "";
     result1 = (Math.pow(e, 2) / p); // Ohms/Resistance
     result2 = (p / e); // Amps/Ampere
     console.log(result1, "Ohms");
     console.log(result2, "Amps");
     answerHTML += answerOhmsAndAmps(result1, result2);
     resultsBox.innerHTML = answerHTML; 
}
const calcOhmsAndVoltsFromIandP = () => {
     let answerHTML = "";
     result1 = (p / Math.pow(i, 2) ); // Ohms/Resistance
     result2 = (p / i); // Volts/Voltage
     console.log(result1, "Ohms");
     console.log(result2, "Volts");
     answerHTML += answerOhmsAndVolts(result1, result2);
     resultsBox.innerHTML = answerHTML; 
}
const calcVoltsAndAmpsFromPandR = () => {
     let answerHTML = "";
     result1 = (Math.sqrt(p * r)); // Volts/Voltage
     result2 = (Math.sqrt(p / r)); // Amps/Ampere
     console.log(result1, "Volts");
     console.log(result2, "Amps");
     answerHTML += answerVoltsAndAmps(result1, result2);
     resultsBox.innerHTML = answerHTML;
}




submit.addEventListener('click', calculate())

dropdownZone.addEventListener("click", event => {
    if (event.target.id === "i+r") {
        console.log("converting Amps + Ohms to Power and Volts");
        calcPowerandVoltsFromIandR();
    }
    else if (event.target.id === "e+i") {
          console.log("converting Volts + Amps to Power and Ohms ");
         calcPowerAndOhmsFromEandI();
     }
    else if (event.target.id === "e+r") {
          console.log("converting Volts + Ohms to Power and Amps");
          calcPowerAndAmpsFromEandR();
    }
    else if (event.target.id === "e+p") {
          console.log("converting Volts + Watts to Ohms and Amps");
          calcOhmsAndAmpsFromEandP();
    }
    else if (event.target.id === "i+p") {
          console.log("converting Amps + Watts to Ohms and Volts");
          calcOhmsAndVoltsFromIandP();
    }
    else if (event.target.id === "p+r") {
          console.log("converting Watts + Ohms to Volts and Amps");
          calcVoltsAndAmpsFromPandR();
    }
})