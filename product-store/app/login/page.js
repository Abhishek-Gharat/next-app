import { login } from "@/app/actions/auth";
import { isValidCallbackUrl } from "@/lib/auth";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const callbackUrl = isValidCallbackUrl(params?.callbackUrl)
    ? params.callbackUrl
    : "/products";
  const hasError = params?.error === "invalid";

  return (
    <div className="login-panel">
      <h2>Login</h2>
      <p className="hint">
        Sign in to view the products catalog.
      </p>

      {hasError && (
        <p className="error-text">
          Invalid username or password.
        </p>
      )}

      <form action={login}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />

        <label>
          Username
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
          />
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </label>

        <button type="submit">
          Login
        </button>
      </form>

      <p className="hint">
        Use username <strong>admin</strong> and password{" "}
        <strong>123456</strong>.
      </p>
    </div>
  );
}
