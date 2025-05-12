import { useReducer, useState } from "react";
import usersReducer from "../reducer/usersReducer";

const initialUsers = [
    {
        id: 1,
        username: 'John',
        password: '123456',
        email: 'john@gmail.com'
    },
]
const initialUserForm = {
    id: 0,
    username: "",
    password: "",
    email: ""
}


export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const[userSelected, setUserSelected] = useState(initialUserForm);

    const handlerAddUser = (user) => {
            //console.log('handlerAddUser', user)
            let type;
            if(user.id === 0) {
                type = 'addUser';
            } else {
                type = 'updateUser';
            }
            
            dispatch({
                type,
                payload: user
            })
        }
    
        const handlerDeleteUser = (id) => {
            //console.log('handlerDeleteUser', id)
            dispatch({
                type: 'deleteUser',
                payload: id
            })
        }
    
        const handlerUserSelectedForm = (user) => {
            //console.log('handlerUserSelectedForm', user)
            setUserSelected({...user})
        }
    
  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerDeleteUser,
    handlerUserSelectedForm
  }
}
// c:\Users\franc\Desktop\React\6-users-app\src\hooks\useUsersForm.js
  }
}
