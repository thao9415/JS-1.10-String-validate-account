reg=/^[_a-z0-9]{6,}$/;
function checkAccount(str) {
    if (reg.test(str)) {
        return true;
    }
    return false;
};
let account="_hahaha";
console.log(checkAccount(account));
account="Ahuhu";
console.log(checkAccount(account));