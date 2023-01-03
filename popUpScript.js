const title1 = 'Tonic';
const subtitles1 = ['Canopy', 'Back End Dev', '2015'];
const description1 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl1 = './images/card1.png';
const technologies1 = ['html', 'css', 'javascript'];
const projectData1 = {
  title: title1,
  description: description1,
  imageUrl: imgUrl1,
  technologies: technologies1,
  subtitles: subtitles1,
};

const title2 = 'Multi-Post Stories';
const subtitles2 = ['Canopy', 'Back End Dev', '2015'];
const description2 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl2 = './images/card2.png';
const technologies2 = ['html', 'css', 'javascript'];
const projectData2 = {
  title: title2,
  description: description2,
  imageUrl: imgUrl2,
  technologies: technologies2,
  subtitles: subtitles2,
};

const title3 = 'Tonic';
const subtitles3 = ['Canopy', 'Back End Dev', '2015'];
const description3 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl3 = './images/card3.png';
const technologies3 = ['html', 'css', 'javascript'];
const projectData3 = {
  title: title3,
  description: description3,
  imageUrl: imgUrl3,
  technologies: technologies3,
  subtitles: subtitles3,
};

const title4 = 'Multi-Post Stories';
const subtitles4 = ['Canopy', 'Back End Dev', '2015'];
const description4 = 'A daily selection of privately personalized reads; no accounts or sign-ups required.';
const imgUrl4 = './images/card4.png';
const technologies4 = ['html', 'ruby', 'css', 'javascript'];
const projectData4 = {
  title: title4,
  description: description4,
  imageUrl: imgUrl4,
  technologies: technologies4,
  subtitles: subtitles4,
};

const ProjectsData = [projectData1, projectData2, projectData3, projectData4];

const cardImg = document.querySelectorAll('.card-top');
const titles = document.querySelectorAll('.project-title');
const subtitles = document.querySelectorAll('.card-categories ul');
const description = document.querySelectorAll('.project-description');
const technologies = document.querySelectorAll('.web-technologies ul');
const projectDetailsBtn = document.querySelectorAll('.project-btn');

const dotImg = './images/counter.png';

function showProjectDetailsPopUp(projectData) {
  // const name = 'name';
  // const description = 'description';
  // const tags = 'technologies';

  const body = document.querySelector('body');
  const popupWindow = document.querySelector('.mobile-popup');
  const popupCardImage = document.querySelector('.card-image');
  const popupClose = document.querySelector('.popup-close');

  const popupTitle = document.querySelector('.popup-title');
  const popupSubtitles = document.querySelector('.popup-subtitles ul');
  const popupDescription = document.querySelector('.popup-description');
  const popupTechnologies = document.querySelector('.popup-technologies');

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
  popupTitle.innerHTML = projectData.title;

  // set pop-up project description text
  popupDescription.innerHTML = projectData.description;

  // Set popup subtitles
  projectData.subtitles.forEach((tag, subIndex) => {
    if (subIndex === projectData.subtitles.length - 1) {
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
  projectData.technologies.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.innerHTML = tag;

    popupTechnologies.appendChild(tagItem);
  });

  // set pop-up card image
  const cardImage = document.createElement('img');
  cardImage.src = projectData.imageUrl;
  popupCardImage.appendChild(cardImage);

  // show the popup
  body.classList.add('stop-scroll');
  popupWindow.classList.add('show-popup');
}

ProjectsData.forEach((project, index) => {
  const projectCardImage = document.createElement('img');
  projectCardImage.src = project.imageUrl;
  projectCardImage.classList.add('imgfill');
  // projectCardImage.style.height = "448px";
  // cardImg[index].style.backgroundImage = "url(" + project.imageUrl + ")";

  cardImg[index].appendChild(projectCardImage);
  titles[index].innerHTML = project.title;
  description[index].innerHTML = project.description;

  project.subtitles.forEach((subtitle, sindex) => {
    if (sindex === project.subtitles.length - 1) {
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

  projectDetailsBtn[index].addEventListener('click', () => {
    showProjectDetailsPopUp(project);
  });
});
