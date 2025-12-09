importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
let config = {
        apiKey: "AIzaSyA83IbktiH_FmTQUJOC32u4U1h7SCX7cs4",
        authDomain: "fooddel-ba8fc.firebaseapp.com",
        projectId: "fooddel-ba8fc",
        storageBucket: "fooddel-ba8fc.firebasestorage.app",
        messagingSenderId: "68584208288",
        appId: "1:68584208288:web:3b0fe06be65a9c0c7bd6c5",
        measurementId: "G-RQS9VYLFH4",
 };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/default/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
