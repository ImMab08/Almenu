// import { createServerClient } from '@supabase/ssr';
// import { NextResponse } from 'next/server';

// export async function middleware(request) {
//   const supabaseResponse = NextResponse.next();

//   const path = new URL(request.url).pathname;

//   const protectedRoutes = [    
//     '/inicio',
//     '/menu*',
//     '/inventario',
//     '/balance',
//     '/configuracion',
//   ];
//   const authRoutes = ['/login', '/register'];

//   const isProtectedRoute = protectedRoutes.includes(path);
//   const isAuthRoute = authRoutes.includes(path);

//   const userResponse = await getUser(request);
//   const user = userResponse?.user;

//   if (isProtectedRoute && !user) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (isAuthRoute && user) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return supabaseResponse;
// }

// export const config = {
//   matcher: [
//     '/inicio/:path*',
//     '/menu/:path*',
//     '/inventario/:path*',
//     '/balance/:path*',
//     '/configuracion/:path*',
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };

// export async function getUser(request) {
//   const supabaseClient = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//       },
//     }
//   );

//   const { data, error } = await supabaseClient.auth.getUser();

//   if (error || !data?.user) {
//     return null;
//   }

//   return data;
// }
