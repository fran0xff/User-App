import { useReducer, useState } from "react"
import { UserForms } from "./components/UserForms"
import { UsersList } from "./components/UsersList"
import usersReducer from "./reducer/usersReducer";


export const UsersApp = () => {

    
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
