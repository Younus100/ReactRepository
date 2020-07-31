export const bookapp = (book) => {
    return (dispatch, getState , { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('book').add({
            ...book,
            authorFirstName: 'null',
            authorLastName: 'null',
            authorId:12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'BOOK_PROJECT' , book: book});
        }).catch((err)=> {
            dispatch({ type: 'BOOK_PROJECT_ERR' , err});
        })
    }
};