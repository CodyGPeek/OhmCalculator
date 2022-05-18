// Ohm's Law Calculator
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');
const table = document.querySelector('#table');

function resetButton() {
    i = null;
    e = null;
    r = null;
    p = null;
}

// Checking for valid parameters
function calculate() {
    var cal = document.inputForm;
    var i = cal.amps.value;
    var r = cal.ohms.value;
    var e = cal.volts.value;
    var p = cal.power.value;

// check for valid input
    if (isNaN(i) || isNaN(r) || isNaN(e) || isNaN(p)) {
        alert("Invalid input value")
    }
    else if (i && r) {p = math.pow(i, 2) * r; e = r * i;} // Finding Power [P = I² * R], Finding Voltage [E = R * I]
    else if (i && e) {p = i * e; r = e / i}              // Finding Power [P = I * E], Finding Resistance[R = E / I]
    else if (e && r) {p = math.pow(e, 2) / r; i = e / i} // Finding Power [P = E² / R], Finding Amps [I = E / I]
    else if (p && i) {e = p / i; r = p / Math.pow(i, 2);} // Finding Voltage [E = P / I], Finding Resistance [R = P / I²]
    else if (p && e) {i = p / e; r = Math.pow(e, 2) / p;} // Finding Amps [I = P / E], Finding Resistance [R = E² / P]
    else if (i && e) {p = e * i; r = e / i;}              // Finding Power [P = E * I], Finding Resistance [R = E / I]
    else if (p && r) {e = Math.sqrt(p * r); i = Math.sqrt(p / r);} // Finding Voltage [√P * R], Finding Amps [√P / R] 
    cal.amps.value = i;
    cal.volts.value = e;
    cal.ohms.value = r;
    cal.watts.value = p;
    //i=r=e=p=0;
    document.inputForm.reset();
}
submit.addEventListener('click', calculate)
reset.addEventListener('click', resetButton)
// List of all formulas used.
/* Finding Volts
 * √P * R
 * P / I
 * I * R
 */
/* Finding Amps
 * √P / R
 * P / V
 * V / R
 */
/* Finding Ohms
 * V / I
 * V² / P
 * P / I²
 */
/* Finding Power
 * V * I
 * I² * R
 * V² / R
 */