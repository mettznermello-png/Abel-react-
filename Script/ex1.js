function ex1() {
    const idade = Number(prompt("Digite sua idade:"));
    if (idade >= 18 && idade < 65) {
        alert("você pode votar")
    } else if (idade >= 16 && idade <= 17) {
        alert("você pode votar, mas não precisa")
    } else if (idade >= 65) {
        alert("você pode votar, apenas se quiser")
    } else {
        alert("você não pode votar")
    }
}
const buttonex1 = document.getElementById("ex1")
buttonex1.addEventListener("click", () => {
    ex1();
})