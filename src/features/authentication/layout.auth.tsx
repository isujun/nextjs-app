import React from "react"

interface AuthLayoutProps {
	children: React.ReactNode
}
export const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<main className="grid h-screen grid-cols-2">
			<section className="flex h-screen items-center justify-center">
				{children}
			</section>

		</main>
	)
}
