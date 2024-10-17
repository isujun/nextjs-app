import { Form } from "@/components/shared/form";
import { Profile } from "@/components/shared/profile";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Page() {
  return (
    <main className="text-xl font-semibold">
      <Profile name="goi" age="12" address="vietam" gender="m" />
      <Profile name="fui" age="13" address="malay" gender="m" />
      <Profile name="xui" age="23" address="cini" gender="m" />
      <Profile name="voio" age="14" address="vietam" gender="f" />
      <Form />
      <h2 className="text-2xl">hello this is next js</h2>
      <Link href="/about-me">
        <Button className="flex justify-center">Click!</Button>
      </Link>
    </main>
  )
}
