import { UserForms } from "./components/UserForms"
import { UsersList } from "./components/UsersList"


export const UsersApp = () => {

    const initialUsers = [
        { 
            id: 1, 
            username: 'John',
            password: '123456',
            email: 'john@gmail.com' 
        },
    ]
    return (
        <div className="container my-4">
            <h2>User App</h2>
            <div className="row">
                <div className="col">
                    <UserForms />
                </div>
                <div className="col">
                    <UsersList users={ initialUsers } />
                </div>
            </div>
        </div>
    )
}
