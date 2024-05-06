import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="pk-container flex flex-col-reverse gap-10 md:flex-row md:items-center duration-300">
      <div className="">
        <h2 className="text-primary text-4xl md:text-6xl font-extrabold cr-text-gradient duration-300">
          Smart property search
        </h2>
        <h6 className="text-xl md:text-2xl font-semibold mt-2 mb-8 duration-300">
          India&apos;s Premier Property Marketplace
        </h6>
        <div className="flex flex-col sm:flex-row gap-5">
          <Button className="">Find properties</Button>
          <Button className="" variant="secondary">
            List your property
          </Button>
        </div>
      </div>

      <div className="relative w-full md:w-3/4 h-96 duration-300">
        <Image
          className="object-cover"
          src="https://images.pexels.com/photos/7579042/pexels-photo-7579042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Couple looking at their new home"
          fill
        />
      </div>
    </section>
  );
}
