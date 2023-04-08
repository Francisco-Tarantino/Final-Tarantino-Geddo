import "../index.css"
const CardCongrat = ({userName}) =>{
    return (
        <div className="container">
            <p>Gracias {userName},</p>
            <p>Te contactaremos cuando antes vía mail!</p>
        </div>
    )
}
export default CardCongrat;