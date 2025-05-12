


export const UserRow = ({handlerUserSelectedForm, handlerDeleteUser, id, username, email}) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id: id,
                        username: username,
                        email: email,
                    })}
                >
                    update
                </button>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerDeleteUser(id)}
                >
                    remove
                </button>
            </td>
        </tr>
    )
}
