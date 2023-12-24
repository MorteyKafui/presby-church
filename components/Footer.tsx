import {
  Facebook,
  Instagram,
  Twitch,
  TwitchIcon,
  Twitter,
  TwitterIcon,
  X,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-800 from-35% to-sky-800 text-white text-xl">
      <div className="max-w-6xl mx-auto p-10 container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        <Image
          src="/images/pcglogo.png"
          width={200}
          height={200}
          alt="pcg logo"
          className="flex justify-center items-center"
        />
        <div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        <div>
          <h3 className="font-bold mb-5">Contact Us</h3>
          <address>
            <ul className="grid text-sm grid-cols-1 lg:grid-cols-3">
              <li>Email: info@pcgonline.org</li>
              <li>Phone: 233 (0) 302-664761</li>
              <li>Location: Presbyterian Church of Ghana</li>
              <li>Head office, osu-Kuku hill</li>
              <li>Postal Address: Post Office Box GP</li>
              <li>1800, Accra Digital Address: GA-081-9345</li>
            </ul>
          </address>
        </div>
        <div className="flex justify-between items-center gap-5">
          <a
            className="hover:text-sky-300 hover:-translate-y-1 hover:transition-all duration-200 ease-in"
            href="#"
          >
            <Facebook size={30} />
          </a>
          <a
            className="hover:text-sky-300 hover:-translate-y-1 hover:transition-all duration-200 ease-in"
            href="#"
          >
            <Instagram size={30} />
          </a>
          <a
            className="hover:text-sky-300 hover:-translate-y-1 hover:transition-all duration-200 ease-in"
            href="#"
          >
            <Twitter size={30} />
          </a>
          <a
            className="hover:text-sky-300 hover:-translate-y-1 hover:transition-all duration-200 ease-in"
            href="#"
          >
            <Youtube size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
