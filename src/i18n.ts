type Translation = {
  dashboard: string;
  users: string;
  settings: string;
  language: string;
  darkMode: string;
  totalUsers: string;
  userDetails: string;
  back: string;
  success:string;
  created:string;
  edit:string;
  modify:string;
  add:string;
  name:string;
  lastname:string;
  email:string;
  age:string;
  update:string;
  save:string;
  delete:string;
  confirmDel:string;
  cancel:string;
  del:string;
  wellcome:string;
  preferences:string;
  successdel:string;
  logout:string;
  prev:string;
  next:string;
  searchUser:string;
  search:string;
};

export const text: Record<"en" | "es", Translation> = {
  en: {
    dashboard: "Dashboard",
    users: "Users",
    settings: "Settings",
    language: "Language",
    darkMode: "Dark mode",
    totalUsers: "total users",
    userDetails: "User details",
    back: "Back",
    success : "User updated succesfully ✅",
    created:"User created successfully 🎉",
    edit: "Edit user",
    modify:"Edit",
    add:"Add user",
    name:"First Name",
    lastname:"Last Name",
    email:"Email",
    age: "Age",
    update:"Update user",
    save:"Save user",
    delete:"Delete user",
    confirmDel:"Are you sure you want to delete",
    cancel:"Cancel",
    del:"Delete",
    wellcome:"Wellcome",
    preferences:"Manage your preferences",
    successdel:"User deleted succesfully 🗑️",
    logout:"Logout",
    prev:"Prev",
    next:"Next",
    searchUser:"Search User...",
    search:"Search"
  },
  es: {
    dashboard: "Panel de control",
    users: "Usuarios",
    settings: "Configuración",
    language: "Idioma",
    darkMode: "Modo oscuro",
    totalUsers: "usuarios en total",
    userDetails: "Detalle de usuario",
    back: "Volver",
    success : "Usuario actualizado correctamente ✅",
    created:"Usuario creado correctamente 🎉",
    edit:"Editar usuario",
    modify:"Editar",
    add:"Agregar usuario",
    name:"Nombre",
    lastname:"Apellido",
    email:"Correo Electrónico",
    age:"edad",
    update:"Actualizar usuario",
    save:"Guardar usuario",
    delete:"Eliminar usuario",
    confirmDel:"Seguro que desea eliminar este usuario",
    cancel:"Cancelar",
    del:"Eliminar",
    wellcome:"Bienvenido(a)",
    preferences:"Configura a tu gusto",
    successdel:"Usuario eliminado correctamente 🗑️",
    logout:"Salir",
    prev:"Anterior",
    next:"Siguiente",
    searchUser:"Buscar usuario...",
    search:"Buscar"
  },
};