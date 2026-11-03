async function login() {
const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value;
const message = document.getElementById("message");

if (!username || !password) {
    message.textContent = "Enter username and password";
    return;
}

message.textContent = "Checking login...";

try {
    const response = await fetch(CONFIG.API_URL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || "Login failed");
    }

    message.textContent = "Login successful!";
} catch (error) {
    message.textContent = error.message || "Server connection failed";
}

}

function onTelegramAuth(user) {
document.getElementById("message").textContent =
"Telegram identity received. Server verification required.";

// Never trust Telegram widget data without server verification.
console.log("Telegram login received");

}