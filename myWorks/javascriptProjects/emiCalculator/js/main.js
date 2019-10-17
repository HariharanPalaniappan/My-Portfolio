var loanAmount = document.getElementById('loan_amount');
var interest = document.getElementById('interest');
var tenue = document.getElementById('tenue');
var submit = document.getElementById('submit');
submit.addEventListener('click',EMIcalc);
function EMIcalc(){
	loanAmount = loanAmount.value;
	interest = interest.value;
	tenue = tenue.value;
	if(loanAmount != "" && interest != "" && tenue != "" ){
		var totalInterest = Math.round(((loanAmount * interest * tenue) / 100)),
		interestPerMonth = Math.round(((loanAmount * interest * tenue) / 100 / 12)),
		totalPaymentPerMonth = Math.round((loanAmount / 12)),
		EMI = Math.round((interestPerMonth + totalPaymentPerMonth)),
		totalAmount = Math.round((parseInt(totalInterest) + parseInt(loanAmount)));
		var emi = document.getElementById("emi"),
		totAmt = document.getElementById("totalAmt"),
		totInt =document.getElementById("totalInterest");
		emi.innerHTML="EMI is :"+EMI
		totAmt.innerHTML="Total Amount is :"+totalAmount
		totInt.innerHTML="Total Interest is :"+totalInterest
		emi.classList.add("emi");
		totAmt.classList.add("emi");
		totInt.classList.add("emi");
		var form = document.getElementById("form");
		form.style.display="none";
	}
	else{
		loanAmount.style.required;
		interest.style.required;
		interest.style.required;
	}
	
}