import Nav from "@/components/Nav";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <div className="brand-bg-color flex justify-center">
      <div className="absolute overflow-hidden w-full h-full xl:block hidden">
        <div className="base one"></div>
        <div className="base two"></div>
        <div className="base three"></div>
      </div>
      <div className="max-w-7xl w-full relative z-10 flex">
        <Nav />
        <div className="mt-12 sm:mt-0 max-w-[1104px] w-full min-h-screen bg-white items-center border-r-2 brand-border-color">
          <div className="absolute overflow-hidden w-full max-w-[1104px] h-full xl:hidden">
            <div className="base one"></div>
            <div className="base two"></div>
            <div className="base three"></div>
          </div>
          <div className="relative z-20">
            <PageContent />
          </div>
        </div>
      </div>
    </div>
  );
}
