var input1 = document.getElementById("Osnovna_Sredstva_Glavna_OsnovnaSredstva_OsnovnoSredstvoDialog7_NabavnaVrijednost");

var input2 = document.getElementById("Osnovna_Sredstva_Glavna_OsnovnaSredstva_OsnovnoSredstvoDialog7_AmortiziranaVrijednost");

 

var input3 = document.getElementById("Osnovna_Sredstva_Glavna_OsnovnaSredstva_OsnovnoSredstvoDialog7_KnjigovodstvenaVrijednost");


input1.addEventListener("change", function () {

	input3.textContent = input1.value   ;
})

//input2.addEventListener("change", function () {

//	input3.textContent = parseFloat(input1.value) + parseFloat(input2.value);
//})