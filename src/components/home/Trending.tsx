import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`/post/${post?.id}`}
    >
      {/** relative w-full h-full needed to use fill on image */}
      <div className="z-0 relative w-full h-full ">
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
          src={post?.image}
          placeholder="blur"
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Post[];
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Urna porttitor rhoncus dolor purus. Facilisis magna etiam tempor orci
        </p>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className="col-span-2 row-span-2"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className="col-span-2 row-span-1"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className="col-span-1 row-span-1"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className="col-span-1 row-span-1"
          post={trendingPosts[3]}
        />
      </div>

      <p className="text-sm">
        Laoreet sit amet cursus sit amet dictum sit amet. Ipsum suspendisse
        ultrices gravida dictum fusce ut placerat. Luctus venenatis lectus magna
        fringilla urna. Vel orci porta non pulvinar. Turpis tincidunt id aliquet
        risus feugiat in ante metus.{" "}
      </p>
    </section>
  );
};
export default Trending;
