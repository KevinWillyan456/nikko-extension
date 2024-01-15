const buttonAcept = document.getElementById("acept");
const telaBemVindo = document.querySelector(".tela_bem_vindo");
const body = document.querySelector("body");
let videoFundo = document.getElementById("backgroundVideo");
let telaLoading = document.querySelector(".tela_loading");
const btnProximo = document.querySelector("#btnProximo");

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let data = [
    "z_V5qk91x84",
    "Y1l3ePucj1c",
    "X1p_nufU6Jk",
    "8mEy0RjAURQ",
    "mqr_HZoigf8",
];

let ultimoSorteado = -1;
let currentVideoIndex = sortearDiferenteAnterior(data);
let canPlay = false;
let playerClickedBefore = false;
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: 360,
        width: 640,
        videoId: data[currentVideoIndex],
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            rel: 0,
            fs: 1,
            modestbranding: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

function onPlayerReady() {
    canPlay = true;

    if (playerClickedBefore) {
        playVideo();
    }
}

function onPlayerStateChange(event) {
    document.querySelector("#player").classList.remove("player-hidden");
    document
        .querySelector(".tela_loading")
        .classList.add("tela_loading-Hidden");

    if (event.data == YT.PlayerState.ENDED) {
        loadNextVideo();
    }
}

function loadNextVideo() {
    player.loadVideoById(data[sortearDiferenteAnterior(data)]);
}

function playVideo() {
    if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
        player.playVideo();
    }
}

function setQuality(quality) {
    player.setPlaybackQuality(quality);
}

btnProximo.addEventListener("click", () => {
    loadNextVideo();
});

buttonAcept.addEventListener("click", () => {
    playerClickedBefore = true;
    telaBemVindo.remove();
    document.querySelector(".cover").style.display = "block";
    document
        .querySelector(".container-proximo")
        .classList.remove("tela_loading-Hidden");
    document
        .querySelector(".tela_loading")
        .classList.remove("tela_loading-Hidden");
    if (canPlay) {
        playVideo();
    }
});

function sortearDiferenteAnterior(array) {
    let novoSorteado;
    do {
        novoSorteado = Math.floor(Math.random() * array.length);
    } while (novoSorteado === ultimoSorteado);

    ultimoSorteado = novoSorteado;

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
