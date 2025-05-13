import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/registerPage"



export const UserRoutes = ({ login, handlerLogout }) => {

    const {
          users,
          userSelected,
          initialUserForm,
          visibleForm,
          handlerAddUser,
          handlerRemoveUser,
          handlerUserSelectedForm,
          handlerOpenForm,
          handlerCloseForm,
      } = useUsers();
      
  return (
    <>
      <Navbar login={login} handlerLogout={handlerLogout} />
      <Routes>
        <Route path="users" element={<UsersPage />} />
        <Route path="users/register" element={<RegisterPage
          handlerAddUser={handlerAddUser}
          initialUserForm={initialUserForm} />} />
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>

    </>
  )
}
