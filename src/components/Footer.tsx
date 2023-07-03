const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 p-10 px1">
      <div className="justify-between mx-auto gap-16 sm:flex ">
        {/** first column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Blog of the fooder</h4>
          <p className="my-5">
            Gravida rutrum quisque non tellus orci ac. Consequat semper viverra
            nam libero justo laoreet sit. Sed libero enim sed faucibus. A cras
            semper auctor neque. Quisque id diam vel quam elementum pulvinar.
          </p>
          <p>ⓒ All Rights Reserved</p>
        </div>
        {/** second column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Gravida rutrum quisque.</p>
          <p className="my-5">Gravida rutrum quisque.</p>
          <p>Gravida rutrum quisque.</p>
        </div>
        {/** third column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Sed libero enim sed.</p>
          <p className="my-5">(555) 555 - 5555</p>
          <p>Gravida rutrum quisque.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
