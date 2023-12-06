import './footer.css'

const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();

export const footerPage = () => {
  const footerSection = document.getElementById('footer')

  const footerDiv = document.createElement('div')
  const footerP = document.createElement('p')
  footerP.textContent = `${añoActual} © Jonathan Muñoz Arribas`;

  footerSection.appendChild(footerDiv)
  footerDiv.appendChild(footerP)

}

