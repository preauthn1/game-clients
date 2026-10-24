
function init(dm){
    console.log("External Call Init");
    window.dm = dm;
}

function ReceiveToken(token) {
    console.log("External Call ReceiveToken");
    window.dm.receiveToken(token);
}

window.init = init;
window.ReceiveToken = [REDACTED];