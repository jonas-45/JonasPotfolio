const visitorName = document.getElementById("username");
const visitorEmail = document.getElementById("email");
const visitorMsg = document.getElementById("message");
let userData = {};

setFormInputValuesFromLocalStorage();

// visitorName.addEventListener("change",addValuesToLocalStorage);
// visitorEmail.addEventListener("change",addValuesToLocalStorage);
// visitorMsg.addEventListener("change",addValuesToLocalStorage);

// visitorName.addEventListener("onchange",() => {
//   userData.name = visitorName.value;
//   addValuesToLocalStorage(userData);
// });

// visitorEmail.addEventListener("onchange",() => {
//   userData.email = visitorEmail.value;
//   addValuesToLocalStorage(userData);
// });

// visitorMsg.addEventListener("onchange",() => {
//   userData.msg = visitorMsg.value;
//   addValuesToLocalStorage(userData);
// });

function storageAvailable(type) {
  let storage;
  try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

function setFormInputValuesFromLocalStorage(){
  if(localStorage.getItem("userInfo")){
    userData = localStorage.getItem("userInfo");

    visitorName.value = userData.name;
    visitorEmail.value = userData.email;
    visitorMsg.value = userData.msg;
  }
}

function addValuesToLocalStorage(inputType){
  if(storageAvailable("localStorage")){
    if(inputType === "name"){
      userData.name = visitorName.value;
    }else if(inputType == "email"){
      userData.email = visitorEmail.value;
    }else{
      userData.msg = visitorMsg.value;
    }

    localStorage.setItem("userInfo",userData);
  }
}