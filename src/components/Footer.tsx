import Image from "next/image";
import { LogoIcon } from "./Icons";
import Link from "next/link";

export const Footer = () => {
  const routeList = [
    {
      href: "#features",
      label: "Home"
    },
    {
      href: "#testimonials",
      label: "Services"
    },
    {
      href: "#pricing",
      label: "Support"
    },
    {
      href: "#faq",
      label: "About"
    }
  ];
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a href="/" className="font-bold text-xl flex">
            <Image
              src={"/assets/logo_white.svg"}
              alt=""
              width={250}
              height={250}
            />
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <Link
              href="https://github.com/CAUCHM4R"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Github
            </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/cauchm4r.llc"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </Link>
          </div>

          <div>
            <Link
              href="https://www.facebook.com/cauchm4r.llc"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </Link>
          </div>
          <div>
            <Link
              href="mailto:contact@cauchm4r.com"
              className="opacity-60 hover:opacity-100"
            >
              contact@cauchm4r.com
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {routeList.map((elm, ind) => (
            <div>
              <Link
                href={elm.href}
                key={ind.toString()}
                className="opacity-60 hover:opacity-100"
              >
                {elm.label}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>&copy; 2024 Reserved to Cauch4mar LLC </h3>
      </section>
    </footer>
  );
};
