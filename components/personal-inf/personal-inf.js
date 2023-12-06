import { data } from '../../data';
import './personal-inf.css'


export const personalInf = () => {
  const header = document.getElementById('header');
  const personalInfDiv = document.createElement('section');
  personalInfDiv.className = 'personalInfDiv';
  header.appendChild(personalInfDiv);

  const nameDiv = document.createElement('div');
  nameDiv.className = 'nameDiv';
  const name = document.createElement('h1');
  const developer = document.createElement('h2');
  const contactDiv = document.createElement('div');
  contactDiv.className = 'contactDiv';
  const email = document.createElement('a');
  email.setAttribute('href', `mailto:${data[0].informacionPersonal[3].email}`)
  const tlfn = document.createElement('p');
  const country = document.createElement('p');
  const photographyDiv = document.createElement('div');
  photographyDiv.classList.add('photography');
  const photography = document.createElement('img');

  name.textContent = data[0].informacionPersonal[0].nombre.toUpperCase();
  developer.textContent = data[0].informacionPersonal[1].perfil;
  email.textContent = data[0].informacionPersonal[3].email;
  tlfn.textContent = `Tlfno.: ${data[0].informacionPersonal[2].telefono}`;
  country.textContent = `País: ${data[0].informacionPersonal[4].pais}`;
  photography.src = data[0].informacionPersonal[5].fotografia;

  personalInfDiv.appendChild(nameDiv);
  personalInfDiv.appendChild(contactDiv);
  personalInfDiv.appendChild(photographyDiv);

  nameDiv.appendChild(name);
  nameDiv.appendChild(developer);
  contactDiv.appendChild(email);
  contactDiv.appendChild(tlfn);
  contactDiv.appendChild(country);
  photographyDiv.appendChild(photography);

};

