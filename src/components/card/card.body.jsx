import { Component } from "react";
import './card.style.css';


//functional Component

const Card =(props)=>{
   const {id , name , email } = props.person
   return (
    <div className="card-container" key={id}>
    <img src={`https://robohash.org/man/${id}?set=set2&size=180x180`} alt={`person ${name}`} />
    <h1>{name}</h1>
        <h4>{email}</h4>
        </div>

       )    
}




// Class Components


// class Card extends Component{
//     render(){
//         const { id , name , email} = this.props.person
//         return (
//             <div className="card-container" key={id}>
//             <img src={`https://robohash.org/man/${id}?set=set2&size=180x180`} alt={`person ${name}`} />
//             <h1>{name}</h1>
//                 <h4>{email}</h4>
//                 </div>
//         )
//     }

// }

export default Card;