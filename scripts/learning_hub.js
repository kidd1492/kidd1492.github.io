const titleEx = document.getElementById('titleEx');
const textContainer = document.getElementById('textContainer');
const exampleImage = document.getElementById('imageContainer');

function showImage(example) {
    switch(example) {

        case 'nn':
            titleEx.innerHTML = "Neural Network Learning Projects"
            exampleImage.innerHTML = `         
        <p>For many learners, the term neural network evokes a sense of overwhelming complexity, layers upon layers of mysterious computations. 
        It’s easy to assume that understanding these systems requires years of advanced mathematics. 
        But when you strip a neural network down to its first principles, a very different picture emerges. 
        Beneath the surface, every operation in a neural network reduces to a small set of simple, intuitive
        mathematical and geometric ideas. The entire architecture, no matter how deep or powerful, is built
        from basic concepts like linear combinations, dot products, projections, and simple nonlinear functions. 
        What appears complicated is really just these elementary pieces repeated and composed at scale.</p><br/>
            <h2>Why These Projects Matter</h2><br/><p>
        These four projects walk you through the exact mathematical path that modern neural networks 
        are built on. Each step introduces one of the core operations that neurons and layers perform:</p><br/><p>
        • linear relationships<br/>
        • dot products and projections<br/>
        • nonlinear classification<br/>
        • stacking neurons to solve non‑linear problems</p><br/>

    <p>By the time you finish all four, you will have reconstructed the logic of a neural network 
        from the ground up — starting with a single straight line and ending with a model that can 
        solve the XOR problem, something no linear model can do.</p>
            `;
            textContainer.innerHTML = `

<h2>The Four Projects</h2><br/>
<h3>What is a Neural Network?</h3>
<p><a href="intro_nn.html">Into Neural Network Breakdown</a></p><br/>
<h3>1. Single‑Feature Linear Regression — Cost vs. Size</h3><br/>
<p>This project teaches the simplest possible learning system: fitting a straight line to data.  
    You learn how predictions are made using <i>y = mx + b</i>, how errors are measured with MSE, 
    and how gradient descent updates the parameters.  
    This is the mathematical core of a single neuron without activation.</p><br/>

<h3>2. Multi‑Feature Linear Regression — Cost vs. Age and Size</h3><br/>
<p> Here you expand from one input to many. The math becomes vector‑based:</p><br/>
<p>
    • dot products (<i>w · x</i>)<br/>
    • projections<br/>
    • matrix multiplication for batches of data</p><br/>
<p>This project shows how a neuron handles multiple inputs and how linear models form 
    hyperplanes in higher‑dimensional space.</p><br/>
<h3>3. Logistic Regression — Binary Classification</h3><br/><p>
    This project introduces nonlinearity through the sigmoid activation function.  
    You learn how a model outputs probabilities, how decision boundaries work, and how 
    cross‑entropy loss trains a classifier.  
    This is the mathematical structure of a neuron with activation.
</p><br/>
<h3>4. Neural Network — Solving the XOR Problem</h3><br/>
<p>The final project shows why we need hidden layers. XOR cannot be solved by any linear model, 
    so you build a small neural network with stacked neurons and nonlinear activations.  
    This demonstrates how layers transform data into new spaces where previously impossible 
    patterns become separable.
</p><br/>
<p>This is the moment where all previous concepts — dot products, activations, gradients, and 
    nonlinear transformations — come together into a true neural network.</p>

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
