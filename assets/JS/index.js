const buttonAcept = document.getElementById("acept");
const telaBemVindo = document.querySelector(".tela_bem_vindo");
const body = document.querySelector("body");
let videoFundo = document.getElementById("backgroundVideo");
let telaLoading = document.querySelector(".tela_loading");
const btnProximo = document.querySelector("#btnProximo");

let data = [
    "GvHiffqm5ic",
    "_EGPF4lOhS0",
    "3crVz-PScY0",
    "z4iKx2EB6yI",
    "X1p_nufU6Jk",
    "z_V5qk91x84",
    "Y1l3ePucj1c",
    "tbGLhR8-h3k",
    "8mEy0RjAURQ",
    "mqr_HZoigf8",
];

let ultimoSorteado = -1;

btnProximo.addEventListener("click", () => {
    nextVideo();
});

buttonAcept.addEventListener("click", () => {
    telaBemVindo.remove();
    ultimoSorteado = sortearDiferenteAnterior(data, ultimoSorteado);
    videoFundo.src = data[ultimoSorteado];
    telaLoading.classList.remove("tela_loading-Hidden");
});

videoFundo.addEventListener("loadeddata", () => {
    setTimeout(() => {
        telaLoading.classList.add("tela_loading-Hidden");
        videoFundo.play();
        gerenciaVideos();
        document
            .querySelector(".container-proximo")
            .classList.remove("tela_loading-Hidden");
    }, 2000);
});

function nextVideo() {
    ultimoSorteado = sortearDiferenteAnterior(data, ultimoSorteado);
    videoFundo.src = data[ultimoSorteado];
    videoFundo.play();
    gerenciaVideos();
}
function gerenciaVideos() {
    videoFundo.addEventListener("ended", nextVideo);
}

function sortearDiferenteAnterior(array, ultimoSorteado) {
    let novoSorteado;
    do {
        novoSorteado = Math.floor(Math.random() * array.length);
    } while (novoSorteado === ultimoSorteado);

    return novoSorteado;
}

let buttonFullScreen = document.querySelector(".fullScreen");
buttonFullScreen.addEventListener("click", toggleFullScreen);

function toggleFullScreen() {
    if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
            );
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
