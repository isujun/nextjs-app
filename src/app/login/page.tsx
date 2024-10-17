import { AuthLayout } from "@/features/authentication/layout.auth";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-[300px] space-y-9">
        <section>
          <h3>Login</h3>
          <p>Welcome Back!</p>
        </section>

      </div>
    </AuthLayout>
  )
}
