const imageGenerator = async()=>{
    const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes");
    const quotes = await response.json();
    const rand = await Math.floor(Math.random()*(400-0+1)+0);
    
    const canvasContainer = document.querySelector('.genratedImage');

    canvasContainer.style.display = "block"


	const canvasElement = document.getElementById('image');
	new CanvasConstructor.Canvas(canvasElement)
		.setColor('#AEFD54')
		.printImage(await CanvasConstructor.loadImage('https://picsum.photos/1600/900'), 0, 0, 1600, 900)
		.setTextAlign('center')
		.setColor('#000000')
		.setTextFont('28px Impact')
        .setShadowColor("#fff")
        .setShadowOffsetX(2)
        .setShadowOffsetY(2)
        .setShadowBlur(4)
		.printWrappedText(`${quotes?quotes[rand].en:'karan'}`, 800, 100,1500);

    }		
    
    const celebrate = ()=>{
            document.querySelector("body").innerHTML +="<div id='celebration'>🎉 Generated !</div>";
            setTimeout(() => {
              document.querySelector('#celebration').remove(); 
            }, 2000);  
    }

    const downloadImage = ()=>{
        var link = document.createElement('a');
        link.download = 'Quote.png';
        link.href = document.querySelector('canvas').toDataURL()
        link.click();
        // var data = document.querySelector('canvas').toDataURL();
        // var prev = window.location.href;
        // window.location.href = data.replace("image/png", "image/octet-stream");
        // window.location.href = prev;
    }


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
