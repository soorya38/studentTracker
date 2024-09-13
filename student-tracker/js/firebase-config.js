// Import the Firebase scripts
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';
import { getMessaging, getToken, onMessage } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request Permission for Notifications
function requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            getToken(messaging, { vapidKey: 'YOUR_PUBLIC_VAPID_KEY' }).then((currentToken) => {
                if (currentToken) {
                    console.log('FCM Token:', currentToken);
                    // Send the token to your server for later use
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            });
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}

requestPermission();

// Listen for incoming messages
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Display notification content here
});
