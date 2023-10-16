var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "9012" }
];

var cuentaSeleccionada;

document.getElementById("cuenta").innerHTML = cuentas.map(function (cuenta, index) {
    return `<option value="${index}">${cuenta.nombre}</option>`;
}).join("");

function validarPassword() {
    var index = document.getElementById("cuenta").value;
    var password = document.getElementById("password").value;

    if (cuentas[index].password === password) {
        cuentaSeleccionada = cuentas[index];
        document.getElementById("opciones").style.display = "block";
    } else {
        alert("Password incorrecto");
    }
}

function consultarSaldo() {
    document.getElementById("resultado").innerHTML = `Saldo actual: $${cuentaSeleccionada.saldo}`;
}

function ingresarMonto() {
    var monto = parseFloat(document.getElementById("montoIngresar").value);

    if (monto >= 10 && cuentaSeleccionada.saldo + monto <= 990) {
        cuentaSeleccionada.saldo += monto;
        document.getElementById("resultado").innerHTML = `Monto ingresado: $${monto}<br>Nuevo saldo: $${cuentaSeleccionada.saldo}`;
    } else {
        alert("Monto ingresado no válido");
    }
}

function retirarMonto() {
    var monto = parseFloat(document.getElementById("montoRetirar").value);

    if (monto >= 10 && cuentaSeleccionada.saldo - monto >= 10) {
        cuentaSeleccionada.saldo -= monto;
        document.getElementById("resultado").innerHTML = `Monto retirado: $${monto}<br>Nuevo saldo: $${cuentaSeleccionada.saldo}`;
    } else {
        alert("Monto retirado no válido");
    }
}