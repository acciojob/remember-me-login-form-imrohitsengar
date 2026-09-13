//your JS code here. If required.
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('checkbox');
const existingButton = document.getElementById('existing');

function checkExistingUser() {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    existingButton.style.display = 'block';
  } else {
    existingButton.style.display = 'none';
  }
}

// 2. Handle New Form Submission
function handleFormSubmit(e) {
  e.preventDefault(); // Stop page reload

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Alert the user immediately as required
  alert(`Logged in as ${username}`);

  // Handle the "Remember Me" checkbox logic
  if (rememberCheckbox.checked) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    // Edge case: Remove credentials if unchecked on submit
    localStorage.clear();
  }
  checkExistingUser();
}
function handleExistingLogin() {
  const savedUsername = localStorage.getItem('username');
  
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
}
checkExistingUser();