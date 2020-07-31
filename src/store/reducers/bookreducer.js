const initstate ={
    projects: [
        {id:'1' , title: 'help me find peach', content: 'blah blah blah'},
        {id:'2' , title: 'helpp me find peach', content: 'blah blah blah'},
        {id:'3' , title: 'helppp me find peach', content: 'blah blah blah'}


    ]
} 

const bookreducer = (state=initstate,action) => {
    switch (action.type) {
        case 'BOOK_PROJECT':
            console.log('crete project' , action.book)
            alert("Your Booking is Sucessfull!")
            return state;
        case 'BOOK_PROJECT_ERR':
            console.log('create project error',action.err)
            return state;
        default:
            return state;
    }
    
}

export default bookreducer