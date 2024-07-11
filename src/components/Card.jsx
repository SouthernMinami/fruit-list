export const Card = (props) => {
    return (
        <div className="card">
            <img className="card-img" src={props.img} alt={props.title} />
            <div className="card-content">
                <h3 className="card-title">{props.name}</h3>
                <p>Calorie: {props.calorie}</p>
                <p>Macro: {props.macro}</p>
            </div>
        </div>
    )
}