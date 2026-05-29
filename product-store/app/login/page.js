import { login } from "@/app/actions/auth";
import { isValidCallbackUrl } from "@/lib/auth";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const callbackUrl = isValidCallbackUrl(params?.callbackUrl)
    ? params.callbackUrl
    : "/products";
  const hasError = params?.error === "invalid";

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "28px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Login</h2>

      {hasError && (
        <p style={{ color: "crimson" }}>
          Invalid username or password.
        </p>
      )}

      <form
        action={login}
        style={{
          display: "grid",
          gap: "14px",
        }}
      >
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <label>
          Username
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginTop: "6px",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            background: "#111827",
            color: "white",
            border: "0",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "18px", color: "#555" }}>
        Use username <strong>admin</strong> and password{" "}
        <strong>123456</strong>.
      </p>
    </div>
  );
}
