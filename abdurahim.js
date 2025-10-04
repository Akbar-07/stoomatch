var delay = 0


function dale() {
    var quott = document.querySelector(".line-swiper").style
    delay = delay + 1
    console.log(delay);
    if (delay === 1) {
        document.querySelector(".ranwe-btn").style = `pointer-events: none;`
    document.querySelector(".ranwe-btn").style = `pointer-events: visible;`
        document.querySelector(".line-swiper").style = `width: 30%;`
    } else if (delay === 2) {
        document.querySelector(".line-swiper").style = `width: 60%;`
    } else if (delay === 3) {
        document.querySelector(".line-swiper").style = `width: 100%;`
        document.querySelector(".dalle-btn").style = `pointer-events: none;`

    }
}
function ranwe() {
    delay = delay - 1
    console.log(delay);
    if (delay === 3) {
        
        document.querySelector(".dalle-btn").style = `pointer-events: visible;`
        document.querySelector(".line-swiper").style = `width: 60%;`
    } else if (delay === 2) {
        document.querySelector(".dalle-btn").style = `pointer-events: visible;`
        document.querySelector(".line-swiper").style = `width: 30%;`
    } else if (delay === 1) {
        document.querySelector(".dalle-btn").style = `pointer-events: visible;`
        document.querySelector(".line-swiper").style = `width: 0%;`
        document.querySelector(".ranwe-btn").style = `pointer-events: none;`

    }
}

if (delay === 0) {
    document.querySelector(".ranwe-btn").style = `pointer-events: none;`
} else {

    document.querySelector(".ranwe-btn").style = `pointer-events: visible;`
}