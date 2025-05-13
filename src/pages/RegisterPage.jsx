import { useState } from "react";
import { UserForm } from "../components/UserForm"



export const RegisterPage = ({ handlerAddUser, initialUserForm }) => {

    const [ userSelected, setUserSelected ] = useState(initialUserForm);
    return (
        <div >
            <h4>Registro de Usuarios</h4>
            <div className="row">
                <div className="col">
                    <UserForm 
                    userSelected={userSelected} 
                    handlerAddUser={handlerAddUser} 
                    initialUserForm={userSelected} />
                </div>
            </div>

        </div>
    )
}
