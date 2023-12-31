import Image from "next/image";
import Link from "next/link";
import Ad1 from "../../public/assets/ad-1.jpg";
import SocialLinks from "./SocialLinks";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block ">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div className="">
          <p>Sign In</p>
        </div>
      </nav>

      {/** Site header */}
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">Blog of the future</h1>
          <p className="text-sm mt-3">Blog about robots stealing the future</p>
        </div>
        <div className="basis-full relative w-auto h-32">
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt="advert-1"
            src={Ad1}
            placeholder="blur"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};
export default Navbar;
