export const metadata = {
  title: "Products Store",
  description: "Products Store App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "#f2f2f2",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1>Products Store</h1>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer
          style={{
            backgroundColor: "#f2f2f2",
            padding: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <p>© 2026 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}