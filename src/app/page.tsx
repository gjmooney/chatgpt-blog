import Sidebar from "@/components/Sidebar";
import Subscribe from "@/components/Subscribe";
import Other from "@/components/home/Other";
import Tech from "@/components/home/Tech";
import Travel from "@/components/home/Travel";
import Trending from "@/components/home/Trending";
import { Post } from "@prisma/client";
import { prisma } from "./api/client";

// refresh post info every 120 seconds
export const revalidate = 120;

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travelPosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }

      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else {
        otherPosts.push(post);
      }
    });

    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [trendingPosts, techPosts, travelPosts, otherPosts] = formatPosts();

  return (
    <>
      <main className="px-10 leading-7 ">
        <Trending trendingPosts={trendingPosts} />
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            <Tech techPosts={techPosts} />
            <Travel travelPosts={travelPosts} />
            <Other otherPosts={otherPosts} />
            <div className="hidden md:block">
              <Subscribe />{" "}
            </div>
          </div>
          <div className="basis-1/4">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}
