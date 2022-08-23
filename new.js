// Budget of selected players
document.getElementById('player-budget').addEventListener('click', function(){
    let playerAmount = document.getElementById('player-amount');
    const playerAmountValue = playerAmount.value;
    const playerAmountString = parseInt(playerAmountValue);
    
    playerAmount.value = '';
    

    /// Condition - if input type is not a number
    if(typeof playerAmount !== 'number'){
        alert('Please type a number!');
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


