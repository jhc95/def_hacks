function check() {
	id = document.getElementById("logform").userid.value;
	pass = document.getElementById("logform").userpass.value;
	fetch('http://127.0.0.1:5002/accounts', {
    method: 'POST',
    headers: new Headers({
        "Content-Type": "application/json"
	}),
		body: JSON.stringify({username: id, password: pass})
	}).then(function(res) {
		if (!res.ok) {
			throw Error(res.statusText);
		}
		return res.json()
	}).then(function(data) {
		chrome.storage.local.set({'logged': 'true'});
		chrome.storage.local.set({'userid': id});
		chrome.storage.local.set({'password': pass});
		document.getElementById("logform").style.display = "none";
		document.getElementById("subtotal").style.display = "block";
	}).catch(function(error) {
		toggleModal();
	});
}
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function amount() {
	if (document.getElementById("subtotal").amount.value != 0) {
		amount = document.getElementById("subtotal").amount.value;
		document.getElementById("loanform").style.display = "block";
		document.getElementById("subtotal").style.display = "none";
		document.getElementById("credit-offer").style.display = "none";
		document.getElementById("load1").innerHTML = "Loading...";
		document.getElementById("load2").innerHTML = "Loading...";
		chrome.storage.local.set({'items': amount});
		chrome.storage.local.get(['items','password','userid'], function(item) {
			if (item.amount != 0) {
				fetch('http://127.0.0.1:5002/offers', {
				method: 'POST',
				headers: new Headers({
					"Content-Type": "application/json"
				}),
				body: JSON.stringify({username: item.userid, password: item.password, 
						override: {'loanInformation': {'loanAmount': item.amount}}})
				}).then(function(res) {
					return res.json()
				}).then(function(data) {
					var i;
					for (i = 0; i < data.loanOffers.length; i++) {
						var par = document.getElementById("div1");
						var newli = document.createElement('LI');
						var newA = document.createElement('A');
						var newP = document.createElement('P');
						var newP2 = document.createElement('P');
						newA.href = data.loanOffers[i].url
						newA.target = "_blank"
						appendChildElement2 = newli.appendChild(newP);
						appendChildElement2.innerHTML = "Max loan amount: " + data.loanOffers[i].maxAmount;
						appendChildElement3 = newli.appendChild(newP2);
						appendChildElement3.innerHTML = "Recommendation Score: " + data.loanOffers[i].recommendationScore;
						appendChildElement1 = newli.appendChild(newA);
						appendChildElement1.innerHTML = "More Details";
						appendChildElement4 = par.appendChild(newli);
						document.getElementById("load1").innerHTML = "Offers";
					}
					for (i = 0; i < data.creditCardOffers.length; i++) {
						var par = document.getElementById("div2");
						var newli = document.createElement('LI');
						var newA = document.createElement('A');
						var newP = document.createElement('P');
						var newP2 = document.createElement('P');
						newA.href = data.creditCardOffers[i].url
						newA.target = "_blank"
						appendChildElement2 = newli.appendChild(newP);
						appendChildElement2.innerHTML = "Card Type: " + data.creditCardOffers[i].details.cardType;
						appendChildElement3 = newli.appendChild(newP2);
						appendChildElement3.innerHTML = "Recommendation Score: " + data.creditCardOffers[i].recommendationScore;
						appendChildElement1 = newli.appendChild(newA);
						appendChildElement1.innerHTML = "More Details";
						appendChildElement4 = par.appendChild(newli);
						document.getElementById("load2").innerHTML = "Offers";
					}
				})
			} 
		});
	}
}
function openOffer1() {
	document.getElementById("loan-offer").style.display = "block";
	document.getElementById("credit-offer").style.display = "none";
}

function openOffer2() {
	document.getElementById("loan-offer").style.display = "none";
	document.getElementById("credit-offer").style.display = "block";
}


document.getElementById("log_button").addEventListener("click", function() {check()});
document.getElementById("total").addEventListener("click", function() {amount()});
closeButton.addEventListener("click", function() {toggleModal()});

chrome.storage.local.get(['logged'], function(item) {
	if (item.logged == 'true') {
		document.getElementById("logform").style.display = "none";
		document.getElementById("subtotal").style.display = "block";
	}
});

document.getElementById("loans").addEventListener("click", function() {openOffer1()})
document.getElementById("credits").addEventListener("click", function() {openOffer2()})

