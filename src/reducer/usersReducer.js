


export default (state = [], action) => {

    switch (action.type) {

        case 'addUser':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),

                }
            ];
        case 'deleteUser':
            return state.filter(user => user.id !== action.payload);
        
        case 'updateUser':
            return state.map(u => {
                if (u.id === action.payload.id) {
                    return action.payload;
                } else {
                    return u;
                }
            });

        
        default:
            return state
    }
}

