import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    // <div className="bg-black flex items-center justify-center">

    // </div>
    <div className="max-w-7xl w-full relative flex flex-[1_0_auto] mx-auto my-0 bg-black">
      <Nav />
      <div className="mt-12 sm:mt-0 min-h-screen bg-white items-center">
        <div className="absolute overflow-hidden w-full h-full">
          <div className="base one"></div>
          <div className="base two"></div>
          <div className="base three"></div>
        </div>
        <div className="relative z-20">
          <PageContent />
        </div>
      </div>
    </div>
  );
}
