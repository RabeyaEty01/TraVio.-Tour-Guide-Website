import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
   
    
    

    const auth = getAuth();

    //registration part
   

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handlePhotoURLChange = e => {
        setPhoto(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (e.target.value < 6) {
            setError("Password Must be at least 6 characters long.")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain 2 Upper Case');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError('');
                verifyEmail();
                setUserName();

            })
            .catch(error => {
                setError(error.message);
            })


    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
            .then(result => {

            })

    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }




    //login part

    const handleProcessLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }



    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }

    //observe user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        logOut,
        isLoading,
        signInUsingGoogle,
        handleNameChange,
        handlePhotoURLChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        error,
        handleProcessLogin,
      

    }
}

export default useFirebase;