
const adminDec = document.getElementById("admin-description");
const adminamount = document.getElementById("admin-amount");
const admainAddBtn = document.getElementById("admin-add-btn");
const adminTransaction = document.getElementById("admin-transactions").getElementsByTagName("tbody")[0];
const adminBalanceSpan = document.getElementById("admin-balance");
const adminLogoutButton = document.getElementById("admin-logout");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function displayAdminTransactions() {
    adminTransaction.innerHTML = "";
    let total = 0;
    transactions.forEach((transaction, index) => {
        const row = adminTransaction.insertRow();
        const descriptionCell = row.insertCell(0);
        const amountCell = row.insertCell(1);
        const actionCell = row.insertCell(2);
        descriptionCell.textContent = transaction.description;
        amountCell.textContent = transaction.amount;
        const deleteButton = document.createElement("button");
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
    const description = adminDec.value;
    const amount = parseFloat(adminamount.value);
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