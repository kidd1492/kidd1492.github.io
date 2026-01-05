const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const exampleImage = document.getElementById('imageContainer');

function showImage(example) {
    switch(example) {

        case 'nn':
            titleEx.innerHTML = "Neural Networks"
            exampleImage.innerHTML = "images/1_core.png";
            textContainer.innerHTML = `
                <h1>Neural Networks From First Principles</h1>

                <h2>Start with the Big Idea</h2>

                <p>
                    Neural networks look complicated, but at their core they are built from a small set 
                    of simple mathematical operations:
                </p>

                <p>
                    • linear combinations<br/>
                    • dot products<br/>
                    • projections<br/>
                    • simple nonlinear functions
                </p>

                <p>
                    Everything else is just these pieces repeated at scale.
                </p>
            `;
            break;


        case 'layers':
            exampleImage.innerHTML = "images/7.png";
            textContainer.innerHTML = `
                <h2>1. The Neural Network is made of layers.</h2><br/>
                <p>A layer is a collection of neurons that process the same inputs in parallel. 
                The output of one layer becomes the input for the next layer.</p>
            `;
            break;
    }
}
