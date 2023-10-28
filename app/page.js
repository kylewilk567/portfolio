import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-44 sm:mt-8 relative h-screen bg-white items-center overflow-hidden">
        <PageContent />
      </div>
    </div>
  );
}
