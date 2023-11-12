import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
	publicRoutes: ["/", "/search", "/api/search", "/education/:path*", "/hotels/:path*", "/restaurants/:path*", "/places/:path*", "/api/services", "/api/services/:path*", "/api/education", "/api/hotels", "/api/restaurants", "/api/places", "/education", "/hotels", "/restaurants", "/places", "/api/review", "/api/uploadthing"],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
