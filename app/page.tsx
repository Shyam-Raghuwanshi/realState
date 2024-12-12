import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import Properties from "@/components/properties";

export default function Home() {

  return (
    <main className="w-full">
      <Navbar />
      <Properties />
      <BottomNav />
    </main>
  )
}
