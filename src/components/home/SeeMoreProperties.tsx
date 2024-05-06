import { Button } from "../ui/button";
import { LucideHome, MoveRight } from "lucide-react";
import { seeMorePropertiesCards } from "./helpers";

export default function SeeMoreProperties() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="pk-container">
        <div className="flex items-center gap-5 mb-10 ">
          <h2 className="flex items-center text-4xl md:text-6xl font-extrabold cr-text-gradient duration-300">
            See more properties
          </h2>
          <MoveRight size={40} strokeWidth={3} />
        </div>
        <div className="flex flex-wrap gap-10 duration-300">
          {seeMorePropertiesCards.map((card) => (
            <div
              key={card.id}
              className="bg-background text-foreground p-8 rounded-lg hover:-translate-y-1 duration-300"
            >
              <LucideHome className="mb-3 text-primary" size={40} />
              <h4 className="text-xl font-bold">{card.title}</h4>
              <p className="text-foreground/80 mt-2 mb-5 max-w-xs">
                {card.description}
              </p>
              <Button variant="outline">View properties</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
