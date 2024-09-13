import axios from 'axios';

export const login = async (email, password) => {
  try {

    const response = await axios.post('http://localhost:8081/auth/v01/login', {
      email,
      password
    });

    const { token } = response.data;

    // Guardar token en las cookies
    document.cookie = `token=${token}; path=/; SameSite=Lax`;

    return true; // Autenticación exitosa.

  } catch (error) {

    console.error('Error al iniciar sesión', error);
    return false; // Autenticación fallida.
    
  }
}