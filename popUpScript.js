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

function showProjectDetailsPopUp(project_Data){
  let body = document.querySelector("body");
  let popup_window = document.querySelector(".mobile-popup");
  let popup_card_image = document.querySelector(".card-image");
  let popup_close = document.querySelector(".popup-close");

  let popup_title = document.querySelector(".popup-title")
  let popup_subtitles = document.querySelector(".popup-subtitles ul");
  let popup_description = document.querySelector(".popup-description");
  let popup_technologies = document.querySelector(".popup-technologies");
  const seeLive = document.querySelector(".seelive-btn")
  const seeSource = document.querySelector(".source-btn")

  seeLive.addEventListener("click",function(){
    alert("button clicked " + project_Data.title)
  });

  seeSource.addEventListener("click",function(){
    alert("button clicked " + project_Data["description"])
  });

  //pop-up close button
  popup_close.style.cursor = "pointer";
  popup_close.addEventListener("click", function(){
  popup_window.classList.remove("show-popup");
  body.classList.remove("stop-scroll");
  });

  //reset image, subtitles and technology tags to empty
  popup_technologies.innerHTML = "";
  popup_card_image.innerHTML = "";
  popup_subtitles.innerHTML = "";

  //set pop-up project title
  popup_title.innerHTML = project_Data["title"];

  //set pop-up project description text
  popup_description.innerHTML = project_Data["description"];

  //Set popup subtitles
  project_Data["subtitle"].forEach((tag,sub_index) => {
    if(sub_index === project_Data["subtitle"].length - 1){
      let p_subtitle_item = document.createElement("li");
      p_subtitle_item.innerHTML = tag;
  
      popup_subtitles.appendChild(p_subtitle_item);
    }else{
      let p_subtitle_item = document.createElement("li");
      p_subtitle_item.innerHTML = tag;

      let p_subtitle_item2 = document.createElement("li");
      let dot = document.createElement("img");
      dot.src = dot_img;
      p_subtitle_item2.appendChild(dot);
  
      popup_subtitles.appendChild(p_subtitle_item);
      popup_subtitles.appendChild(p_subtitle_item2);
    }
    
  });

  //Set popup technology tags
  project_Data["technologies"].forEach((tag) => {
    let tag_item = document.createElement("li");
    tag_item.innerHTML = tag;

    popup_technologies.appendChild(tag_item);
  });

  //set pop-up card image
  let card_image = document.createElement("img");
  card_image.src = project_Data["imageUrl"];
  popup_card_image.appendChild(card_image);
  
  //show the popup
  body.classList.add("stop-scroll");
  popup_window.classList.add("show-popup");
}
