import { useReducer, useState } from "react"
import { UserForms } from "./components/UserForms"
import { UsersList } from "./components/UsersList"
import usersReducer from "./reducer/usersReducer";

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

export const UsersApp = () => {

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

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForms
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                        handlerAddUser={handlerAddUser}
                    />
                </div>
                <div className="col">
                    {users.length === 0 ? <div className="alert alert-warning" role="alert" >No users found</div>
                        :
                        <UsersList
                            handlerUserSelectedForm={handlerUserSelectedForm}
                            handlerDeleteUser={handlerDeleteUser}
                            users={users}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
