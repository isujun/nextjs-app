export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ul className="flex gap-4 list-none">
        <li>product</li>
        <li>category</li>
        <li>price</li>
      </ul>
      {children}
    </>
  );
}
