export interface NavItem {
    text: string;
    path: string;
    isPrivate: boolean;
  }
  
  export const navConfig: NavItem[] = [
    { text: 'Home', path: '/home',isPrivate:false },
    { text: 'Dashboard', path: '/dashboard' ,isPrivate:true },
    { text: 'Carrito', path: '/cart'  ,isPrivate:false },
    { text: 'About Us', path: '/aboutUs',isPrivate:false },
  ];
  