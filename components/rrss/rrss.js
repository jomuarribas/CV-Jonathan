import { data } from '../../data';
import './rrss.css'

export const rrss = () => {
  const header = document.getElementById('header');
  const rrss = document.createElement('section');
  rrss.classList.add('rrss');
  header.appendChild(rrss);

  const linkedin = document.createElement('img');
  linkedin.addEventListener('click', (e) => {
    e.preventDefault();
    const url = data[1].redesSociales[0].linkedin;
    window.open(url, '_blank');
  })
  linkedin.setAttribute('target', '_blank')
  linkedin.src = '/assets/rrss/linkedin.png'

  const whatsapp = document.createElement('img');
  whatsapp.addEventListener('click', (e) => {
    e.preventDefault();
    const url = data[1].redesSociales[1].whatsapp;
    window.open(url, '_blank');
  })
  whatsapp.src = '/assets/rrss/whatsapp.png'

  const facebook = document.createElement('img');
  facebook.addEventListener('click', (e) => {
    e.preventDefault();
    const url = data[1].redesSociales[2].facebook;
    window.open(url, '_blank');
  })
  facebook.src = '/assets/rrss/facebook.png'

  const instagram = document.createElement('img');
  instagram.addEventListener('click', (e) => {
    e.preventDefault();
    const url = data[1].redesSociales[3].instagram;
    window.open(url, '_blank');
  })
  instagram.src = '/assets/rrss/instagram.png'

  rrss.appendChild(linkedin);
  rrss.appendChild(whatsapp);
  rrss.appendChild(facebook);
  rrss.appendChild(instagram);
};