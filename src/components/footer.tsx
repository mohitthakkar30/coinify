const Footer = () => {
    return (
      <footer className=" w-full p-4 font-medium bg-[#f5f5f5] dark:bg-[#161527]">
        <div className="pl-[80px] mx-auto max-w-[1080px] lg:pl-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              {/* TODO: Add the logo here. */}
              <span className="text-md text-[#666666] hover:text-[#a1a1a1] sm:text-center dark:text-[#605e8a]">
                <a href="">
                  Coinify
                </a>
              </span>
              <a
                href="https://github.com/mohitthakkar30/coinify"
                target="_blank"
                className="text-[#666666] hover:text-[#a1a1a1] dark:text-[#605e8a]"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <span className="text-md text-[#666666] hover:text-[#a1a1a1] sm:text-center dark:text-[#605e8a]">
              © {new Date().getFullYear()}{" "}
              <a href="" className="hover:underline">
                Coinify
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  