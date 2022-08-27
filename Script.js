console.log('Hello')

const btn = document.querySelector('.buttons');
const calculator = document.querySelector('.calculator');
const screen = document.querySelector('input');


let array = ['NaN', 'undefined']
btn.addEventListener('click', (e) => {
    if (e.target.innerText == '=') {
        try {
            if (array.includes(String(eval(screen.value)))) {
                return screen.value = 0
            }
            screen.value = eval(screen.value)
        }
        catch (e) {
            screen.style.color = 'red'
            setTimeout(() => {
                screen.style.color = ''
            }, 300)
        }
        return
    }


    if (e.target.innerText == 'C') {
        screen.value = ''
        return
    }
    screen.value += e.target.innerText
    console.log(e.target.innerText)

})





VanillaTilt.init(document.querySelector(".calculator"), {
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.1,
    perspective: 1000,
    gyroscope: true,
    gyroscopeMaxAngleX: 45,
    gyroscopeMinAngleY: -45,
    gyroscopeMaxAngleY: 45,


});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".calculator"));
