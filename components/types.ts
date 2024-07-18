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
  CategoriaSeleccionada: { categoryId: string; categoryTitle: string; categoryColor: string };
  EditarArticulo: { articleId: string; articleTitle: string; onSave: (id: string, newTitle: string) => void };
  Buscar: undefined;
};
