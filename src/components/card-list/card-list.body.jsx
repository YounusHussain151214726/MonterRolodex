import { Component } from "react";
import Card from "../card/card.body";
import "./card-list.style.css";



// Functional Components

const CardList =(props)=>{
    const { persons } = props;
  return (
    <section className="card-list">
      {persons.map((person) => {
        return <Card person={person} key={person.id} />;
      })}
    </section>
  );
}





// Class Components


// class CardList extends Component {
//   render() {
//     const { persons } = this.props;
//     return (
//       <section className="card-list">
//         {persons.map((person) => {
//           return <Card person={person} />;
//         })}
//       </section>
//     );
//   }
// }

export default CardList;
