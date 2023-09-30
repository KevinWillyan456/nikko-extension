const buttonAcept = document.getElementById("acept");
const telaBemVindo = document.querySelector(".tela_bem_vindo");
const body = document.querySelector("body");
var videoFundo = document.getElementById("backgroundVideo");
var telaLoading = document.querySelector(".tela_loading");

var data = [
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/Essa%20m%C3%BAsica%20DEVERIA%20dominar%20o%20mundo%20Nikko%20Edit.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/FOGO%20TERRA%20E%20AR.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/Mano,%20pq%20eu%20viciei%20TANTO%20nessa%20musica%20Nikko%20Edit.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/Minist%C3%A9rio%20da%20SAUDE%20Adverte_%20Essa%20m%C3%BAsica%20causa%20v%C3%ADcios.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/NAVE%20ESPACIAL%20-%20Nightcore.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/Nightcore%20Brasileiro%20E%20BOM.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/S3RL%20-%20Princesa%20Jujuba%20VS%20Princesa%20de%20Fogo%20Tradu%C3%A7%C3%A3o_Legendado.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/TODO%20MUNDO%20ao%20seu%20redor%20ja%20ouviu%20esse%20remix.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/TOKYO%20DE%20NOITE_Tokyo%20By%20Night.mp4" type="video/mp4">',
    '<source src="https://nikko-extension.kevinsouza456.repl.co/assets/resources/video/Voc%C3%AA%20J%C3%81%20OUVIU%20essa%20m%C3%BAsica_Better%20Off%20Alone.mp4" type="video/mp4">',
];

buttonAcept.addEventListener("click", () => {
    telaBemVindo.remove();
    // audioOpen.loop = true;
    //  videoFundo.innerHTML = '<source src="assets/resources/video/MMV -  Aftermath - The way You Are (1080p60).mp4" type="video/mp4">'
    var iniVideo = Math.floor(Math.random() * (data.length - 0) + 0);
    videoFundo.innerHTML = data[iniVideo];
    // videoFundo.innerHTML = data[4];
    // audioOpen.play();

    telaLoading.classList.remove("tela_loading-Hidden");
});

videoFundo.addEventListener("loadeddata", () => {
    setTimeout(() => {
        telaLoading.classList.add("tela_loading-Hidden");
        // videoFundo.playbackRate  = 16;
        videoFundo.play();
        // videoFundo.loop = true;
        gerenciaVideos();
    }, 2000);
});

function gerenciaVideos() {
    var videoL = document.getElementById("backgroundVideo");
    videoL.addEventListener("ended", nextVideo);
    function nextVideo() {
        // LOOP ATIVADO!
        var num = Math.floor(Math.random() * (data.length - 0) + 0);
        videoFundo.innerHTML = "";
        document.querySelector(".player-video-bg").innerHTML =
            '<video id="backgroundVideo">' + data[num] + "</video";
        //   videoFundo.innerHTML = data[num];
        videoFundo = document.getElementById("backgroundVideo");
        videoFundo.play();
        gerenciaVideos();
    }
}

var buttonFullScreen = document.querySelector(".fullScreen");
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
