import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-sky-700 text-base-content rounded">
      <div className="flex">
        <img
          className="w-12 rounded-md"
          src="https://i.ibb.co/F78Kw2q/checklist-7083603.png"
          alt=""
        />
        <a className="btn btn-ghost normal-case text-xl">TaskCraft</a>
      </div>
      <nav className="grid grid-flow-col gap-4 text-xl font-semibold">
        <a className="link link-hover hover:text-red-500">About us</a>
        <a className="link link-hover hover:text-red-500">Contact</a>
        <a className="link link-hover hover:text-red-500">Jobs</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaFacebook className="text-blue-600"></FaFacebook>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FaInstagram className="text-orange-700"></FaInstagram>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600"></FaYoutube>
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-blue-500"></FaTwitter>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by TaskCraft LTD</p>
      </aside>
    </footer>
  );
};

export default Footer;
