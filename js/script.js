// Listen For Submit 
const loanFormBtn = document.querySelector('#loan-form-btn');
loanFormBtn.addEventListener('click', (e)=>{

  // Hide Result
  document.getElementById('result').style.display = 'none';
  // Show Loading
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResult, 1000);

  e.preventDefault();
});

// Calculate Results

function calculateResult(){
  console.log('Calcilating...');
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayments = document.getElementById('monthly-payments');
  const totalPayments = document.getElementById('total-payments');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

// Compute Monthly Payments
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);


 
  if(isFinite(monthly)){
    monthlyPayments.value = monthly.toFixed(2);
    totalPayments.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);

  // Hide loading
  document.getElementById('loading').style.display = 'none';
  // Show Result
  document.getElementById('result').style.display = 'block';
  }else{
    showError('Please Check Your Numbers');
  }
  
}

// Check Error 

function showError(error){
  // Hide Result
  document.getElementById('result').style.display = 'none';
  // Hide Loading
  document.getElementById('loading').style.display = 'none';
  // Create a div
  const errorDiv = document.createElement('div');
  // Get Element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  // Add className
  errorDiv.className = 'alert alert-danger';
  // Create text node to div element
  errorDiv.appendChild(document.createTextNode(error));
  // Insert errorDiv above heading
  card.insertBefore(errorDiv, heading);
  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error after 3 seconds
function clearError(){
  document.querySelector('.alert').remove();
}