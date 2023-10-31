import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-44 mt-12 sm:mt-0 relative min-h-screen bg-white items-center overflow-x-hidden">
        <PageContent />
      </div>
    </div>
  );
}
