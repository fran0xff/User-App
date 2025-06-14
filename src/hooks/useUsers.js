import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { findAll, remove, save, update } from "../services/userService";
import { AuthContext } from "../auth/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { 
    initialUserForm,
    addUser,
    removeUser,
    updateUser,
    loadingUsers,
    onUserSelectedForm,
    onOpenForm,
    onCloseForm,
    loadingError } from "../store/slices/users/usersSlice";

export const useUsers = () => {
    //const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const { users, errors, userSelected, visibleForm} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    // const [userSelected, setUserSelected] = useState(initialUserForm);
    // const [visibleForm, setVisibleForm] = useState(false);

    const navigate = useNavigate();

    const { login, handlerLogaut } = useContext(AuthContext);

    const getUsers = async () => {

        try {

            const result = await findAll();
            console.log(result);
            dispatch(loadingUsers(result.data));

        } catch (error) {
            if (error.response?.status == 401) {
                handlerLogaut();
            }
        }
    }

    const handlerAddUser = async (user) => {
        // console.log(user);

        if (!login.isAdmin) return;

        let response;
        try {

            if (user.id === 0) {
                response = await save(user);
                dispatch(addUser(response.data));
            } else {
                response = await update(user);
                dispatch(updateUser(response.data));
            }

            Swal.fire(
                (user.id === 0) ?
                    'Usuario Creado' :
                    'Usuario Actualizado',
                (user.id === 0) ?
                    'El usuario ha sido creado con exito!' :
                    'El usuario ha sido actualizado con exito!',
                'success'
            );
            handlerCloseForm();
            navigate('/users');
        } catch (error) {
            if (error.response && error.response.status == 400) {
                dispatch(loadingError(error.response.data));
            } else if (error.response && error.response.status == 500 &&
                error.response.data?.message?.includes('constraint')) {

                if (error.response.data?.message?.includes('UK_username')) {
                    dispatch(loadingError({ username: 'El username ya existe!' }));
                }
                if (error.response.data?.message?.includes('UK_email')) {
                    dispatch(loadingError({ email: 'El email ya existe!' }));
                }
            } else if (error.response?.status == 401) {
                handlerLogaut();
            } else {
                throw error;
            }
        }
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);

        if (!login.isAdmin) return;

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    await remove(id);

                    dispatch(removeUser(id));
                    // dispatch({
                    //     type: 'removeUser',
                    //     payload: id,
                    // });
                    Swal.fire(
                        'Usuario Eliminado!',
                        'El usuario ha sido eliminado con exito!',
                        'success'
                    );
                    navigate('/users');
                } catch (error) {
                    if (error.response?.status == 401) {
                        handlerLogaut();
                    }
                }
            }
        })

    }

    const handlerUserSelectedForm = (user) => {
        // console.log(user)
    //     setVisibleForm(true);
    //     setUserSelected({ ...user });
        // setErrors(initialErrors);
        dispatch(onUserSelectedForm({...user }));
    }

    const handlerOpenForm = () => {
        dispatch(onOpenForm(true));
    }

    const handlerCloseForm = () => {
        // setVisibleForm(false);
        // setUserSelected(initialUserForm);
        dispatch(onCloseForm());
        // reset errors
        dispatch(loadingError({}));
    }
    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        errors,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}