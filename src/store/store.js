import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/users/usersSlice";
import { authSlice } from "./slices/auth/authSlice";


export const store = configureStore({
    reducer: {
        user: usersSlice.reducer,
        auth: authSlice.reducer,
    },
});