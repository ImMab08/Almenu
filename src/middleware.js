import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  
  const cookieStore = cookies();
  const token = cookieStore.get('token'); // Obtener el token de las cookies.

  // Si no esta logueado, redirigirlo al login.
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Rutas protegidas.
  matcher: [
    '/inicio/:path*',
    '/menu/:path*',
    '/inventario/:path*',
    '/balance/:path*',
    '/configuracion/:path*',
  ]
}