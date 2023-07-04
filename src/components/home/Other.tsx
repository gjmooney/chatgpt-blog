import { Post } from "@prisma/client";
import Card from "../Card";

type Props = {
  otherPosts: Post[];
};
const Other = ({ otherPosts }: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />

      <p className="font-bold text-2xl my-8">Other trending posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          post={otherPosts[0]}
          className=" mt-5 sm:mt-0 "
          imageHeight="h-80"
        />
        <Card
          post={otherPosts[1]}
          className=" mt-5 sm:mt-0 "
          imageHeight="h-80"
        />
        <Card
          post={otherPosts[2]}
          className=" mt-5 sm:mt-0 "
          imageHeight="h-80"
        />
        <Card
          post={otherPosts[3]}
          className=" mt-5 sm:mt-0 "
          imageHeight="h-80"
        />
      </div>
    </section>
  );
};
export default Other;
