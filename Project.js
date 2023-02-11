const box = document.querySelector('.box');
const video = document.querySelector('.vid');
let width = video.clientWidth;
let height = video.clientHeight;

const c = document.querySelector('canvas')
c.setAttribute('height', height);
const ctx = c.getContext('2d');
video.addEventListener('play',drawVid);
/* 1. QuerySelector 
    2. GetContext => 2d canvas
    3. addEventListner => to handel the event 
    4. drawimage => to show the video in first canvas
    5. getImageData => to get the data of image (height, width, rgb) from a frame
    6. calculation
    7. putImagedata => to give the calculated data to frame
    8. requestAnimationFrame => to show the final white background image on canvas 3
    9. Merge the image og canvas 3 on canvas 2 video/image
 */
function drawVid(){
    ctx.drawImage(video,0,0,width,height);
    //remove green background

    let frame = ctx.getImageData(0,0,width,height);
    for(let i=0; i<frame.data.length; i+=4){
        let r = frame.data[i]; //red
        let g = frame.data[i + 1]; //green
        let b = frame.data[i + 2]; //blue
        if(r>10 & r<100 & g>100 & g<250 & b<80){
            frame.data[i + 3] = 0 //alpha

        }
    }
    ctx.putImageData(frame,0,0)

    requestAnimationFrame(drawVid);

}
