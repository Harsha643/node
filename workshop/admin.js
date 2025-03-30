
let adminDec = document.getElementById("admin-description");

let adminamount = document.getElementById("admin-amount");

let admainAddBtn = document.getElementById("admin-add-btn");

let adminTransaction = document.getElementById("admin-transactions").getElementsByTagName("tbody")[0];
let adminBalanceSpan = document.getElementById("admin-balance");
let adminLogoutButton = document.getElementById("admin-logout");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function displayAdminTransactions() {

    adminTransaction.innerHTML = "";

    let total = 0;

    transactions.forEach((transaction, index) => {

        let row = adminTransaction.insertRow()
        let descriptionCell = row.insertCell(0);
        let amountCell = row.insertCell(1);
        let actionCell = row.insertCell(2);

        descriptionCell.textContent = transaction.description;

        amountCell.textContent = transaction.amount;

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            transactions.splice(index, 1);
            localStorage.setItem("transactions", JSON.stringify(transactions));
            displayAdminTransactions();
            updateAdminBalance();
        });
        actionCell.appendChild(deleteButton);
        total += parseFloat(transaction.amount);
    });
    adminBalanceSpan.textContent = total;
}

function updateAdminBalance() {
    let total = transactions.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
    adminBalanceSpan.textContent = total;
}

displayAdminTransactions();
updateAdminBalance();

admainAddBtn.addEventListener("click", () => {
    let description = adminDec.value;
    let amount = parseFloat(adminamount.value);
    if (description && !isNaN(amount)) {
        transactions.push({ description, amount });
        localStorage.setItem("transactions", JSON.stringify(transactions));
        displayAdminTransactions();
        updateAdminBalance();
        adminDec.value = "";
        adminamount.value = "";
    }
});

adminLogoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});