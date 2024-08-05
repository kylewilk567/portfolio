import React from "react";
import Header from "./Header";
import Image from "next/image";

const Pathfinding = () => {
  /*
        NOTE: It makes sense to leave header grouped in a div, but not automatically centered on the page.
        Need to find the right CSS styles to center the Header, but right-align the logo
        Also need to set height property for image while keeping ratio
    */
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="mx-auto">
          <Header title="Eagle Scout Project" />
        </div>

        <Image
          src="/assets/projects/kwilk_logo_circle.png"
          alt="img"
          width={48}
          height={48}
          sizes="48px"
          className="absolute top-1 right-4"
        />
      </div>

      {/* Smaller screen content */}
      <div className="flex xl:hidden flex-col mt-4 items-center">
        <Image
          src="/assets/projects/eagle_scout/Eagle_final2.jpg"
          alt="top_view"
          width={0}
          height={0}
          sizes="320px"
          className="max-w-md mb-4 w-full h-auto"
        />
        <p className="xl:col-span-2 brand-text-color">
          I constructed three Little Free Pantries for elementary schools in the
          Walled Lake Consolidated School District. Originally, the project
          involved building just one pantry. However, after learning about a
          classmate I had known for several years who was experiencing food
          insecurity, I decided to expand the project to help more families like
          hers. This initiative challenged my leadership skills and
          adaptability. I collaborated with my troop to construct the pantries,
          using stations and diagrams I developed to clearly communicate the
          tasks. On the build day, I worked with experienced adults to
          successfully implement a last-minute design modification to improve
          waterproofing. <br />
          <br />
        </p>
        <Image
          src="/assets/projects/eagle_scout/Eagle_garage.jpg"
          alt="top_view"
          width={0}
          height={0}
          sizes="320px"
          className="pr-4 mt-4 max-w-md mx-auto w-full h-auto"
        />
        <p className="brand-text-color text-sm">
          Board cutting and sanding during build day
        </p>
        <br />
        <p className="brand-text-color">
          The Little Free Pantries serve a greater purpose than merely providing
          food to the community. They foster a sense of support and community
          spirit. The guiding principle, &quot;Take what you need, leave what
          you can,&quot; encourages people to contribute or take as needed
          without asking. Additionally, the pantries educate younger students
          about food poverty and the importance of sharing resources.
        </p>
        <Image
          src="/assets/projects/eagle_scout/Eagle_final.jpg"
          alt="top_view"
          width={0}
          height={0}
          sizes="320px"
          className="max-w-md my-2 w-full h-auto"
        />
      </div>

      {/* Extra large screen content */}
      <div className="hidden xl:block mt-4">
        <div className="grid grid-cols-3 gap-4">
          <p className="col-span-2 max-w-3xl mx-auto brand-text-color">
            I constructed three Little Free Pantries for elementary schools in
            the Walled Lake Consolidated School District. Originally, the
            project involved building just one pantry. However, after learning
            about a classmate I had known for several years who was experiencing
            food insecurity, I decided to expand the project to help more
            families like hers. This initiative challenged my leadership skills
            and adaptability. I collaborated with my troop to construct the
            pantries, using stations and diagrams I developed to clearly
            communicate the tasks. On the build day, I worked with experienced
            adults to successfully implement a last-minute design modification
            to improve waterproofing. <br />
            <br />
            The Little Free Pantries serve a greater purpose than merely
            providing food to the community. They foster a sense of support and
            community spirit. The guiding principle, &quot;Take what you need,
            leave what you can,&quot; encourages people to contribute or take as
            needed without asking. Additionally, the pantries educate younger
            students about food poverty and the importance of sharing resources.
          </p>
          <div className="col-span-1 flex flex-col justify-between">
            <Image
              src="/assets/projects/eagle_scout/Eagle_garage.jpg"
              alt="top_view"
              width={0}
              height={0}
              sizes="320px"
              className="pr-4 mt-4 max-w-md mx-auto w-full h-auto"
            />
            <p className="brand-text-color text-sm">
              Board cutting and sanding during build day
            </p>
            <br />
            <Image
              src="/assets/projects/eagle_scout/Eagle_install.jpg"
              alt="top_view"
              width={0}
              height={0}
              sizes="320px"
              className="pr-4 max-w-md mx-auto w-full h-auto"
            />
            <p className="brand-text-color text-sm">
              Pantry installation at Walled Lake Elementary
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-4 gap-4">
          <div className="col-span-1 flex flex-col max-w-3xl mx-auto">
            <Image
              src="/assets/projects/eagle_scout/Eagle_final2.jpg"
              alt="top_view"
              width={0}
              height={0}
              sizes="424px"
              className="mx-auto w-full h-auto"
            />
          </div>
          <div className="col-span-1 flex flex-col max-w-md mx-auto">
            <Image
              src="/assets/projects/eagle_scout/Eagle_final.jpg"
              alt="top_view"
              width={0}
              height={0}
              sizes="424px"
              className="mx-auto w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pathfinding;
