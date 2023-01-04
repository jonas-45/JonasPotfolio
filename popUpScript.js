const ProjectsData = [
  {
    title:"Tonic",
    subtitle: ["Canopy","Back End Dev","2015"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imageUrl: "./images/card1.png",
    technologies: ["html","css","javascript"],
    liveUrl1: "https://jonas-45.github.io/JonasPotfolio/",
    sourceUrl: "https://github.com/jonas-45"
  },
  {
    title:"Multi-Post Stories",
    subtitle: ["Canopy","Back End Dev","2015"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imageUrl: "./images/card2.png",
    technologies: ["html","css","javascript"],
    liveUrl1: "https://jonas-45.github.io/JonasPotfolio/",
    sourceUrl: "https://github.com/jonas-45"
  },
  {
    title:"Tonic",
    subtitle: ["Canopy","Back End Dev","2015"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    imageUrl: "./images/card3.png",
    technologies: ["html","css","javascript"],
    liveUrl1: "https://jonas-45.github.io/JonasPotfolio/",
    sourceUrl: "https://github.com/jonas-45"
  }
,
{
  title:"Multi-Post Stories",
  subtitle: ["Canopy","Back End Dev","2015"],
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  imageUrl: "./images/card3.png",
  technologies: ["html","css","javascript"],
  liveUrl1: "https://jonas-45.github.io/JonasPotfolio/",
  sourceUrl: "https://github.com/jonas-45"
}
];

let card_img = document.querySelectorAll(".card-top");
let titles = document.querySelectorAll(".project-title");
let subtitles = document.querySelectorAll(".card-categories ul");
let description = document.querySelectorAll(".project-description");
let technologies = document.querySelectorAll(".web-technologies ul");
let project_details_btn = document.querySelectorAll(".project-btn");

let dot_img = "./images/counter.png";

ProjectsData.forEach((project,index) => {
  let project_card_image = document.createElement("img");
  project_card_image.src = project.imageUrl;
  
  

  card_img[index].appendChild(project_card_image);
  titles[index].innerHTML = project["title"];
  description[index].innerHTML = project["description"];

  project["subtitle"].forEach((subtitle,sindex) => {
    if(sindex === project["subtitle"].length - 1){
      let subtitle_item = document.createElement("li");
      subtitle_item.innerHTML = subtitle;
      subtitles[index].appendChild(subtitle_item);
    }else{
      let subtitle_item = document.createElement("li");
      subtitle_item.innerHTML = subtitle;
      let subtitle_item2 = document.createElement("li");
      let dot = document.createElement("img");
      dot.src = dot_img;

      subtitle_item2.appendChild(dot);

      subtitles[index].appendChild(subtitle_item);
      subtitles[index].appendChild(subtitle_item2);
    }
  });

  project["technologies"].forEach((tag) => {
    let tech_item = document.createElement("li");
    tech_item.innerHTML = tag;
    technologies[index].appendChild(tech_item);
  });

  project_details_btn[index].addEventListener("click", () => {
    showProjectDetailsPopUp(project);
  })

});
