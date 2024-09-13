import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  console.log("Middleware ejecutado"); 
  
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