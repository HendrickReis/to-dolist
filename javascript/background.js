const corpo = document.getElementById("corpo");
const header = document.getElementById("header");
const titleHeader = document.getElementById("title__header");
const Colortheme = document.getElementById("button__header");

// const bodyChange = document.querySelectorAll(".background-change__header")
// const titleChange = document.querySelectorAll(".background-change__title-header")

corpo.style.backgroundColor = `${localStorage.getItem("CorFundo") ? localStorage.getItem("CorFundo") : "white"}`;
header.style.backgroundColor = `${localStorage.getItem("CorHeader") ? localStorage.getItem("CorHeader") : "rgb(238, 238, 238)"}`;
titleHeader.style.color = `${localStorage.getItem("CorFonte") ? localStorage.getItem("CorFonte") : "black"}`;
Colortheme.style.color = `${localStorage.getItem("CorFonte") ? localStorage.getItem("CorFonte") : "black"}`;

// area de mudança de cor
Colortheme.onclick = () => {
    if (localStorage.getItem("CorFundo") === 'black') {

        localStorage.setItem("CorFundo", "white");
        localStorage.setItem("CorHeader", "rgb(238, 238, 238)");
        localStorage.setItem("CorFonte", "black");

        corpo.style.backgroundColor = `${localStorage.getItem("CorFundo")}`;
        header.style.backgroundColor = `${localStorage.getItem("CorHeader")}`;
        Colortheme.style.color = `${localStorage.getItem("CorFonte")}`
        titleHeader.style.color = `${localStorage.getItem("CorFonte")}`;

    } else {

        localStorage.setItem("CorFundo", "black");
        localStorage.setItem("CorHeader", "rgba(94, 94, 94, 0.29)");
        localStorage.setItem("CorFonte", "white");

        corpo.style.backgroundColor = `${localStorage.getItem("CorFundo")}`;
        header.style.backgroundColor = `${localStorage.getItem("CorHeader")}`;
        Colortheme.style.color = `${localStorage.getItem("CorFonte")}`;
        titleHeader.style.color = `${localStorage.getItem("CorFonte")}`;

    }
}
