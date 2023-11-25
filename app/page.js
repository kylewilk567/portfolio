import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="sm:ml-44 mt-12 sm:mt-0 relative min-h-screen bg-white items-center overflow-x-hidden">
        <div className="base one"></div>
        <div className="base two"></div>
        <div className="base three"></div>
        <div className="relative z-20">
          <PageContent />
        </div>
      </div>
    </div>
  );
}
