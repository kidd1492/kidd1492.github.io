const titleEx = document.getElementById('titleEx');
const exampleImage = document.getElementById('exampleImage');

function showImage(example) {
    switch(example) {

        case 'core':
            titleEx.innerHTML = "Core";
            exampleImage.src = "images/1_core.png";
            break;

        case '2':
            titleEx.innerHTML = "2";
            exampleImage.src = "images/2.png";
            break;

        case '3':
            titleEx.innerHTML = "3";
            exampleImage.src = "images/3.png";
            break;

        case '4':
            titleEx.innerHTML = "4";
            exampleImage.src = "images/4.png";
            break;

        case '5':
            titleEx.innerHTML = "5";
            exampleImage.src = "images/5.png";
            break;

        case '6':
            titleEx.innerHTML = "6";
            exampleImage.src = "images/6.png";
            break;

        case '7':
            titleEx.innerHTML = "7";
            exampleImage.src = "images/7.png";
            break;

        case '8':
            titleEx.innerHTML = "8";
            exampleImage.src = "images/8.png";
            break;

        case '9':
            titleEx.innerHTML = "9";
            exampleImage.src = "images/9.png";
            break;

        case '10':
            titleEx.innerHTML = "10";
            exampleImage.src = "images/10.png";
            break;

        case '11':
            titleEx.innerHTML = "11";
            exampleImage.src = "images/11.png";
            break;

        case '12':
            titleEx.innerHTML = "12";
            exampleImage.src = "images/12.png";
            break;

        case '13':
            titleEx.innerHTML = "13";
            exampleImage.src = "images/13.png";
            break;

        default:
            titleEx.innerHTML = "Welcome!";
            exampleImage.src = "6.png";
    }
}
