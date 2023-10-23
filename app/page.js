import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-44 pt-4 relative h-screen bg-white items-center">
        <PageContent />
      </div>
    </div>
  );
}
