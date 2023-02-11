(function(){
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    video = document.getElementById('video'),
    vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        Audio: false
    }, function(stream) {
        video.srcObject = stream;
        video.play();
    },
         function(error) {
             // An error occured
             // error.code
         });
        video.addEventListener('play', function() {
            draw(this, context, 400, 300);
        }, false);
        function draw(video, context, width, height) {
            var image, data, i, r, g, b, brigtness;

            context.drawImage(video, 0, 0, width, height);
            image = context.getImageData(video, 0, 0, width, height);
            data = image.data;

            for(i=0; i< data.length; i = i + 4) {
                r = data[i];
                g = data[i+1];
                b = data[i+2];
                brigtness = (r + g + b) / 3;

                data[i]=data[i+1]=data[i+2] = brigtness
            }

            image.data = data;

            context.putImageData(image, 0, 0);

            setTimeout(draw, 10, video, context, width, height);
       }

        

})();