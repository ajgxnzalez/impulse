// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYvK15FQQAQJD2H5DxQqbdK1uYGFFzCL8",
    authDomain: "impulse-users.firebaseapp.com",
    databaseURL: "https://impulse-users.firebaseio.com",
    projectId: "impulse-users",
    storageBucket: "impulse-users.appspot.com",
    messagingSenderId: "1053761651503",
    appId: "1:1053761651503:web:1736013e5121c5ce4197da"
};

// Initialize Firebase Auth & DB
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

// Auth Page 
const authSwitchLinks = document.querySelectorAll('.auth .switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');

// toggle auth modals
authSwitchLinks.forEach(link => {
    link.addEventListener('click', () => {
        authModals.forEach(modal => modal.classList.toggle('active'));
    });
});

// Users 
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');
var userID;
var devices = [];

// Register Form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = registerForm.regemail.value;
    const password = registerForm.regpassword.value;

    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        console.log('registered', user);
        userID = auth.currentUser.uid;
        var data = {
            userID: userID,
            email: email,
            devices: null
        }
        db.ref("users").push(data)

        registerForm.reset();
    })
        .catch((error) => {
            registerForm.querySelector('.error').textContent = error.message;
        })
})

// Sign Out
signOut.addEventListener('click', () => {
    auth.signOut()
        .then(() => console.log('signed out'));
    location.reload();
});

// Show Devices (auth listener)
const theDevices = document.querySelectorAll('.devicePage');
user = auth.currentUser;
auth.onAuthStateChanged((user) => {
    if (user) {
        authWrapper.classList.remove('open');
        authModals.forEach(modal => modal.classList.remove('active'));
        theDevices.forEach(device => device.classList.add('active'));


    } else {
        theDevices.forEach(device => device.classList.remove('active'));
        authWrapper.classList.add('open');
        authModals[0].classList.add('active');
    }
});


// Device List

class Device {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class devicePage {
    constructor() {
        this.devices = [];
    }

    addDevice(deviceInput) {
        const deviceId = this.devices.length + 1;
        const newDevice = new Device(deviceId, deviceInput);
        this.devices.push(newDevice);
        var data = {
            deviceId: deviceId,
            deviceName: deviceInput
        }
        db.ref('users/' + userID + '/devices').push(data);
        console.log(this.devices);

        // add to html
        const row = document.createElement('tr');
        row.setAttribute('data-device-id', newDevice.id);
        row.innerHTML = `
    <td>${newDevice.name}</td>
    <td><button data-action="delete" data-device-id="${newDevice.id}">Delete</button></td>
    `;
        document.getElementById('deviceList').appendChild(row);
    }

    deleteDevice(deviceId) {
        console.log(deviceId);
        const device = this.devices.find((device) => device.id == deviceId);
        if (!device) return;

        firebase.database().ref("users/" + userID + "/devices").child(deviceId).remove();

        const existingRow = document.querySelector(`tr[data-device-id="${device.id}"]`);
        if (!existingRow) return;
        existingRow.remove();
    }
}

const deviceList = new devicePage();

document.getElementById("addBtn").addEventListener('click', (e) => {
    const deviceInput = document.getElementById('deviceName').value;
    deviceList.addDevice(deviceInput);
})

document.getElementById("deviceList").addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action");
    const deviceId = e.target.getAttribute("data-device-id");
  
    if (action == "delete") {
      deviceList.deleteDevice(deviceId);
    }
  });

  // Login Form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    auth.signInWithEmailAndPassword(email, password).then((user) => {
        console.log('logged in', user);
        userID = user.user.uid;
        firebase
            .database()
            .ref("users/" + userID + "/devices")
            .once("value", (snapshot) => {
                const allDevices = snapshot.val();
                Object.keys(allDevices).forEach((deviceId) => {
                    const deviceData = allDevices[deviceId];
                    const device = new Device(deviceId, deviceData.deviceName);
                    console.log(device);
                    deviceList.devices.push(device);

                    const deviceListElement = document.getElementById("deviceList");
                    const row = document.createElement("tr");
                    row.setAttribute("data-device-id", device.id);
                    row.innerHTML = `
            <td>${device.name}</td>
            <td>
              <button data-action="delete" data-device-id="${device.id}" class="btn btn-danger">Delete</button>
            </td>
            `;
                    deviceListElement.appendChild(row);
                });
            });

        loginForm.reset();
    })
        .catch((error) => {
            loginForm.querySelector('.error').textContent = error.message;
        })
})