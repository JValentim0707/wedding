import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';

// import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyAHjKfKpdu3r_BwH4zqIqWISjlKO08t1rw",
    authDomain: "wedding-17518.firebaseapp.com",
    databaseURL: "https://wedding-17518-default-rtdb.firebaseio.com",
    projectId: "wedding-17518",
    storageBucket: "wedding-17518.appspot.com",
    messagingSenderId: "721409157120",
    appId: "1:721409157120:web:a4f4a53ee8639db9d190e5"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export const getInveteds = async () => {
    const invitedsCollection = collection(db, 'invited');
    const invitedSnapshot = await getDocs(invitedsCollection)
    const invitedData = invitedSnapshot.docs.map(itemDoc => {
      let obj = {}
      obj = {...itemDoc.data(), databaseId: itemDoc.id}
      return obj
    })

    return invitedData
}

export const updateValues = async (databaseId, data) => {
  // const invitedsCollection = collection(db, 'invited');
  try {
    const docRef = await doc(db, "invited", databaseId)
    await setDoc(docRef, data)
    return 'succesful'
  } catch (error) {
    return error
  }

}