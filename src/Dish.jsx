

function Dish(props) {
    return(
        <div className="image-card">
        <img src={props.image} alt={props.title} className="image" />
        <h2 className="image-title">{props.title}</h2>
        <p className="image-description">{props.description}</p>
        </div>
    );
};

export default Dish;