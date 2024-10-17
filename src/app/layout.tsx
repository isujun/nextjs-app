import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next. js 7 Days Cohort",
  description: "Next js x Elysia js Project",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <h4>header</h4>
        {children}
        <h4>Footer</h4>
      </body>
    </html >
  );
}
