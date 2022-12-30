let m_technologies = ["html","css","javascript"];
let project_subtitles = ["Canopy","Back End Dev","2015"];

let m_name1 = "Tonic";
let m_description1 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url1 = "./images/card1.png";
//let m_technologies1 = ["html","css","javascript"];
let mobile_project1 = {name:m_name1, description:m_description1, image_url:m_img_url1, technologies:m_technologies, subtitles:project_subtitles}

let m_name2 = "Multi-Post Stories";
let m_description2 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url2 = "./images/card2.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project2 = {name:m_name2, description:m_description2, image_url:m_img_url2, technologies:m_technologies, subtitles:project_subtitles}

let m_name3 = "Tonic";
let m_description3 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url3 = "./images/card3.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project3 = {name:m_name3, description:m_description3, image_url:m_img_url3, technologies:m_technologies, subtitles:project_subtitles}

let m_name4 = "Multi-Post Stories";
let m_description4 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url4 = "./images/card4.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project4 = {name:m_name4, description:m_description4, image_url:m_img_url4, technologies:m_technologies, subtitles:project_subtitles}

let mobileProjects = [mobile_project1,mobile_project2,mobile_project3,mobile_project4];

let technologies1 = document.querySelectorAll(".technology1");
let technologies2 = document.querySelectorAll(".technology2");
let technologies3 = document.querySelectorAll(".technology3");

let m_subtitle1 = document.querySelectorAll(".mobile-subtitle");
let m_subtitle2 = document.querySelectorAll(".mobile-subtitle2");
let m_subtitle3 = document.querySelectorAll(".mobile-subtitle3");

let m_card1_image = document.getElementById("card1");
let m_card2_image = document.getElementById("card2");
let m_card3_image = document.getElementById("card3");
let m_card4_image = document.getElementById("card4");

m_card1_image.style.backgroundImage = "url(" + mobileProjects[0].image_url + ")";
m_card2_image.style.backgroundImage = "url(" + mobileProjects[1].image_url + ")";
m_card3_image.style.backgroundImage = "url(" + mobileProjects[2].image_url + ")";
m_card4_image.style.backgroundImage = "url(" + mobileProjects[3].image_url + ")";

// let project_image1 = document.createElement("img");
// let project_image2 = document.createElement("img");
// let project_image3 = document.createElement("img");
// let project_image4 = document.createElement("img");

// project_image1.src = mobileProjects[0].image_url;
// project_image2.src = mobileProjects[1].image_url;
// project_image3.src = mobileProjects[2].image_url;
// project_image4.src = mobileProjects[3].image_url;

// m_card1_image.appendChild(project_image1);
// m_card2_image.appendChild(project_image2);
// m_card3_image.appendChild(project_image3);
// m_card4_image.appendChild(project_image4);

technologies1.forEach(element => {
  element.innerHTML = m_technologies[0];
});
technologies2.forEach(element => {
  element.innerHTML = m_technologies[1];
});
technologies3.forEach(element => {
  element.innerHTML = m_technologies[2];
});
m_subtitle1.forEach(element => {
  element.innerHTML = project_subtitles[0];
});
m_subtitle2.forEach(element => {
  element.innerHTML = project_subtitles[1];
});
m_subtitle3.forEach(element => {
  element.innerHTML = project_subtitles[2];
});

//Get references to project titles tags
let mobile_project_title1 = document.querySelector(".m-project-title1");
let mobile_project_title2 = document.querySelector(".m-project-title2");
let mobile_project_title3 = document.querySelector(".m-project-title3");
let mobile_project_title4 = document.querySelector(".m-project-title4");

//Get references to project description tags
let mobile_project_description1 = document.querySelector(".m-project-description1");
let mobile_project_description2 = document.querySelector(".m-project-description2");
let mobile_project_description3 = document.querySelector(".m-project-description3");
let mobile_project_description4 = document.querySelector(".m-project-description4");

//Update project title values from mobileProjects array
mobile_project_title1.innerHTML = mobileProjects[0].name;
mobile_project_title2.innerHTML = mobileProjects[1].name;
mobile_project_title3.innerHTML = mobileProjects[2].name;
mobile_project_title4.innerHTML = mobileProjects[3].name;

//Update project description values from mobileProjects array
mobile_project_description1.innerHTML = mobileProjects[0].description;
mobile_project_description2.innerHTML = mobileProjects[1].description;
mobile_project_description3.innerHTML = mobileProjects[2].description;
mobile_project_description4.innerHTML = mobileProjects[3].description;

let project_button1 = document.querySelector(".project-btn1");
let project_button2 = document.querySelector(".project-btn2");
let project_button3 = document.querySelector(".project-btn3");
let project_button4 = document.querySelector(".project-btn4");

project_button1.addEventListener("click", function(event){
  mobileProjectDetailsPopUp(mobileProjects,0);
});

project_button2.addEventListener("click", function(event){
  mobileProjectDetailsPopUp(mobileProjects,1);
});

project_button3.addEventListener("click", function(event){
  mobileProjectDetailsPopUp(mobileProjects,2);
});

project_button4.addEventListener("click", function(event){
  mobileProjectDetailsPopUp(mobileProjects,3);
});

function mobileProjectDetailsPopUp(projectDataArray,projectPosition){
  let name = "name";
  let description = "description";

  let popup_window = document.querySelector(".mobile-popup");
  let popup_card_image = document.querySelector(".card-image");
  let popup_close = document.querySelector(".m-popup-close");

  popup_close.style.cursor = "pointer";
  popup_close.addEventListener("click", function(event){
    // popup_window.style.display = "none";
    popup_window.classList.remove("show-popup");
  });

  let popup_title = document.querySelector(".m-popup-title")
  let popup_subtitle1 = document.querySelector(".m-popup-subtitle1");
  let popup_subtitle2 = document.querySelector(".m-popup-subtitle2");
  let popup_subtitle3 = document.querySelector(".m-popup-subtitle3");
  let popup_description = document.querySelector(".m-popup-description");
  let popup_technologies = document.querySelector(".m-popup-technologies");

  popup_title.innerHTML = projectDataArray[projectPosition].name;
  popup_subtitle1.innerHTML = projectDataArray[projectPosition].subtitles[0];
  popup_subtitle2.innerHTML = projectDataArray[projectPosition].subtitles[1];
  popup_subtitle3.innerHTML = projectDataArray[projectPosition].subtitles[2];
  popup_description.innerHTML = projectDataArray[projectPosition].description;

  popup_technologies.innerHTML = "";

  for(let i = 0; i < projectDataArray[projectPosition].technologies.length; i++){
    let technology_list_item = document.createElement("li");
    technology_list_item.innerHTML = projectDataArray[projectPosition].technologies[i];
    popup_technologies.appendChild(technology_list_item);
  }

  popup_window.classList.add("show-popup");
  // popup_window.style.display = "flex";
  // popup_window.style.flexDirection = "column";
  // popup_window.style.justifyContent = "center";
  // popup_window.style.alignItems = "center";

  popup_card_image.style.backgroundImage = "url(" + projectDataArray[projectPosition].image_url;
}