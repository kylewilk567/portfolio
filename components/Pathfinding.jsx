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
          className="absolute top-1 right-4"
        />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 mt-4">
        <div className="xl:col-span-1 flex flex-col justify-between">
          <Image
            src="/assets/projects/pathfinding_api/top_view_mesa.gif"
            alt="top_view"
            width="0"
            height="0"
            layout="responsive"
            className="pr-4 max-w-md"
          />
          <Image
            src="/assets/projects/pathfinding_api/village_path.gif"
            alt="top_view"
            width="0"
            height="0"
            layout="responsive"
            className="pr-4 mt-4 max-w-md"
          />
        </div>

        <p className="xl:col-span-2">
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
          time. A time comparison between the two revealed that A* is not
          suitable due to its speed limitations. <br />
          <br />
          To enhance the greedy algorithm&apos;s shortcomings, a post-processing
          step was introduced, allowing manual adjustments to the path after its
          initial discovery. This project showcases my commitment to optimizing
          pathfinding in complex 3D environments, addressing a range of
          real-world applications.
        </p>
      </div>
    </>
  );
};

export default Pathfinding;
