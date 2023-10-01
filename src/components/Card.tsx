import luxury from "../assets/icon-luxury.svg";
import sedans from "../assets/icon-sedans.svg";
import suvs from "../assets/icon-suvs.svg";
import "../sass/Card.scss";
import Box from "./Box";

const Card = () => {
  const desc1 =
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";

  const desc2 =
    "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.";

  const desc3 =
    "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.";

  return (
    <div className="card">
      <Box
        icon={sedans}
        heading="SEDANS"
        description={desc1}
        color="hsl(31, 77%, 52%)"
      />
      <Box
        icon={suvs}
        heading="SUVS"
        description={desc2}
        color="hsl(184, 100%, 22%)"
      />
      <Box
        icon={luxury}
        heading="LUXURY"
        description={desc3}
        color="hsl(179, 100%, 13%)"
      />
    </div>
  );
};

export default Card;
