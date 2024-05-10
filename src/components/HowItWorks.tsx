import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Strategic Planning",
    description:
      "Tailored strategies to align your website with your business goals, ensuring a purposeful online presence.",
  },
  {
    icon: <MapIcon />,
    title: "Innovative Technologies",
    description:
      "Leveraging the latest technologies and trends to integrate interactive elements, enhance user engagement, and stay ahead of the competition.",
  },
  {
    icon: <PlaneIcon />,
    title: "SEO Optimization",
    description:
      "Implementing advanced SEO techniques to boost your website's visibility and drive organic traffic.",
  },
  {
    icon: <GiftIcon />,
    title: "Ongoing Support",
    description:
      "Dedicated support and maintenance services to keep your website running smoothly and up-to-date.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
      Whatever you need, We have got it
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      We have 35 services to handle your creative needs but,if you can't find something that fits,talk to one of our experts .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
