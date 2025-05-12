import { useEffect, useState } from "react"



export const UserForms = ({ userSelected, handlerAddUser, initialUserForm }) => {

    const [userForm, setUserForm] = useState(initialUserForm)

    const { id, username, password, email } = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: '',
        })
    }, [userSelected]);

    const onInputChange = ({ target }) => {
        //console.log(target.value)
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })}

    const onSubmit = (e) => {
        e.preventDefault();
        if(!username || (!password && id === 0) || !email) {
            alert("Please fill in all the fields");
            return;
        }
        //console.log(userForm);
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                className="Form-control my-2 w-100"
                placeholder="Username"
                name="username"
                value= { username }
                onChange={ onInputChange }
            />
            {id > 0 || <input
                className="Form-control my-2 w-100"
                placeholder="Pasword"
                type="password"
                name="password"
                value= { password }
                onChange={ onInputChange }
            />}
            
            <input
                className="Form-control my-2 w-100"
                placeholder="Emailcom"
                name="email"
                value= { email }
                onChange={ onInputChange }
            />
            <input 
                type="hidden"
                value={ id }
            />
            {}
            <button 
                className="btn btn-primary my-2"
                type="submit"
            >
                {id > 0 ? 'update' : 'add'}
             </button>

        </form>
    )
}
