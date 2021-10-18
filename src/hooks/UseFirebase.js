import { useEffect, useState } from 'react';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import initAuth from '../components/firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // const loginUsignEmail = () => {
    //     createUserWithEmailAndPassword(auth, email);
    // };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                // An error happened.
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);

    return {
        user,
        signInUsingGoogle,
        logOut,
    };
};

export default useFirebase;
