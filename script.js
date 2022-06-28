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

    const memePreviewContainer = document.querySelector('#memePreviewContainer');
    memePreviewContainer.style.display = "block";

    const canvasContainer = document.querySelector('#memeText');
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

const take_photo = async()=>{

        const generatedMeme = document.querySelector('.genratedImage');
        generatedMeme.style.opacity = 1;

        await Webcam.snap(function(data_uri){
            const memeText = document.querySelector('#memeText').innerHTML;

            document.querySelector(".genratedImage").innerHTML = `
            <H1>Your generated Meme !</H1>
            <div id="result">
                <p>${memeText}</p>
                <img src=${data_uri} alt="">
            </div>`;
        
        document.querySelector('#downloadBTN').style.opacity=1; 

    })
}

const downloadImage = ()=>{
    const finalMemeDiv = document.querySelector('#result');

    html2canvas(finalMemeDiv).then((canvas) => {
        const base64image = canvas.toDataURL('image/png');
        var anchor = document.createElement('a');
        anchor.setAttribute('href',base64image);
        anchor.setAttribute('download','meme.png');
        anchor.click();
        anchor.remove();
    })
}

