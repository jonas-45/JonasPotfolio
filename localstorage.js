// const visitorName = document.getElementById("username");
// const visitorEmail = document.getElementById("email");
// const visitorMsg = document.getElementById("message");

//localStorage.clear();
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
    let udata = JSON.parse(localStorage.getItem("userInfo"));
    console.log("User data: " + udata);

    document.getElementById("username").value = udata.name;
    document.getElementById("email").value = udata.email;
    document.getElementById("message").value = udata.msg;
  }
}

function addValuesToLocalStorage(inputType){
  let info = document.getElementById(inputType).value;
  console.log("INPUT VALUE: " + info);
  if(storageAvailable("localStorage")){
    let data = {};
    if(localStorage.getItem("userInfo")){
      data = JSON.parse(localStorage.getItem("userInfo"));
    }
    
    console.log("Object keys: " + Object.keys(data));
      if(inputType === "username"){
        data['name'] = info;
      }else if(inputType == "email"){
        data.email = info;
      }else{
        data.msg = info;
      }
  
      console.log("Info VALUE: " + typeof(data));
      localStorage.setItem("userInfo",JSON.stringify(data));
    
  }
}