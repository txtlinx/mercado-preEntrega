//DESCOMPOCISION DE COMPONENTES
// export function Comment(props){
//     return(
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                     />
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {props.date}
//             </div>
//         </div>
//     )
// }

//COMMENT SIMPLIFICADO
// export function Comment(props){
//     return(
//         <div className="Comment">
//             <div className="UserInfo">
//                 <Avatar user={props.author}/>
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {props.date}
//             </div>
//         </div>
//     );
// }
//COMMENT SIMPLIFICADO V2
import { Avatar } from "../Avatar";
const  Card = ({ children }) =>{
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function Profile(props) {
  //const {name, img} = props;
  console.log(props)
    return (
      <Card>
          <Avatar
          {...props}
            // size={100}
            // name={name}
            // img={img}
            />
      </Card>

    );
  }
  