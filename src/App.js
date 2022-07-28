import './App.css';
import carreerpic from "./undrawimage.svg"
import {useState} from "react"

function App() {

  const [jobtitle,setJobtitle] = useState("");
  const [request,setRequest] = useState("");
  const [joblocation,setJoblocation] = useState("");
  const [dateErection,setDateErection] = useState("");
  const [dateDismantle,setDateDismantle] = useState("");
  const [lengthMI,setLengthMI] = useState("");
  const [widthMI,setWidthMI] = useState("");
  const [heightMI,setHeightMI] = useState("");
  const [scaffold,setScaffold] = useState("");
  const [materialCount,setMaterialCount] = useState("");

  // const [items, setItems]=useState(
  //   {
  //     jobtitle,
  //     request,
  //     joblocation,
  //     dateErection,
  //     dateDismantle,
  //     dimension:{
  //       lengthMI,
  //       widthMI,
  //       heightMI,
  //       volume:function(){
  //         return this.lengthMI * this.widthMI * this.height
  //       }
  //     },
  //     scaffold,
  //     materialCount
  //   }
  //   )
    function handleValidation(){
      if(jobtitle && request && joblocation && dateErection && dateDismantle && lengthMI && widthMI && heightMI && scaffold && materialCount)
      {
      console.log({ 
        jobtitle,
        request,
        joblocation,
        dateErection,
        dateDismantle,
          lengthMI,
          widthMI,
          heightMI,
          volume:function(){
                   return this.lengthMI * this.widthMI * this.heightMI
                  },
        scaffold,
        materialCount})
      }else{
        alert("Please Mention all Details Correctly")
      }
    }

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-5 imagewidth">
            <img class="sathish" src={carreerpic} alt="imagedarw"></img>
          </div>

          <div class="col formwidth">
          <form class="row g-4 newone">
            <h1>Order Form</h1>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Job Title</label>
            <input onChange={function(e){
              setJobtitle(e.target.value)
            }} type="text" class="form-control" id="inputEmail4"/>
            <p style={{color:"red"}}>{jobtitle.length == 0 ? "Please Type the Job Title" : !isNaN(jobtitle) ? "Type the alphabets Please" : ""}</p>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Requested_By</label>
            <input onChange={function(e){
              setRequest(e.target.value);
            }} type="text" class="form-control" id="inputPassword4"/>
             <p style={{color:"red"}}>{request.length == 0 ? "Please tell Who Request" : !isNaN(request) ? "Type the alphabets Please" : ""}</p>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Job_Location</label>
            <input onChange={function(e){
              setJoblocation(e.target.value);
            }} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
             <p style={{color:"red"}}>{joblocation.length == 0 ? "Mention Job_Location" : !isNaN(joblocation) ? "Type the alphabets Please" : ""}</p>
          </div>
          
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Date Expected to Complete Erection</label>
            <input onChange={function(e){
              setDateErection(e.target.value);
            }} type="date" class="form-control" />
            <p style={{color:"red"}}>{dateErection.length == 0 ? "Mention Erection Date" : ""}</p>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Date Expected to Complete Dismantling</label>
            <input onChange={function(e){
              setDateDismantle(e.target.value);
            }} type="date" class="form-control" />
            <p style={{color:"red"}}>{dateDismantle.length == 0 ? "Mention Dismantle Date" : ""}</p>
          </div>
  
          <div className="mb">
              Dimension
          </div>
          <div class="input-group mb-1 dimensionwidth">
            <span class="input-group-text" id="basic-addon1">Length</span>
            <input onChange={function(e){
              setLengthMI(e.target.value);
            }} type="text" class="form-control" />
            <p style={{color:"red"}}>{lengthMI.length == 0 ? "Please Mention Length" : isNaN(lengthMI) ? "Type Numeric Value" : ""}</p>
          </div>
          <div class="input-group mb-1 dimensionwidth">
            <span class="input-group-text" id="basic-addon1">Width</span>
            <input onChange={function(e){
              setWidthMI(e.target.value);
            }} type="text" class="form-control" />
            <p style={{color:"red"}}>{widthMI.length == 0 ? "Please Mention Width" : isNaN(widthMI) ? "Type Numeric Value" : ""}</p>
          </div>
          <div class="input-group mb-1 dimensionwidth">
            <span class="input-group-text" id="basic-addon1">Height</span>
            <input onChange={function(e){
            setHeightMI(e.target.value);            
            }} type="text" class="form-control" />
            <p style={{color:"red"}}>{heightMI.length == 0 ? "Please Mention Width" : isNaN(heightMI) ? "Type Numeric Value" : ""}</p>
          </div>
       
          <div class="col-md-6">
            <label for="inputState" class="form-label">Scaffold Type</label>
            <select onChange={function(e){
               setScaffold(e.target.value); 
            }} id="inputState" class="form-select">
              <option disabled selected hidden>...Choose...</option>
              <option>Scafold_long</option>
              <option>Scafold_Medium</option>
              <option>Scafold_Short</option>
              <option>Scafold_Join</option>
            </select>
            <p style={{color:"red"}}>{scaffold == "" ? "Please Select Scaffold" : ""}</p>
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">Material_Count</label>
            <select onChange={function(e){
              setMaterialCount(e.target.value);
            }} id="inputState" class="form-select">
              <option disabled selected hidden>...Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <p style={{color:"red"}}>{materialCount == "" ? "Please Select Material Count" : ""}</p>
          </div>
        
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <button onClick={function(){
          handleValidation();
        }} class="btn btn-outline-secondary but1"  type="button">SUBIT</button>
        <button type="button" class="btn btn-outline-secondary but2">GET DATA</button>
        <button type="button" class="btn btn-outline-secondary but3">RESET</button>
        </div>
        </form>
          </div>
        </div>

    </div>
        
        
    </div>
  );
}

export default App;
