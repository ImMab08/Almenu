import { IconFacebook, IconInstagram, IconTiktok } from "../icons";

export const links = [
  {
    title: 'Contacto',
    links: [
      { text: 'almenusoport@almenu.com', href: 'mailto:almenusoport@almenu.com' },
      { text: '+57 123 456 7890', href: 'tel:+571234567890' },
    ],
  },
  {
    title: 'Soluciones',
    links: [
      { text: 'Para negocios', href: '/negocios' },
      { text: 'Para restaurantes', href: '/restaurantes' },
      { text: 'Para empresas', href: '/empresas' },
    ],
  },
  {
    title: 'Información',
    links: [
      { text: 'Términos y condiciones', href: '/terminos' },
      { text: 'Política y privacidad', href: '/privacidad' },
      { text: 'Sobre nosotros', href: '/privacidad' },
    ],
  },
];

export const icons = [
  { icon: <IconFacebook />, href: 'www.facebook.com' },
  { icon: <IconInstagram />, href: 'www.instagram.com' },
  { icon: <IconTiktok />, href: 'www.tiktok.com' },
]