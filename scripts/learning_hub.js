const textContainer = document.getElementById('textContainer');
const exampleImage = document.getElementById('exampleImage');

function showImage(example) {
    switch(example) {

        case 'core':
            exampleImage.src = "images/1_core.png";
            textContainer.innerHTML = `This is the new text`;
            break;

        case '2':
            exampleImage.src = "images/2.png";
            textContainer.innerHTML =   `<p>This is the new text sample 2</p>`;
            break;

        case '3':
            exampleImage.src = "images/3.png";
            break;

        case '4':
            exampleImage.src = "images/4.png";
            break;

        case '5':
            exampleImage.src = "images/5.png";
            break;

        case '6':
            exampleImage.src = "images/6.png";
            break;

        case '7':
            exampleImage.src = "images/7.png";
            break;

        case '8':
            exampleImage.src = "images/8.png";
            break;

        case '9':
            exampleImage.src = "images/9.png";
            break;

        case '10':
            exampleImage.src = "images/10.png";
            break;

        case '11':
            exampleImage.src = "images/11.png";
            break;

        case '12':
            exampleImage.src = "images/12.png";
            break;

        case '13':
            exampleImage.src = "images/13.png";
            break;

        default:
            exampleImage.src = "complte_nn.png";
    }
}
