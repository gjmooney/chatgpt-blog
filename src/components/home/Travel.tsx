import { Post } from "@prisma/client";
import Card from "../Card";

type Props = {
  travelPosts: Post[];
};
const Travel = ({ travelPosts }: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          TRAVEL
        </h4>
        <p className="font-bold text-2xl">New travel experiences </p>
      </div>

      {/** cards row */}
      <div className="sm:flex justify-between gap-8">
        <Card
          post={travelPosts[0]}
          className="basis-1/3  mt-5 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          post={travelPosts[1]}
          className="basis-1/3  mt-5 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          post={travelPosts[2]}
          className="basis-1/3  mt-5 sm:mt-0"
          imageHeight="h-80"
        />
      </div>
      <Card
        post={travelPosts[3]}
        className=" sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
      />
    </section>
  );
};
export default Travel;
