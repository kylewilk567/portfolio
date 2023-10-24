import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <div>
        <Nav />
        <div className="sm:ml-44 relative h-screen bg-white items-center">
          <PageContent />
        </div>
      </div>
    </Providers>
  );
}
