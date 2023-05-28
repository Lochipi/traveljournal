import { CardStyled } from "./styles.jsx/Card.styled"

function App(props){
    return(
        <>
            <CardStyled>
                <div className="image--div">
                    <img src={`${props.imageUrl}`}/> 
                </div>
                <div className="div--content">
                    <div className="location-content">
                        <h5>📍 {props.location}</h5>
                        <p><a href={`${props.mapurl}`}>View on google map</a></p>
                    </div>
                    <div className="info">
                       <h2 className="title">{props.title}</h2>
                       <h6 className="date">{props.startDate} - {props.endDate}</h6>
                       <p className="desc">
                         {props.description}
                       </p> 
                    </div>
                </div>
            </CardStyled>
            
        </>
    )
}


export default App