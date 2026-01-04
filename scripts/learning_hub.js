const textContainer = document.getElementById('textContainer');
const exampleImage = document.getElementById('exampleImage');

function showImage(example) {
    switch(example) {

        case 'core':
            exampleImage.src = "images/1_core.png";
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
            exampleImage.src = "images/7.png";
            textContainer.innerHTML = `
                <h2>1. The Neural Network is made of layers.</h2><br/>
                <p>A layer is a collection of neurons that process the same inputs in parallel. 
                The output of one layer becomes the input for the next layer.</p>
            `;
            break;

        case 'neuron':
            exampleImage.src = "images/5.png";
            textContainer.innerHTML = `
                <h1>3. Zoom In: What Is a Neuron?</h1>

                <h2>A Neuron Is Nothing More Than:</h2>

                <p>
                    <strong>A linear unit</strong><br/>
                    z = w · x + b
                </p>

                <p>
                    <strong>Followed by an activation function:</strong><br/>
                    • linear regression → identity<br/>
                    • logistic regression → sigmoid<br/>
                    • neural networks → ReLU, tanh, sigmoid, etc.
                </p>

                <p>
                    This linear‑plus‑activation structure is the core building block of every neural network. 
                    Neurons take many inputs, pass them through a linear function, and then apply nonlinear 
                    activation functions.
                </p>
            `;
            break;


        case 'activation':
            exampleImage.src = "images/activation.png";
            textContainer.innerHTML = `
                <h1>A New Solution: Constrain the Output</h1>

                <h2>Why Activation Functions Matter</h2>

                <p>
                    To turn raw scores into probabilities, we apply a nonlinear activation function 
                    that squashes the output into the [0, 1] range.
                </p>

                <p>
                    The most common choice for binary classification is the <strong>sigmoid function</strong>:
                </p>

                <p>
                    σ(z) = 1 / (1 + e<sup>−z</sup>)<br/>
                    • Input: any real number<br/>
                    • Output: a value between 0 and 1
                </p>

                <p>
                    This solves the model adaptation challenge: it transforms the linear output 
                    into a valid probability.
                </p>
            `;
            break;


        case 'LinearUnit':
            exampleImage.src = "images/LinearUnit.png";
            textContainer.innerHTML = `
                <h1>The Core Building Block of Neural Networks</h1>

                <h2>Linear Unit</h2>

                <p>
                    This linear‑plus‑activation structure is the core building block of every neural network. 
                    Neurons take many inputs, pass them through a linear function, and apply nonlinear activation functions.
                </p>

                <p>
                    The linear part computes a weighted sum: <strong>z = w · x + b</strong>. 
                    This is just a dot product plus a bias — the same operation used in linear regression.
                </p>
            `;
            break;


        case 'one_input':
            exampleImage.src = "images/one_input.png";
            textContainer.innerHTML = `
                <h1>4. One Input: The Simplest Neuron</h1>

                <h2>Break It Down to First Principles</h2>

                <p>
                    A neuron with one input reduces to a simple linear equation:
                </p>

                <p>
                    <strong>ŷ = w x + b</strong>
                </p>

                <p>
                    This is exactly simple linear regression — and it introduces all the key components of learning:
                </p>

                <p>
                    • prediction<br/>
                    • residuals<br/>
                    • loss (MSE)<br/>
                    • gradients<br/>
                    • gradient descent<br/>
                    • parameter updates
                </p>

                <p>
                    Together, these form the first complete “learning loop.”
                </p>

                <h2>From Model to Learning System</h2>

                <p>
                    That seems simple enough — now we have the basic model inside a learning system.
                    Next, we need to put it all together:
                </p>

                <p>
                    • <strong>Objective:</strong> define a loss function<br/>
                    • <strong>Optimization:</strong> use gradients to improve the model
                </p>

                <p>
                    This is the essence of learning: making the model better through feedback.
                </p>
            `;
            break;


        case '7':
            exampleImage.src = "images/7.png";
            break;
    }
}
