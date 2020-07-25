const initstate ={
    projects: [
        {id:'1' , title: 'help me find peach', content: 'blah blah blah'},
        {id:'2' , title: 'helpp me find peach', content: 'blah blah blah'},
        {id:'3' , title: 'helppp me find peach', content: 'blah blah blah'}


    ]
} 

const projectreducer = (state=initstate,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('crete project' , action.project)
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project error',action.err)
            return state;
        default:
            return state;
    }
    
}

export default projectreducer