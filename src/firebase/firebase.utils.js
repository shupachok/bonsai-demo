import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    FacebookAuthProvider
} from "firebase/auth";
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    writeBatch,
    collection,
    query,
    getDocs,
} from "firebase/firestore"

const firebaseConfig = {
// fire base api key
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
});

const facebookProvider = new FacebookAuthProvider()
// facebookProvider.setCustomParameters({
//     prompt: 'select_account'
// });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (user, additionalInformation) => {
    const docRef = doc(db, 'users', user.uid);
    const userSnapshort = await getDoc(docRef);
    if (!userSnapshort.exists()) {
        const { displayName, email } = user;
        const createAt = new Date()
        const dataDoc = {
            displayName,
            email,
            createAt,
            ...additionalInformation
        }
        try {
            await setDoc(docRef, dataDoc);
        } catch (e) {
            console.log(e);
        }
    }
}

export const createAuthWithEmailandPassword = async (email, password) => {
    if (!email || !password)
        return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const getAuthWithEmailandPassword = async (email, password) => await signInWithEmailAndPassword(auth, email, password)

export const signOutUser = async () => await signOut(auth);

export const onAuthChangeListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

export const addCollectionAndDocuments = async (colloctionName, documentDetails) => {
    const batch = writeBatch(db);
    const colloectionRef = collection(db,colloctionName);
    documentDetails.forEach(docDetail => {
        const docRef = doc(colloectionRef,docDetail.title.toLowerCase());
        batch.set(docRef, docDetail);
    });
    await batch.commit();
    console.log('done');
}

export const getCollection = async (colloctionName) => {
    const colloectionRef = collection(db,colloctionName);
    const queryGetDoc = query(colloectionRef);
    const querySnapshot = await getDocs(queryGetDoc);
    //convert array to hash table
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
    return categoryMap;
}