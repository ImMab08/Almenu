import { NextResponse } from "next/server";

export function middlware(req) {
  const token = req.cookies.get('token');
  if (!token) {
    return NextResponse.redirect('/');
  }

  return NextResponse.next();
}