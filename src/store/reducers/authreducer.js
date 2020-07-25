const initstate ={
    authError: null
}

const authreducer = (state=initstate,action) => {
    switch(action.type){
        case 'LOGIN_ERR':
            console.log('login failure');
            return {
                ...state,
                authError: 'Logon failed'
            }
        case 'LOGIN_SUCESS':
            console.log('login sucess');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCESS':
            console.log('signout sucess');
            return state;

        case 'SIGNUP_SUCESS':
            console.log('signup Sucess')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
             console.log('signup failure');
            return {
                  ...state,
                 authError: action.err.message
                    }

        default:
            return state;
}
}

export default authreducer