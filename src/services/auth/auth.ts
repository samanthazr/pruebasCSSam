import { conextionBackend } from "../conextionBackend";
import endpoint from "../endpoint";

interface LoginResponse {
    token: string;
}

export const login = async (email: string, password: string): Promise<string> => {
    try {
        const payload =  { email, password};
        console.log(`completando la ruta ${endpoint.users}`);
        const { data } = await conextionBackend.post<LoginResponse>(`${endpoint.users}`, payload);
        return data.token;
    }
    catch (error) {
        throw new Error(`Error al iniciar sesion`);
    }
}
