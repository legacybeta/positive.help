import { auth } from "@/app/auth"

export default auth((req: any) => {
  const { nextUrl } = req
  const { auth: session } = req

  const isLoggedIn = !!session
  const protectedPaths = ['/dashboard', '/profile']
  const isProtectedRoute = protectedPaths.some(path => 
    nextUrl.pathname.startsWith(path)
  )

  if (isProtectedRoute && !isLoggedIn) {
    const redirectUrl = new URL('/auth/signin', nextUrl)
    redirectUrl.searchParams.set('callbackUrl', nextUrl.pathname)
    return Response.redirect(redirectUrl)
  }

  return null
})

// Optionally configure middleware matcher
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 