import React from 'react'
import { Link, browserHistory } from 'react-router'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>Hello<h1>
//         <p className="lead">React is dope yo</div>
//       </div>
//     )
//   }
// }


var App = (props) => <div className="row">
  <div className="col-sm-6">
    <h1>``~~~dafsdgadfxcbbsfda~~~~~~~~~~~~~``</h1>
    <br />
    <br />
    <br />
    <ul>
      <li><Link to="/">Home(((rqerqwe)*^&%$#@ERWQFSDTE#$@%$%ccm</Link></li>
      <li><Link to="Page1">Page1(((sdfac123!3244444444444444444geasdfasdf1.</Link></li>
      <li><Link to="Page2">Page2(((13242342343z123`1!!#$^%&*^%&*#$@ewge2</Link></li>
      <li><Link to="Page3">Page3(((ascdscdaswedakjadswdlnaewljnadsnjdfsage3</Link></li>

    </ul>
    <br />
      <br />
        <br />
    <button className="btn btn-block btn-success" onClick={() =>
    browserHistory.push('/')}>$ `` $ `` $ ``~~ C  L  E  A  R ~~`` $ `` $ `` $</button>
  </div>
  <div className="col-sm-6">
    {props.children}
  </div>
</div>

export default App
