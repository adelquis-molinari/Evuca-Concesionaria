import { db } from "../firebaseConfig";
import { setDoc, doc, getDoc, updateDoc, arrayUnion, getDocs, collection, deleteDoc } from "firebase/firestore"


export const addUserDb = async (user)=> {
    try {
        const docRef = await setDoc(doc(db, 'usuarios', user.sub), {
            nickname: user.nickname,
            picture: user.picture,
            sub: user.sub,
            email: user.email ? user.email : 'No hay email disponible',
            comentarios: [],
            blocked: false
        });
        console.log("Document written with ID: ", docRef);
    } catch(e) {
        console.error("Error adding document: ", e);
    }
}


export const checkUserDb = async (user) => {
    const docRef = doc(db, "usuarios", user.sub);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        addUserDb(user)
    }
}

export const addDataRedux = async () => {
    const docRef = doc(db, "vehiculos", '9aTxcazQcQuKnhHarxMR');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Document data:", docSnap.data(), data);
        return data
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

export const addUserComment = async (user, comment, params, puntaje)=> {
    try {
        const docRef = doc(db, 'usuarios', user.sub);
        await updateDoc(docRef, {
            comentarios: arrayUnion({
                id: params,
                texto: comment,
                nickname: user.nickname,
                picture: user.picture,
                time: Date.now(),
                puntaje: puntaje,
                user: user.sub
            })
        });
    } catch(e) {
        console.error("Error adding document: ", e);
    }
}

export const getComment = async () => {
    const docRef = await getDocs(collection(db, "usuarios"))
    let myComments = [];
    docRef.forEach(doc => {
        if(doc.data().comentarios) {
            let commentsArray = doc.data().comentarios;
            commentsArray.forEach(comment => {
                myComments.push(comment)
            })
        }
    })
    return myComments
}

export const getUsers = async () => {
    const docRef = await getDocs(collection(db, "usuarios"))
    let myUsers = [];
    docRef.forEach(doc => {
        if(doc.data()) {
            let usersArray = doc.data();
            myUsers.push(usersArray)
        }
    })
    return myUsers
}

export const deleteUser = async (user) => {
    await deleteDoc(doc(db, "usuarios", user));
}

export const deleteComment = async (newComments, user) => {
    const docRef = doc(db, 'usuarios', user);
    await updateDoc(docRef, {
        comentarios: newComments
    })
}

export const blockUserFb = async (user) => {
    const docRef = doc(db, 'usuarios', user);
    await updateDoc(docRef, {
        blocked: true
    })
}

export const unblockUserFb = async (user) => {
    const docRef = doc(db, 'usuarios', user);
    await updateDoc(docRef, {
        blocked: false
    })
}