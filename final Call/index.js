let video, c_out, c_temp, ctx_out, ctx_temp;

function init() {
    // video = document.getElementById("video");
    // c_out = document.getElementById("output-canvas");
    // ctx_out = c_out.getContext("2d");

    // c_temp = document.createElement("canvas");
    // c_temp.setAttribute("width", 800);

    // ctx_temp = c_temp.getContext("2d");

    // video.addEventListener("play", computeFrame)
    video = document.getElementById("video");
    c_out = document.getElementById('output-canvas');
    ctx_out = c_out.getContext("2d");

    c_temp = document.createElement("canvas");
    c_temp.setAttribute("width","800");
    c_temp.setAttribute("height","450");

    ctx_temp = c_temp.getContext("2d");

    video.addEventListener("play", computeFrame)
}

function computeFrame() {
    ctx_temp.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    let frame = ctx_temp.getImageData(0, 0, video.videoWidth, video.videoHeight);

    ctx_out.putImageData(frame, 0, 0)
    setTimeout(computeFrame, 0)
}

document.addEventListener("DOMContentLoaded", () => {
    init();
})