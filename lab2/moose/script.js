function FunFact() {
	
    var facts = ['can have antlers that span up to 5 feet and weigh over 65 pounds', 
				 'is the largest species in the deer family', 
				 'have four-chambered stomachs', 
				 'cannot digest hay',
				 'poor eyesight, but they have excellent sense of hearing and smell', 
				 'solitary animals and do not form herds'];
	
	var myFact = facts[Math.round(Math.random()*(facts.length - 1))];
	
	document.getElementById('facts').innerHTML = 'The moose ' + myFact + '.';
}