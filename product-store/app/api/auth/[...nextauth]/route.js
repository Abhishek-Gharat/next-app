import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const providers = [
  Credentials({
    async authorize(credentials) {
      // Demo credentials for testing without OAuth
      if (
        credentials?.username === "admin" &&
        credentials?.password === "123456"
      ) {
        return {
          id: "1",
          name: "Admin User",
          email: "admin@example.com",
          username: "admin",
        };
      }
      return null;
    },
  }),
];

// Add OAuth providers only if credentials are configured
if (process.env.GITHUB_ID && process.env.GITHUB_SECRET) {
  providers.push(
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

if (process.env.GOOGLE_ID && process.env.GOOGLE_SECRET) {
  providers.push(
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  );
}

const authConfig = {
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
  },
};

const handler = NextAuth(authConfig);
export { handler as GET, handler as POST };
