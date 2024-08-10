import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de usar AsyncStorage aquí

export const firebaseConfig = {
  apiKey: "AIzaSyBOkp5nKd5qpHiAjkx-L6KQck-HSHXMy-U",
  authDomain: "apponta-417e4.firebaseapp.com",
  projectId: "apponta-417e4",
  storageBucket: "apponta-417e4.appspot.com",
  messagingSenderId: "648823942949",
  appId: "1:648823942949:web:d2a3ff5061b8aae88bf4cc"
};

const app = initializeApp(firebaseConfig);

// Inicializa la autenticación con persistencia en AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});