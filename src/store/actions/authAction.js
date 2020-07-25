export const signIn = (credentials) => {
    return (dispatch , getState , {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
            dispatch({type:'LOGIN_SUCESS'})
        }).catch((err)=> {
            dispatch({ type: 'LOGIN_ERR' , err});
        });
        
    }
}


export const signOut = () => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastname: newUser.lastname,
                initials:newUser.firstName[0] + newUser.lastname[0]
            })
        }).then(()=> {
            dispatch({ type: 'SIGNUP_SUCESS'})
        }).catch(err=>{
            dispatch({ type:'SIGNUP_ERROR' , err})
        })
    }
} 