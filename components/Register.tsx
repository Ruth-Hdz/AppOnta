import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Background from './Background';
import { fontStyles } from '../styles'; // Importa fontStyles desde tu archivo de estilos

const Register: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false); // Estado para los términos y condiciones

    return (
        <View style={{ flex: 1 }}>
            <Background />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/icon.png')}
                    style={styles.logo}
                />
            </View>
            <Text style={[styles.texto, fontStyles.twCenMT]}>Registro</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu nombre"
                        placeholderTextColor="#ffffff"
                        onChangeText={setNombre}
                        value={nombre}
                    />
                    <Text style={styles.inputLabel}>Nombre</Text>
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
                <TouchableOpacity style={styles.checkbox} onPress={() => setAceptaTerminos(!aceptaTerminos)}>
                    {aceptaTerminos ? (
                        <View style={styles.checkedBox}></View>
                    ) : null}
                </TouchableOpacity>
                <Text style={styles.terminosText} onPress={() => setAceptaTerminos(!aceptaTerminos)}>Acepto términos y condiciones</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <Text style={styles.iniciaSesionText}>¿Ya tienes una cuenta? Inicia Sesión</Text>
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
        height: 338,
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
        backgroundColor: '#0094F1', 
        color: '#ffffff', // Texto blanco para los inputs
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        padding: 0,
        fontSize: 15,
    },
    inputLabel: {
        position: 'absolute',
        left: 0,
        top: -15, 
        color: '#ffffff',
        fontSize: 16, 
    },
    // Cuadro de aceptación
    checkbox: {
        position: 'absolute',
        left: '15%', 
        top: '86%', 
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 30,
    },
    checkedBox: {
        width: 10,
        height: 10,
        backgroundColor: '#01063E',
    },
    // Texto de términos y condiciones
    terminosText: {
        position: 'absolute',
        left: '25%', 
        top: '85%', 
        color: '#01063E',
        marginTop: 5, 
    },
    button: {
        position: 'absolute',
        bottom: '16%', // Mueve el botón hacia abajo
        backgroundColor: '#FFA500', // Naranja
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        width: 180, // Ancho 
        alignSelf: 'center', 
    },
    buttonText: {
        color: '#ffffff', 
        fontWeight: 'bold',
        fontSize: 20,
    },
    iniciaSesionText: {
        color: '#01063E',
        fontSize: 16,
        marginTop: 520, // Ajusta el espacio entre el botón y el texto
        textAlign: 'center', 
    },
    terminosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    
});

export default Register;
