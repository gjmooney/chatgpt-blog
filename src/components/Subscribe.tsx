type Props = {};
const Subscribe = (props: Props) => {
  return (
    <div className="text-center bg-wh-10 px-5 py-10">
      <h4 className="font-semibold text-base">Subscribe to our newsletter</h4>
      <p className="text-wh-500 my3 w-5/6 mx-auto">
        Enter email address for news and deals
      </p>
      <input
        className="text-center w-5/6 min-w-[100px] px-5 py-2 border-2"
        placeholder="Enter email address"
        type="text"
      />
      <button className="bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3">
        Subscribe
      </button>
    </div>
  );
};
export default Subscribe;
