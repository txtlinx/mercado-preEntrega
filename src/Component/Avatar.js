export function Avatar(props) {
    return (
      <img 
        className="Avatar"
        src={props.img}
        alt={props.name}
        width={props.size}
        height={props.size}
      />
    );
  }