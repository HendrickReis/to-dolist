const corpo = document.getElementById("corpo")
const Header = document.getElementById("header__title")
const criarTarefa = document.getElementById("main")
const criar = document.getElementById("criar")

corpo.style.backgroundColor = `${localStorage.getItem("CorFundo") ?? "white"}`
corpo.style.color = `${localStorage.getItem("CorFonte")}`
Header.style.color = `${localStorage.getItem("CorFonte")}`
criarTarefa.style.backgroundColor = `${localStorage.getItem("CorHeader") ?? "rgb(238, 238, 238)"}`
criar.style.backgroundColor = `${localStorage.getItem("CorFundo") ?? "white"}`
criar.style.color = `${localStorage.getItem("CorFonte")}`