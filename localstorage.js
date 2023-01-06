function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
          // Firefox
          || e.code === 1014
          // test name field too, because code might not be present
          // everything except Firefox
          || e.name === 'QuotaExceededError'
          // Firefox
          || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
          // acknowledge QuotaExceededError only if there's something already stored
          && (storage && storage.length !== 0);
  }
}

// Function to retrieve contact form values from local storage
function setFormInputValuesFromLocalStorage() {
  if (localStorage.getItem('userInfo')) {
    const udata = JSON.parse(localStorage.getItem('userInfo'));
    document.getElementById('username').value = udata.name;
    document.getElementById('email').value = udata.email;
    document.getElementById('message').value = udata.msg;
  }
}

function addValuesToLocalStorage(inputType) {
  const info = document.getElementById(inputType).value;

  if (storageAvailable('localStorage')) {
    let data = {};
    if (localStorage.getItem('userInfo')) {
      data = JSON.parse(localStorage.getItem('userInfo'));
    }

    if (inputType === 'username') {
      data.name = info;
    } else if (inputType === 'email') {
      data.email = info;
    } else {
      data.msg = info;
    }

    localStorage.setItem('userInfo', JSON.stringify(data));
  }
}

setFormInputValuesFromLocalStorage();
document.getElementById('username').addEventListener('change', () => {
  addValuesToLocalStorage('username');
});
document.getElementById('email').addEventListener('change', () => {
  addValuesToLocalStorage('email');
});
document.getElementById('message').addEventListener('change', () => {
  addValuesToLocalStorage('message');
});
