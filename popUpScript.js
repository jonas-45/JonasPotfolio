let m_technologies = ["html","css","javascript"];
let project_subtitles = ["Canopy","Back End Dev","2015"];

let m_name1 = "Tonic";
let m_description1 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url1 = "./images/card1.png";
//let m_technologies1 = ["html","css","javascript"];
let mobile_project1 = {name:m_name1, description:m_description1, image_url:m_img_url1, technologies:m_technologies}

let m_name2 = "Multi-Post Stories";
let m_description2 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url2 = "./images/card2.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project2 = {name:m_name2, description:m_description2, image_url:m_img_url2, technologies:m_technologies}

let m_name3 = "Tonic";
let m_description3 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url3 = "./images/card3.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project3 = {name:m_name3, description:m_description3, image_url:m_img_url3, technologies:m_technologies}

let m_name4 = "Multi-Post Stories";
let m_description4 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let m_img_url4 = "./images/card4.png";
//let m_technologies2 = ["html","css","javascript"];
let mobile_project4 = {name:m_name4, description:m_description4, image_url:m_img_url4, technologies:m_technologies}

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

let project_image1 = document.createElement("img");
let project_image2 = document.createElement("img");
let project_image3 = document.createElement("img");
let project_image4 = document.createElement("img");

project_image1.src = mobileProjects[0].image_url;
project_image2.src = mobileProjects[1].image_url;
project_image3.src = mobileProjects[2].image_url;
project_image4.src = mobileProjects[3].image_url;

m_card1_image.appendChild(project_image1);
m_card2_image.appendChild(project_image2);
m_card3_image.appendChild(project_image3);
m_card4_image.appendChild(project_image4);

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