const colours = document.querySelectorAll('h2')

function generateColours(){
    colours.forEach((colour) => {
        let hexCode = '#' + Math.random().toString(16).substring(2, 8);
        colour.style.backgroundColor = hexCode
        colour.innerText = hexCode
    })
}

generateColours()