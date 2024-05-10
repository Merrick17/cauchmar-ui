"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export const About = () => {
  const { theme } = useTheme();
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {theme == "light" ? (
            <Image
              src={"/assets/tech/Logo_Cauchm4r_Black.svg"}
              alt=""
              width={300}
              height={300}
              className="w-[300px] object-contain rounded-lg"
            />
          ) : (
            <Image
              src={"/assets/tech/Logo_Cauchm4r_White.svg"}
              alt=""
              width={300}
              height={300}
              className="w-[300px] object-contain rounded-lg"
            />
          )}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold uppercase">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Cauchm4r
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Cauchm4r is a cutting-edge web, mobile development, and
                marketing agency dedicated to helping businesses thrive in the
                digital world. With a team of skilled developers, designers, and
                marketing experts, we create innovative solutions tailored to
                each client's unique needs. Our mission is to deliver
                high-quality, user-friendly websites and mobile apps that drive
                engagement and generate results. Whether you're looking to
                enhance your online presence, boost your brand awareness, or
                increase your sales, Cauchm4r has the expertise and passion to
                turn your vision into reality. Partner with us and experience
                the power of digital transformation for your business.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
