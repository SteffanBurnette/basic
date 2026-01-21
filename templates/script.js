const text = ` I'm Steffan, a compsci connoisseur who finds passion in discovering, breaking, understanding and rebuilding things into a newer more optimized product.

The current tech stacks that I am most familiar with are:

    M(P)ERN for full stack development
    Java + Springboot for robust backend functionalities
    Pandas + Numpy + Sklearn + Matplotplib + Seaborn + Tensorflow + Pytorch for DS/ML/DL modeling

While delving deeper into the technologies above I am also currently learning:

    The AWS cloud stack
    Docker containerization's
    Kubernetes
 `;
let index = 0;

const speed = 50; // typing speed (ms)
const target = document.getElementById("text");

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}

type();
