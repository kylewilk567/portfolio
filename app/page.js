import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-44 text-2xl">
        <PageContent />
      </div>
    </div>
  );
}
