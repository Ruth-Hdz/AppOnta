// types.ts
export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Inicio: undefined;
  RecuperarContrasena: undefined;
  Perfil: undefined;
  CrearArticulo: undefined;
  CrearCategoria: undefined;
  CambiarContrasena: undefined;
  ListaCategorias: undefined;
  CategoriaSeleccionada: {
    categoryId: string;
    categoryTitle: string;
    categoryColor: string;
  };
  Buscar: undefined;
};
