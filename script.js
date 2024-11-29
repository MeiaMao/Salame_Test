const SALT = "CHAVE_SECRETA"; // Mantenha esta string consistente e segura.

// Gerar Key
document.getElementById("generateForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("generateDate").value;

    if (!date) {
        alert("Por favor, insira uma data!");
        return;
    }

    // Concatenar data com o salt e gerar o hash MD5
    const dataConcat = date + SALT;
    const hash = CryptoJS.MD5(dataConcat).toString();

    // Mostrar a key gerada
    document.getElementById("generatedKey").innerText = hash;
});

// Validar Key
document.getElementById("validateForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const date = document.getElementById("validateDate").value;
    const key = document.getElementById("validateKey").value;

    if (!date || !key) {
        alert("Por favor, insira a data e a key!");
        return;
    }

    // Concatenar data com o salt e gerar o hash MD5
    const dataConcat = date + SALT;
    const expectedHash = CryptoJS.MD5(dataConcat).toString();

    // Validar a key
    const currentDate = new Date();
    const inputDate = new Date(date);

    if (expectedHash === key) {
        if (inputDate >= currentDate) {
            document.getElementById("validationResult").innerText = "Key válida!";
            document.getElementById("validationResult").style.color = "green";
        } else {
            document.getElementById("validationResult").innerText = "Key expirada!";
            document.getElementById("validationResult").style.color = "orange";
        }
    } else {
        document.getElementById("validationResult").innerText = "Key inválida!";
        document.getElementById("validationResult").style.color = "red";
    }
});
