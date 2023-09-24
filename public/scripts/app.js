const createForm = document.getElementById("create-form");
const loginForm = document.getElementById("login-form");
const msgElm = document.getElementById("msg");

createForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameElm = document.getElementById("create-user");
    const passwordElm = document.getElementById("create-pass");

    const username = usernameElm.value;
    const password = passwordElm.value;

    fetch("/create", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        msgElm.innerText = data.message;
    })
    .catch(err => {
        console.error(err.message);
    });
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameElm = document.getElementById("login-user");
    const passwordElm = document.getElementById("login-pass");

    const username = usernameElm.value;
    const password = passwordElm.value;

    fetch("/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        msgElm.innerText = data.message;
    })
    .catch(err => {
        console.error(err.message);
    });
});