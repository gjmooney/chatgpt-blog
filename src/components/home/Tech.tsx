import { Post } from "@prisma/client";
import Card from "../Card";

type Props = {
  techPosts: Post[];
};
const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-500 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">Latest news in tech</p>
      </div>

      <div className="sm:grid grid-cols-2 grid-rows-3 gap-8 my-5">
        {/** large card */}
        <Card
          post={techPosts[0]}
          className=" col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
        />
        {/** small cards */}
        <Card
          post={techPosts[1]}
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[2]}
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[3]}
          className=" col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
      </div>
    </section>
  );
};
export default Tech;
