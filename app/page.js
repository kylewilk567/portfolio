import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-48 text-2xl px-10">
        <PageContent />
      </div>
    </div>
  );
}
