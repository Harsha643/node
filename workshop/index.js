
let userBalance = document.getElementById("user-balance");
let userTransaction = document.getElementById("user-transactions");
let userLogoutButton = document.getElementById("user-logout");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function display() {
    userTransaction.innerHTML = "";
    transactions.forEach(transaction => {
        let listItem = document.createElement("li");
        listItem.textContent = `${transaction.description}: ${transaction.amount}`;
        userTransaction.appendChild(listItem);
    });
}

function updatebalance() {
    let total = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
    userBalance.textContent = total;
}

display();
updatebalance();

userLogoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});