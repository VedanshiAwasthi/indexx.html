import './App.css';
// import Header from "./components/header";  // or import hihi from "./components/header";  if there is a single default component to kisi b name s import kr skte h.
// import {Header1, Header2} from "./components/header";  //if there are multiple components import them wd their resp. names
import {Header}  from './components/header';
import Home from "./components/home";

// function Mycomponent(props){
//   return <div className={props.divNo}>{props.name}</div>
// }

// function App() {
//   return (
//    <div className="custom" >
//      Hello <Mycomponent name={"Vedanshi"} divNo ={"div1"} /> <Mycomponent name="Tiya" divNo={"div2"}/> Guys
//    </div>
//   );
// }

// function Mycomponent({divNo , name , income=10}){
//   return <div className={divNo}>{name} : ${income}</div>
// }

// function App() {
//   return (
//    <>
//     <div className="custom" >
//       Hello <Mycomponent name={"Vedanshi"} divNo ={"div1"} income={"1000"}/> <Mycomponent name="Tiya" divNo={"div2"} /> Guys
//     </div>

//      <hr/>
//    </>
//   );
// }


function App(){
  // return <div>Hello guys <Header/> <Header1/> <Header2/></div>;
  return <div><Header/> <Home/></div>
}

export default App;
