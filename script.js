//error class functions
function removeErrorClass(...args) {
    args.forEach(e => {
        e.classList.remove("error");
    });
};

function addErrorClass(...args) {
    args.forEach(e => {
        e.classList.add("error");
    });
};

//email validation
let email = document.getElementById("email");

email.addEventListener("input", () => {
    if (/^([^@]+)(@{1})([^\.]+)(\.{1})(.{2,})/.test(email.value)) {
        removeErrorClass(email);
    } else {
        addErrorClass(email);
    };
});

//password validation
let password = document.getElementById("password");
let conf = document.getElementById("confirm");

password.addEventListener("input", () => {
    if (password.value === conf.value) {
        removeErrorClass(password, conf);
    } else {
        addErrorClass(password, conf);
    };
});

conf.addEventListener("input", () => {
    if (conf.value === password.value) {
        removeErrorClass(conf, password);
    } else {
        addErrorClass(conf, password);
    };
});