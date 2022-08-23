// Get players
function playerElement(elementId){
    const player = document.getElementById(elementId);
    const getPlayer = player.value;
    player.classList.add("selected");

    // Click to disabled the button
    document.getElementById(elementId).disabled = true;
    
    // Create element of selected players
    const createElement = document.createElement('li');
    const selectedElement = document.createTextNode(getPlayer);
    createElement.appendChild(selectedElement);
    document.getElementById('selected-players').appendChild(createElement);

    const selectedPlayers = document.getElementById('selected-players');
    const countPlayers = selectedPlayers.childNodes;

    // Deny to select more than five players
    if (countPlayers.length > 6 ){
        alert("You can not select more than five players.");
    }
}

// Event btn one
document.getElementById('player-one').addEventListener('click', function(){
    playerElement('player-one');
});
// Event btn two
document.getElementById('player-two').addEventListener('click', function(){
    playerElement('player-two');
});
// Event btn three
document.getElementById('player-three').addEventListener('click', function(){
    playerElement('player-three');
});
// Event btn four
document.getElementById('player-four').addEventListener('click', function(){
    playerElement('player-four');
});
// Event btn five
document.getElementById('player-five').addEventListener('click', function(){
    playerElement('player-five');
});
// Event btn six
document.getElementById('player-six').addEventListener('click', function(){
    playerElement('player-six');
});


// Budget of selected players
document.getElementById('player-budget').addEventListener('click', function(){
    const playerAmount = document.getElementById('player-amount');
    const playerAmountValue = playerAmount.value;
    const playerAmountString = parseInt(playerAmountValue);
    playerAmount.value = '';

    // Condition - if input type is not number
    if(playerAmount !== 'number'){
        alert('Please type a number');
    }

    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesElement = playerExpenses.innerText;
    const playerExpensesString = parseInt(playerExpensesElement);

    const calculateAmount = playerAmountString * 5;
    playerExpenses.innerText = calculateAmount;
})

document.getElementById('calculate-total').addEventListener('click', function(){
    // Manager Expenses
    const managerAmount = document.getElementById('manager');
    const managerAmountValue = managerAmount.value;
    const managerAmountString = parseInt(managerAmountValue);
    managerAmount.value = ''; 

    // Condition - if input type is not number
    if(managerAmount !== 'number'){
        alert('Please type a number');
    }

    // Coach Expenses
    const coachAmount = document.getElementById('coach');
    const coachAmountValue = coachAmount.value;
    const coachAmountString = parseInt(coachAmountValue);
    coachAmount.value = '';

    // Condition - if input type is not number
    if(coachAmount !== 'number'){
        alert('Please type a number');
    }

    const playerExpensesAmount = document.getElementById('player-expenses');
    const playerExpensesAmountValue = playerExpensesAmount.innerText;
    const playerExpensesAmountString = parseInt(playerExpensesAmountValue);

    // Calculate Total Amount
    const claculateTotalExpenses = managerAmountString + coachAmountString + playerExpensesAmountString;

    const total = document.getElementById('total');
    const totalExpensesElement = total.innerText;
    const totalExpensesString = parseInt(totalExpensesElement);
    
    total.innerText = claculateTotalExpenses;
});


