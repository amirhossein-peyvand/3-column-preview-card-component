import "../sass/Box.scss";

interface Props {
  icon: string;
  heading: string;
  description: string;
  color: string;
}

const Box = ({ icon, heading, description, color }: Props) => {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      <div>
        <img className="img" src={icon} alt="icon" />
        <h2 className="title">{heading}</h2>
        <p className="desc">{description}</p>
      </div>
      <button className="btn" style={{ color }}>
        Learn More
      </button>
    </div>
  );
};

export default Box;
