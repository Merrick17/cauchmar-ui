"use client"
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiVisualstudio
} from "react-icons/si";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <SiNestjs size={40} color="#FFFF" />,
    name: "Nest JS"
  },
  {
    icon: <SiNextdotjs size={40} color="#FFFF" />,
    name: "Next JS"
  },
  {
    icon: <SiFlutter size={40} color="#FFFF" />,
    name: "Flutter"
  },
  {
    icon: <SiLaravel size={40} color="#FFFF" />,
    name: "Laravel"
  },
  {
    icon: <SiVisualstudio size={40} color="#FFFF" />,
    name: "Dotnet"
  },
  {
    icon: <SiMongodb size={40} color="#FFFF" />,
    name: "MongoDB"
  },
  {
    icon: <SiDocker size={40} color="#FFFF" />,
    name: "Docker"
  },
  {
    icon: <SiFigma size={40} color="#FFFF" />,
    name: "Figma"
  },
  {
    icon: <SiAdobephotoshop size={40} color="#FFFF" />,
    name: "Photoshop"
  },
  {
    icon: <SiAdobeillustrator size={40} color="#FFFF" />,
    name: "Illustrator"
  },
  {
    icon: <SiMysql size={40} color="#FFFF" />,
    name: "MySQL"
  },
  {
    icon: <SiAdobeindesign size={40} color="#FFFF" />,
    name: ""
  },
  {
    icon: <SiAdobeaftereffects size={40} color="#FFFF" />,
    name: ""
  },
  {
    icon: <SiAdobeindesign size={40} color="#FFFF" />,
    name: ""
  },
  {
    icon: <SiAdobeaftereffects size={40} color="#FFFF" />,
    name: ""
  }
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24  flex flex-col justify-center items-center "
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Stack
      </h2>

      <div className="px-5 py-[10px]  flex flex-row items-center overflow-hidden w-full  gap-6 rounded-lg border border-[rgba(168, 168, 168, 0.10)] shadow-lg">
        <Carousel
          opts={{
            align: "start"
          }}
          plugins={[
            Autoplay({
              delay: 2000
            })
          ]}
          className="w-full "
        >
          <CarouselContent>
            {sponsors.map(({ icon, name }: SponsorProps, ind: number) => (
              <CarouselItem className="basis-1/5" key={ind.toString()}>
                <div
                  key={name}
                  className="flex items-center gap-1 text-muted-foreground/60"
                >
                  <span>{icon}</span>
                  {/* <h3 className="text-xl  font-bold">{name}</h3> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
