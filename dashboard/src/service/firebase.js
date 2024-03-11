import { initializeApp, auth } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import API_KEY from "../apiKey";

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "ece1528-project-1f777.firebaseapp.com",
    databaseURL: "https://ece1528-project-1f777-default-rtdb.firebaseio.com",
    projectId: "ece1528-project-1f777",
    storageBucket: "ece1528-project-1f777.appspot.com",
    messagingSenderId: "309501792646",
    appId: "1:309501792646:web:b8e04ab776e47ec6531c07",
    measurementId: "G-S3HF487NV0"
}

export const firebaseInit = () => {
    const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);
    const docRef = ref(db, 'document/');
    onValue(docRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
    return app;
};


export default firebaseInit;