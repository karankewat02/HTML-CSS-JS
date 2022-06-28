
// PARTICLE JS
particlesJS("particles-js", {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 500 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
            value: 25,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: true, mode: "repulse" },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
});


const getMeme = async()=>{

    const memeAPI = 'https://icanhazdadjoke.com/slack'
    const res = await fetch(memeAPI);
    const data = await res.json();

    const canvasContainer = document.querySelector('#memeText');
    // canvasContainer.style.display = "block";
    canvasContainer.innerHTML = data.attachments[0].text;
    window.location.href=`${window.location.href}#memePreviewContainer`

    loadCamera();
}


const loadCamera = ()=>{
    Webcam.set({
        width:350,
        height:300,
        image_format:'jpeg',
        jpeg_quality:90
    })
    Webcam.attach('#camera')
}

const take_photo = ()=>{
    Webcam.snap(function(data_uri){

    // const canvasElement = document.getElementById('image');
	// new CanvasConstructor.Canvas(canvasElement)
    //     .setColor('#FFFFFF')
    //     .printRectangle(0, 0, 1000, 300)
    //     .printImage(CanvasConstructor.loadImage(data_uri), 325, 300, 675,800 )
	// 	.setTextAlign('center')
	// 	.setColor('#000000')
	// 	.setTextFont('28px Impact')
	// 	.printWrappedText(`'Meme Text'}`, 500, 100,900);

        const memeText = document.querySelector('#memeText').innerHTML;

        document.querySelector(".genratedImage").innerHTML = `
        <div id="result">
            <p>${memeText}</p>
            <img src=${data_uri} alt="">
        </div>`
    })
}


