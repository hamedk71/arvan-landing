
import Facility from "@/components/pages/home/facility";
import Hero from "@/components/pages/home/hero";
import SendRequest from "@/components/pages/home/sendRequest";

export default function Home() {

  return (
    <main
      className={` min-h-screen `}
    >
      <Hero />
      <Facility />
      <SendRequest />
    </main>
  )
}
