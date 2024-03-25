import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import EmbedForm from "./Embedform";



function App() {

  const [loginMarginLeft,setLoginMarginLeft] = useState('0%');


  const navembed = () => {
    setLoginMarginLeft('0%');
  };

  const navextract = () => {
    setLoginMarginLeft('-50%');
  };

  const TextLoginStyle = {
    marginLeft : loginMarginLeft
  };
  

  return (

    // <EmbedForm />
 
    <div className="wrapper">
      <div className="title-text">
        <div className="title embed" style={TextLoginStyle}>Embed Form</div>
        <div className="title extract">Extract Form</div>
      </div>
      <div className="form-container">
        <div class="slide-controls">
          <input type="radio" name="slide" id="embed" onClick={navembed} />
          <input type="radio" name="slide" id="extract" onClick={navextract} />
          <label for="embed" class="slide embed">
            Embed
          </label>
          <label for="extract" class="slide extract">
             Extract
          </label>
           <div class="slider-tab"></div>
         </div>
         <div class="form-inner">
           
           {/* <form action="#" class="embed" style={TextLoginStyle}>
             <pre></pre>
             <div class="field">
              <input type="file"  />
             </div>
             <div class="field">
               <input type="text" placeholder="secret message here" required />
             </div>
             
             <div class="field btn">
               <div class="btn-layer"></div>
               <input type="submit" value="Embed" />
             </div>
           </form> */}

           <EmbedForm />

           <EmbedForm />

           {/* <form action="#" class="extract">
            
             
           </form> */}
        </div>
       </div>
     </div>
  );
}

export default App;
