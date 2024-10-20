document.getElementById("calculateBtn").addEventListener("click", function() {
    let basePrice = 100;
    
    let education = parseFloat(document.getElementById("education").value);
    
    let familyWorth = parseFloat(document.getElementById("familyWorth").value);
    
    let caste = parseFloat(document.getElementById("caste").value);

    let skillsBonus = 0;
    if (document.getElementById("playsInstrument").checked) skillsBonus += parseFloat(document.getElementById("playsInstrument").value);
    if (document.getElementById("goodCook").checked) skillsBonus += parseFloat(document.getElementById("goodCook").value);
    if (document.getElementById("easygoing").checked) skillsBonus += parseFloat(document.getElementById("easygoing").value);
    if (document.getElementById("singsWell").checked) skillsBonus += parseFloat(document.getElementById("singsWell").value);

    let age = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let reputationCoefficient = 1;
    if (document.getElementById("gossipParents").checked) reputationCoefficient *= parseFloat(document.getElementById("gossipParents").value);
    if (document.getElementById("gossipCharacter").checked) reputationCoefficient *= parseFloat(document.getElementById("gossipCharacter").value);
    if (document.getElementById("generalGossip").checked) basePrice += parseFloat(document.getElementById("generalGossip").value); // Direct deduction
    
    let finalPrice = basePrice * education * familyWorth + caste + skillsBonus;
    finalPrice *= age;
    finalPrice *= reputationCoefficient;

    document.getElementById("result").textContent = `The final dowry price is: $${finalPrice.toFixed(2)}`;
});
