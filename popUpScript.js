
let title1 = "Tonic";
let subtitles1 = ["Canopy","Back End Dev","2015"];
let description1 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let img_url1 = "./images/card1.png";
let technologies1 = ["html","css","javascript"];
let projectData1 = {title:title1, description:description1, image_url:img_url1, technologies:technologies1, subtitles:subtitles1};
//let desktop_project1 = {name:d_name1, description:d_description1, image_url:d_img_url1, technologies:d_technologies1, subtitles:d_subtitles1};

let title2 = "Multi-Post Stories";
let subtitles2 = ["Canopy","Back End Dev","2015"];
let description2 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let img_url2 = "./images/card2.png";
let technologies2 = ["html","css","javascript"];
let projectData2 = {title:title2, description:description2, image_url:img_url2, technologies:technologies2, subtitles:subtitles2};
//let desktop_project2 = {name:d_name2, description:d_description2, image_url:d_img_url2, technologies:d_technologies2, subtitles:d_subtitles2};

let title3 = "Tonic";
let subtitles3 = ["Canopy","Back End Dev","2015"];
let description3 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let img_url3 = "./images/card3.png";
let technologies3 = ["html","css","javascript"];
let projectData3 = {title:title3, description:description3, image_url:img_url3, technologies:technologies3, subtitles:subtitles3};
//let desktop_project3 = {name:d_name3, description:d_description3, image_url:d_img_url3, technologies:d_technologies3, subtitles:d_subtitles3};

let title4 = "Multi-Post Stories";
let subtitles4 = ["Canopy","Back End Dev","2015"];
let description4 = "A daily selection of privately personalized reads; no accounts or sign-ups required.";
let img_url4 = "./images/card4.png";
let technologies4 = ["html","ruby","css","javascript"];
let projectData4 = {title:title4, description:description4, image_url:img_url4, technologies:technologies4, subtitles:subtitles4};
//let desktop_project4 = {name:d_name4, description:d_description4, image_url:d_img_url4, technologies:d_technologies4, subtitles:d_subtitles4};

let ProjectsData = [projectData1,projectData2,projectData3,projectData4];
//let desktopProjects = [desktop_project1,desktop_project2,desktop_project3,desktop_project4];

let card_img = document.querySelectorAll(".card-top");
let titles = document.querySelectorAll(".project-title");
let subtitles = document.querySelectorAll(".card-categories ul");
let description = document.querySelectorAll(".project-description");
let technologies = document.querySelectorAll(".web-technologies ul");
let project_details_btn = document.querySelectorAll(".project-btn");

let dot_img = "./images/counter.png";

ProjectsData.forEach((project,index) => {
  let project_card_image = document.createElement("img");
  project_card_image.src = project.image_url;

  card_img[index].appendChild(project_card_image);
  titles[index].innerHTML = project["title"];
  description[index].innerHTML = project["description"];

  project["subtitles"].forEach((subtitle,sindex) => {
    if(sindex === project["subtitles"].length - 1){
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

  project["technologies"].forEach((tag,tindex) => {
    let tech_item = document.createElement("li");
    tech_item.innerHTML = tag;
    technologies[index].appendChild(tech_item);
  });

  project_details_btn[index].addEventListener("click", () => {
    showProjectDetailsPopUp(project);
  })

});

// let technologies1 = document.querySelectorAll(".technology1");
// let technologies2 = document.querySelectorAll(".technology2");
// let technologies3 = document.querySelectorAll(".technology3");

// let m_subtitle1 = document.querySelectorAll(".mobile-subtitle");
// let m_subtitle2 = document.querySelectorAll(".mobile-subtitle2");
// let m_subtitle3 = document.querySelectorAll(".mobile-subtitle3");

// let m_card1_image = document.getElementById("card1");
// let m_card2_image = document.getElementById("card2");
// let m_card3_image = document.getElementById("card3");
// let m_card4_image = document.getElementById("card4");

// //Get references to project titles tags
// let mobile_project_title1 = document.querySelector(".project-title1");
// let mobile_project_title2 = document.querySelector(".project-title2");
// let mobile_project_title3 = document.querySelector(".project-title3");
// let mobile_project_title4 = document.querySelector(".project-title4");

// //Get references to project description tags
// let mobile_project_description1 = document.querySelector(".project-description1");
// let mobile_project_description2 = document.querySelector(".project-description2");
// let mobile_project_description3 = document.querySelector(".project-description3");
// let mobile_project_description4 = document.querySelector(".project-description4");

// let window_width = window.matchMedia("(min-width: 768px)");

// window_width.addEventListener("change", (e) => {
//   if(e.matches){
//     m_card1_image.style.backgroundImage = "url(" + desktopProjects[0].image_url + ")";
//     m_card2_image.style.backgroundImage = "url(" + desktopProjects[1].image_url + ")";
//     m_card3_image.style.backgroundImage = "url(" + desktopProjects[2].image_url + ")";
//     m_card4_image.style.backgroundImage = "url(" + desktopProjects[3].image_url + ")";

//     //Update project title values from mobileProjects array
//     mobile_project_title1.innerHTML = desktopProjects[0].name;
//     mobile_project_title2.innerHTML = desktopProjects[1].name;
//     mobile_project_title3.innerHTML = desktopProjects[2].name;
//     mobile_project_title4.innerHTML = desktopProjects[3].name;

//     //Update project description values from mobileProjects array
//     mobile_project_description1.innerHTML = desktopProjects[0].description;
//     mobile_project_description2.innerHTML = desktopProjects[1].description;
//     mobile_project_description3.innerHTML = desktopProjects[2].description;
//     mobile_project_description4.innerHTML = desktopProjects[3].description;

//     setTechnologies(desktopProjects);
//   }else{
//     m_card1_image.style.backgroundImage = "url(" + mobileProjects[0].image_url + ")";
//     m_card2_image.style.backgroundImage = "url(" + mobileProjects[1].image_url + ")";
//     m_card3_image.style.backgroundImage = "url(" + mobileProjects[2].image_url + ")";
//     m_card4_image.style.backgroundImage = "url(" + mobileProjects[3].image_url + ")";

//     //Update project title values from mobileProjects array
//     mobile_project_title1.innerHTML = mobileProjects[0].name;
//     mobile_project_title2.innerHTML = mobileProjects[1].name;
//     mobile_project_title3.innerHTML = mobileProjects[2].name;
//     mobile_project_title4.innerHTML = mobileProjects[3].name;

//     //Update project description values from mobileProjects array
//     mobile_project_description1.innerHTML = mobileProjects[0].description;
//     mobile_project_description2.innerHTML = mobileProjects[1].description;
//     mobile_project_description3.innerHTML = mobileProjects[2].description;
//     mobile_project_description4.innerHTML = mobileProjects[3].description;

//     setTechnologies(mobileProjects);
//   }
// });







// if(window.innerWidth >= 768){
//   m_card1_image.style.backgroundImage = "url(" + desktopProjects[0].image_url + ")";
//   m_card2_image.style.backgroundImage = "url(" + desktopProjects[1].image_url + ")";
//   m_card3_image.style.backgroundImage = "url(" + desktopProjects[2].image_url + ")";
//   m_card4_image.style.backgroundImage = "url(" + desktopProjects[3].image_url + ")";
// }else{
//   m_card1_image.style.backgroundImage = "url(" + mobileProjects[0].image_url + ")";
//   m_card2_image.style.backgroundImage = "url(" + mobileProjects[1].image_url + ")";
//   m_card3_image.style.backgroundImage = "url(" + mobileProjects[2].image_url + ")";
//   m_card4_image.style.backgroundImage = "url(" + mobileProjects[3].image_url + ")";
// }

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

// technologies1.forEach(element => {
//   element.innerHTML = m_technologies[0];
// });
// technologies2.forEach(element => {
//   element.innerHTML = m_technologies[1];
// });
// technologies3.forEach(element => {
//   element.innerHTML = m_technologies[2];
// });

// if(window.innerWidth >= 768){
//   setTechnologies(desktopProjects);
// }else{
//   setTechnologies(mobileProjects);
// }




// m_subtitle1.forEach(element => {
//   element.innerHTML = project_subtitles[0];
// });
// m_subtitle2.forEach(element => {
//   element.innerHTML = project_subtitles[1];
// });
// m_subtitle3.forEach(element => {
//   element.innerHTML = project_subtitles[2];
// });

// function setTechnologies(ProjectsDataArray){
//   let technologyList = document.querySelectorAll(".web-technologies ul");
//   let subtitleList = document.querySelectorAll(".web-technologies ul");
//   for(let i = 0; i < ProjectsDataArray.length; i++){
//     let techArray = ProjectsDataArray[i]["technologies"];
//     technologyList[i].innerHTML = "";

//     techArray.forEach(techItem => {
//       console.log(techItem);
//       let technology_list_item = document.createElement("li");
//       technology_list_item.innerHTML = techItem;
//       technologyList[i].appendChild(technology_list_item);
//     });
//   }
// }




// let project_button1 = document.querySelector(".project-btn1");
// let project_button2 = document.querySelector(".project-btn2");
// let project_button3 = document.querySelector(".project-btn3");
// let project_button4 = document.querySelector(".project-btn4");

// project_button1.addEventListener("click", function(event){
//   if(window.innerWidth >= 768){
//     projectDetailsPopUp(desktopProjects,0);
//   }else{
//     projectDetailsPopUp(mobileProjects,0);
//   }
  
// });

// project_button2.addEventListener("click", function(event){
//   if(window.innerWidth >= 768){
//     projectDetailsPopUp(desktopProjects,1);
//   }else{
//     projectDetailsPopUp(mobileProjects,1);
//   }
// });

// project_button3.addEventListener("click", function(event){
//   if(window.innerWidth >= 768){
//     projectDetailsPopUp(desktopProjects,2);
//   }else{
//     projectDetailsPopUp(mobileProjects,2);
//   }
// });

// project_button4.addEventListener("click", function(event){
//   if(window.innerWidth >= 768){
//     projectDetailsPopUp(desktopProjects,3);
//   }else{
//     projectDetailsPopUp(mobileProjects,3);
//   }
// });

function showProjectDetailsPopUp(project_Data){
  let name = "name";
  let description = "description";
  let tags = "technologies";

  //let body = document.querySelector("body");
  let popup_window = document.querySelector(".mobile-popup");
  let popup_card_image = document.querySelector(".card-image");
  let popup_close = document.querySelector(".popup-close");

  let popup_title = document.querySelector(".popup-title")
  let popup_subtitles = document.querySelector(".popup-subtitles ul");
  let popup_description = document.querySelector(".popup-description");
  let popup_technologies = document.querySelector(".popup-technologies");


  //pop-up close button
  popup_close.style.cursor = "pointer";
  popup_close.addEventListener("click", function(event){
  popup_window.classList.remove("show-popup");
    //body.classList.remove("stop-scroll");
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
  project_Data["subtitles"].forEach((tag,sub_index) => {
    if(sub_index === project_Data["subtitles"].length - 1){
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
  card_image.src = project_Data["image_url"];
  popup_card_image.appendChild(card_image);
  
  //show the popup
  popup_window.classList.add("show-popup");
}