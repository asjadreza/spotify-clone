import Sidebar from "@/components/Sidebar";
import Center from "@/components/Center";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        {/* sidebar */}
        <Sidebar />
        {/* center */}
        <Center />
      </main>

      <div>
        {/* Player  */}
      </div>


    </div>
  );
}
