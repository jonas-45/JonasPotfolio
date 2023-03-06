const ProjectsData = [
  {
    title: 'Math Magicians',
    subtitle: ['Maths', 'Front End Dev', '2023'],
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    imageUrl: './images/card1.png',
    technologies: ['html', 'css', 'React'],
    liveUrl: 'https://math-magician-h9d3.onrender.com/',
    sourceUrl: 'https://github.com/jonas-45/math-magicians',
  },
  {
    title: 'Leaderboard',
    subtitle: ['Leaderboard', 'Back End Dev', '2023'],
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved using the Leaderboard API service.',
    imageUrl: './images/card2.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/Leaderboard/dist/',
    sourceUrl: 'https://github.com/jonas-45/Leaderboard',
  },
  {
    title: 'To Do List',
    subtitle: ['Todolist', 'Back End Dev', '2022'],
    description: 'A web app to help you keep track of list of activities you want to accomplish within a certain period. Users can add and remove a task. Tasks can also be marked as completed with the ability to delete all completed tasks at once.',
    imageUrl: './images/card3.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/To-do-list/dist/',
    sourceUrl: 'https://github.com/jonas-45/To-do-list',
  },
  {
    title: 'Awesome Books',
    subtitle: ['Awesomebooks', 'Back End Dev', '2022'],
    description: 'Awesome Books is a web app for creating a local E-library. Users can add and remove books from the library.',
    imageUrl: './images/card4.png',
    technologies: ['html', 'css', 'javascript'],
    liveUrl: 'https://jonas-45.github.io/Awesome-Books-ES6/',
    sourceUrl: 'https://github.com/jonas-45/Awesome-Books-ES6',
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
