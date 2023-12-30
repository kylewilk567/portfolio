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
          <Header title="Pathfinding API" />
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
          src="/assets/projects/pathfinding_api/top_view_mesa.gif"
          alt="top_view"
          width={0}
          height={0}
          sizes="320px"
          className="max-w-md mb-4 w-full h-auto"
        />
        <p className="xl:col-span-2 brand-text-color">
          This project represents my exploration of pathfinding solutions within
          a 3D environment, specifically Minecraft. The objective was to
          efficiently discover short paths across extensive areas. This endeavor
          holds versatile applications, including facilitating navigation in RPG
          adventure maps, enhancing mob AI, improving transportation, and
          streamlining automated base planning and construction. <br />
          <br />
          The project involved researching various pathfinding solutions, with a
          focus on two implementations. The first solution employs the A*
          (A-star) algorithm, which efficiently finds the shortest path by
          considering both the actual cost of reaching a point and a heuristic
          estimate of the remaining cost to the destination. The second solution
          adopts a greedy algorithm, which provides a suboptimal path in less
          time. A time comparison between the two (shown below) revealed that A*
          is not suitable due to its speed limitations. <br />
        </p>
        <Image
          src="/assets/projects/pathfinding_api/Pathfinder_mobile.gif"
          alt="top_view"
          width={0}
          height={0}
          sizes="320px"
          className="max-w-md my-2 w-full h-auto"
        />
        <p className="text-sm brand-text-color">
          <span className="text-red-400 font-bold">A* algorithm</span> (top)
          takes <span className="text-red-400 font-bold">2027ms</span> to find
          the shortest path while{" "}
          <span className="text-lime-500 font-bold">Greedy algorithm</span>{" "}
          (bottom) takes <span className="text-lime-500 font-bold">90ms</span>{" "}
          to find a slightly suboptimal solution. A* takes too long to be
          useful, so greedy implementation is used.
        </p>
        <br />
        <p className="brand-text-color">
          To enhance the greedy algorithm&apos;s shortcomings, a post-processing
          step was introduced, allowing manual adjustments to the path after its
          initial discovery. This project showcases my commitment to optimizing
          pathfinding in complex 3D environments, addressing a range of
          real-world applications.
        </p>
      </div>

      {/* Extra large screen content */}
      <div className="hidden xl:block mt-4">
        <div className="grid grid-cols-3 gap-4">
          <p className="col-span-2 max-w-3xl mx-auto brand-text-color">
            This project represents my exploration of pathfinding solutions
            within a 3D environment, specifically Minecraft. The objective was
            to efficiently discover short paths across extensive areas. This
            endeavor holds versatile applications, including facilitating
            navigation in RPG adventure maps, enhancing mob AI, improving
            transportation, and streamlining automated base planning and
            construction. <br />
            <br />
            The project involved researching various pathfinding solutions, with
            a focus on two implementations. The first solution employs the A*
            (A-star) algorithm, which efficiently finds the shortest path by
            considering both the actual cost of reaching a point and a heuristic
            estimate of the remaining cost to the destination. The second
            solution adopts a greedy algorithm, which provides a suboptimal path
            in less time. A time comparison between the two revealed that A* is
            not suitable due to its speed limitations. <br />
            <br />
            To enhance the greedy algorithm&apos;s shortcomings, a
            post-processing step was introduced, allowing manual adjustments to
            the path after its initial discovery. This project showcases my
            commitment to optimizing pathfinding in complex 3D environments,
            addressing a range of real-world applications.
          </p>
          <div className="col-span-1 flex flex-col justify-between">
            <Image
              src="/assets/projects/pathfinding_api/top_view_mesa.gif"
              alt="top_view"
              width={0}
              height={0}
              sizes="320px"
              className="pr-4 max-w-md mx-auto w-full h-auto"
            />
            <Image
              src="/assets/projects/pathfinding_api/village_path.gif"
              alt="top_view"
              width={0}
              height={0}
              sizes="320px"
              className="pr-4 mt-4 max-w-md mx-auto w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mt-4 gap-4">
          <div className="col-span-2 flex flex-col max-w-3xl mx-auto">
            <Image
              src="/assets/projects/pathfinding_api/Pathfinder.gif"
              alt="top_view"
              width={0}
              height={0}
              sizes="768px"
              className="mx-auto w-full h-auto"
            />
            <p className="brand-text-color text-sm">
              <span className="text-red-400 font-bold">A* algorithm</span>{" "}
              (left) takes{" "}
              <span className="text-red-400 font-bold">2027ms</span> to find the
              shortest path while{" "}
              <span className="text-lime-500 font-bold">Greedy algorithm</span>{" "}
              (right) takes{" "}
              <span className="text-lime-500 font-bold">90ms</span> to find a
              slightly suboptimal solution. A* takes too long to be useful, so
              greedy implementation is used.
            </p>
          </div>
          <div className="col-span-1 flex flex-col max-w-md mx-auto">
            <Image
              src="/assets/projects/pathfinding_api/path_opt.gif"
              alt="top_view"
              width={0}
              height={0}
              sizes="448px"
              className="mx-auto w-full h-auto"
            />
            <p className="brand-text-color text-sm">
              Path post-processing optimizes length if a shorter route is found
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pathfinding;
