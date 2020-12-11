import firebase from 'firebase/app'

import 'firebase/auth'

import 'firebase/database'

const config = {
    apiKey: "AIzaSyAHum-MwRngFqOy96ja5cpZZrpx3KrD7UM",
    authDomain: "chat-web-app-4a1c1.firebaseapp.com",
    databaseURL: "https://chat-web-app-4a1c1-default-rtdb.firebaseio.com/",
    projectId: "chat-web-app-4a1c1",
    storageBucket: "chat-web-app-4a1c1.appspot.com",
    messagingSenderId: "134685581320",
    appId: "1:134685581320:web:a1f66dd7459251ec1631bd"
  };

  const app =firebase.initializeApp(config)
  export const auth=app.auth()

  export const database=app.database()