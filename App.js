import './App.css';

function App() {


  function calculate() {

    var a = document.getElementById("field1").value

    document.getElementById("field2").value = a;

    document.getElementById("field5").value = a;
  }

  function calculate1() {
    var a = document.getElementById("field1").value

    var b = document.getElementById("field3").value

    document.getElementById("field4").value = b;



    document.getElementById("field6").value = a + "," + b;
  }



  return ( 



    <div>

      <center>
        <label>Input 1 : </label> <br /> <br />
        <input type="text" id="field1" onBlur={calculate}></input> <br /> <br />

        <input type="text" id="field2"></input>   <br /> <br />


        <label> Input 2 : </label> <br /> <br />

        <input type="text" id="field3" onBlur={calculate1}></input>  <br /> <br />

        <input type="text" id="field4"></input> <br /> <br />

        <label> Output 1 : </label> <br /> <br />

        <input type="text" id="field5"></input> <br /> <br />

        <label> Output 2 : </label> <br /> <br />

        <input type="text" id="field6"></input> <br /> <br />

      </center>

    </div>


  );

}


export default App;
