import { Footer } from "@/components/shared/footer";
import { Form } from "@/components/shared/form";
import { Header } from "@/components/shared/header";
import { Profile } from "@/components/shared/profile";


export default function Page() {
  return (
    <div>
      <Header />
      <Profile name="goi" age="12" address="vietam" gender="m" />
      <Profile name="fui" age="13" address="malay" gender="m" />
      <Profile name="xui" age="23" address="cini" gender="m" />
      <Profile name="voio" age="14" address="vietam" gender="f" />
      <Form />
      <Footer />
    </div>
  )
}
