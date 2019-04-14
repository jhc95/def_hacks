// import React from "react";
// import constants from './Constants';
// import { Link } from "react-router-dom";


// export default class Offer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }
//     componentDidMount() {
//     }

//     componentWillUnmount() {
//     }

//     handleSubmit(evt) {
//         evt.preventDefault();
//         this.setState({ working: true, errorMessage: undefined });
//         // check authentication
//         // localStorage.getItem("email")
//         // load offer page
//     }

//     render() {
//         return (
//             <div className="container">
//                 <div className="signin">
//                     <header>
//                         <h1><font color="orange">Here are your offers!</font></h1>
//                     </header>
//                     {
//                         this.state.errorMessage &&
//                         <p className="alert alert-danger">{this.state.errorMessage}</p>
//                     }
//                     <ListGroup >
//                         <ListGroup.Item action href="#link1">
//                             Link 1
//                         </ListGroup.Item>
//                         <ListGroup.Item action href="#link2" disabled>
//                             Link 2
//                         </ListGroup.Item>
//                         {/* <ListGroup.Item action>This one is a button</ListGroup.Item> */}
//                     </ListGroup>,
//                 </div>
//             </div>
//         );
//     }
// }
