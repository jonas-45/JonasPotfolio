const ProjectsData = [
  {
    title: 'Tonic',
    subtitle: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/card1.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/JonasPotfolio/',
    sourceUrl: 'https://github.com/jonas-45',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/card2.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/JonasPotfolio/',
    sourceUrl: 'https://github.com/jonas-45',
  },
  {
    title: 'Tonic',
    subtitle: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/card3.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/JonasPotfolio/',
    sourceUrl: 'https://github.com/jonas-45',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageUrl: './images/card4.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/JonasPotfolio/',
    sourceUrl: 'https://github.com/jonas-45',
  },
];

const cardImg = document.querySelectorAll('.card-top');
const titles = document.querySelectorAll('.project-title');
const subtitles = document.querySelectorAll('.card-categories ul');
const description = document.querySelectorAll('.project-description');
const technologies = document.querySelectorAll('.web-technologies ul');
const projectDetailsBtns = document.querySelectorAll('.project-btn');

const dotImg = './images/counter.png';

function showProjectDetailsPopUp(pData) {
  const body = document.querySelector('body');
  const popupWindow = document.querySelector('.mobile-popup');
  const popupCardImage = document.querySelector('.card-image');
  const popupClose = document.querySelector('.popup-close');

  const popupTitle = document.querySelector('.popup-title');
  const popupSubtitles = document.querySelector('.popup-subtitles ul');
  const popupDescription = document.querySelector('.popup-description');
  const popupTechnologies = document.querySelector('.popup-technologies');
  const seeLive = document.querySelector('.seelive-btn');
  const seeSource = document.querySelector('.source-btn');

  seeLive.addEventListener('click', () => {
    seeLive.setAttribute('href', pData.liveUrl);
  });

  seeSource.addEventListener('click', () => {
    seeSource.setAttribute('href', pData.sourceUrl);
  });

  // pop-up close button
  popupClose.style.cursor = 'pointer';
  popupClose.addEventListener('click', () => {
    popupWindow.classList.remove('show-popup');
    body.classList.remove('stop-scroll');
  });

  // reset image, subtitles and technology tags to empty
  popupTechnologies.innerHTML = '';
  popupCardImage.innerHTML = '';
  popupSubtitles.innerHTML = '';

  // set pop-up project title
  popupTitle.innerHTML = pData.title;

  // set pop-up project description text
  popupDescription.innerHTML = pData.description;

  // Set popup subtitles
  pData.subtitle.forEach((tag, subIndex) => {
    if (subIndex === pData.subtitle.length - 1) {
      const pSubtitleItem = document.createElement('li');
      pSubtitleItem.innerHTML = tag;

      popupSubtitles.appendChild(pSubtitleItem);
    } else {
      const pSubtitleItem = document.createElement('li');
      pSubtitleItem.innerHTML = tag;

      const pSubtitleItem2 = document.createElement('li');
      const dot = document.createElement('img');
      dot.src = dotImg;
      pSubtitleItem2.appendChild(dot);

      popupSubtitles.appendChild(pSubtitleItem);
      popupSubtitles.appendChild(pSubtitleItem2);
    }
  });

  // Set popup technology tags
  pData.technologies.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.innerHTML = tag;

    popupTechnologies.appendChild(tagItem);
  });

  // set pop-up card image
  const cardImage = document.createElement('img');
  cardImage.src = pData.imageUrl;
  popupCardImage.appendChild(cardImage);

  // show the popup
  body.classList.add('stop-scroll');
  popupWindow.classList.add('show-popup');
}

ProjectsData.forEach((project, index) => {
  const projectCardImage = document.createElement('img');
  projectCardImage.src = project.imageUrl;

  cardImg[index].appendChild(projectCardImage);
  titles[index].innerHTML = project.title;
  description[index].innerHTML = project.description;

  project.subtitle.forEach((subtitle, sindex) => {
    if (sindex === project.subtitle.length - 1) {
      const subtitleItem = document.createElement('li');
      subtitleItem.innerHTML = subtitle;
      subtitles[index].appendChild(subtitleItem);
    } else {
      const subtitleItem = document.createElement('li');
      subtitleItem.innerHTML = subtitle;
      const subtitleItem2 = document.createElement('li');
      const dot = document.createElement('img');
      dot.src = dotImg;

      subtitleItem2.appendChild(dot);

      subtitles[index].appendChild(subtitleItem);
      subtitles[index].appendChild(subtitleItem2);
    }
  });

  project.technologies.forEach((tag) => {
    const techItem = document.createElement('li');
    techItem.innerHTML = tag;
    technologies[index].appendChild(techItem);
  });

  projectDetailsBtns[index].addEventListener('click', () => {
    showProjectDetailsPopUp(project);
  });
});
