import axios from "axios";

export const loginUser = async ({ username, password }) => {
    try {
        return awaitaxios.post('http://localhost:8080/login', {
            username,
            password
        });
        
    } catch (error) {
        throw error
        
    }
}