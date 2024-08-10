import { auth } from '../firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const registerUser = async (email, password, nombre, aceptaTerminos) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Registrar en el backend
    await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        email,
        contraseña: password,
        acepta_terminos: aceptaTerminos,
      }),
    });

    return userCredential.user;
  } catch (error) {
    throw new Error("Error al registrar el usuario");
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    // Enviar el token al backend para validación
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    return data;  // Aquí recibes el token JWT del backend y la información del usuario
  } catch (error) {
    throw new Error(error.message);
  }
};


export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};
