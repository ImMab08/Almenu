import { IconFacebook, IconInstagram, IconTikTok } from "@/icons";

export const links = [
  {
    title: 'Contacto',
    links: [
      { text: 'almenusupport@almenu.com', href: 'mailto:almenusoport@almenu.com' },
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
      { text: 'Sobre nosotros', href: '/privacidad' },
      { text: 'Términos y condiciones', href: '/terminos' },
      { text: 'Política y privacidad', href: '/privacidad' },
    ],
  },
  {
    title: 'Siguenos',
    links: [
      { icon: <IconFacebook width={12} height={12} /> , text: 'Facebook', href: 'https://www.facebook.com/almenu' },
      { icon: <IconInstagram width={12} height={12} /> , text: 'Instagram', href: 'https://www.instagram.com/almenu' },
      { icon: <IconTikTok width={12} height={12} /> , text: 'TikTok', href: 'https://www.tiktok.com/almenu'}
    ]
  },
];