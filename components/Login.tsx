import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Background from './Background';
import { fontStyles } from '../styles'; // Importa fontStyles desde tu archivo de estilos

const Login: React.FC = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <Background />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/icon.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={[styles.texto, fontStyles.twCenMT]}>Inicio de Sesión</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu Correo electrónico "
                        placeholderTextColor="#ffffff"
                        onChangeText={setCorreo}
                        value={correo}
                    />
                    <Text style={styles.inputLabel}>Correo electrónico</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="********* "
                        placeholderTextColor="#ffffff"
                        secureTextEntry={true}
                        onChangeText={setContraseña}
                        value={contraseña}
                    />
                    <Text style={styles.inputLabel}>Contraseña</Text>
                </View>
                <TouchableOpacity style={styles.olvidasteContraseña}>
                    <Text style={styles.olvidasteContraseñaText}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <Text style={styles.iniciaSesionText}>¿No tienes una cuenta? Regístrate</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: '15%', // Centra verticalmente el logo
    },
    logo: {
        width: 150, // Hace el logo un poco más grande
        height: 150,
        borderRadius: 80, // Hace que el logo sea redondo
    },
    formContainer: {
        position: 'absolute',
        top: '35%', // Ajusta la posición del formulario
        left: '50%',
        marginLeft: -150, // Centra horizontalmente el formulario
        width: 300,
        height: 200, // Ajusta la altura del contenedor del formulario
        backgroundColor: '#0094F1', // Azul especificado
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center', // Centra el contenido verticalmente dentro del contenedor
    },
    texto: {
        position: 'absolute',
        marginTop: 20,
        top: '25%',
        left: '35%', // Centra horizontalmente
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff', // Blanco
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#0094F1', // Azul para que se mezcle con el fondo de la caja
        color: '#ffffff', // Texto blanco para los inputs
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff', // Borde inferior blanco
        padding: 0,
        fontSize: 15,
    },
    inputLabel: {
        position: 'absolute',
        left: 0,
        top: -15, // Ajusta la posición del texto fuera del borde
        color: '#ffffff',
        fontSize: 16, // Ajusta el tamaño de fuente del texto fuera del borde
    },
    olvidasteContraseña: {
        position: 'absolute',
        left: '68%', // Ajusta la posición del enlace de "¿Olvidaste tu contraseña?"
        top: '85%', // Ajusta la posición del enlace de "¿Olvidaste tu contraseña?"
    },
    olvidasteContraseñaText: {
        color: '#01063E',
        marginTop: 5, // Agrega un pequeño espacio
    },
    button: {
        position: 'absolute',
        bottom: '16%', // Mueve el botón hacia abajo
        backgroundColor: '#FFA500', // Naranja
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: 180, // Ancho igual al de los inputs
        alignSelf: 'center', // Centra horizontalmente el botón
    },
    buttonText: {
        color: '#ffffff', // Blanco
        fontWeight: 'bold',
        fontSize: 20,
    },
    iniciaSesionText: {
        color: '#01063E',
        fontSize: 16,
        marginTop: 20, // Ajusta el espacio entre el botón y el texto
        textAlign: 'center', // Centra horizontalmente el texto
    },
});

export default Login;
