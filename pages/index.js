import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Calendar from "@/components/Calendar";
import SearchBar from "@/components/SearchBar";
import FilterSection from "@/components/FilterSection";
import EventList from "@/components/EventList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8`}>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">세미나 & 컨퍼런스</h1>
        <SearchBar />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Calendar />
          <EventList />
        </div>
        
        <aside className="space-y-6">
          <FilterSection />
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">즐겨찾기한 일정</h2>
            {/* Favorites list will go here */}
          </div>
        </aside>
      </div>
    </main>
  );
}
