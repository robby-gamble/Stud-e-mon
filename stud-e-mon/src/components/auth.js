import { auth } from "./Firebase/firebase";

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email,password) {
    return auth().signInWithEmailAndPassword(email, password);
}