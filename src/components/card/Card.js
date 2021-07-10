import { LazyLoadImage } from "react-lazy-load-image-component";
const Card = ({ id, name, sprites, types, species }) => {
  const {
    other: {
      dream_world: { front_default: image },
    },
  } = sprites;

  const typesElement = (
    <div>
      {types.map((type) => {
        return <h4>{type.type.name}</h4>;
      })}
    </div>
  );

  return (
    <div key={`card-${id}`}>
      <small>{id}</small>
      <h3>{name}</h3>
      <div className="image__container">
        <LazyLoadImage
          alt="image-pokemon"
          height={150}
          src={image}
          visibleByDefault={false}
          delayMethod={"debounce"}
          effect="blur"
          className="img__thumbnail"
        />
      </div>
     {typesElement}
    </div>
  );
};
export default Card;
