import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 <div style={{display:"flex",width:"350px",margin:"auto",flexDirection:"column",border:"2px solid teal",height:"auto",marginTop:"150px"}}>
<div style={{display:"flex",justifyContent:"space-between",height:"50px",backgroundColor:"teal",width:"350px"}}>
  <button>V</button>
  <h3>root</h3>
  <button>Add Child</button>
</div>
<div style={{border:"2px solid teal", height:"auto",width:"320px",margin:"auto",marginTop:"5px",paddingBottom:"5px"}}>
<div style={{display:"flex",justifyContent:"space-between",height:"50px",backgroundColor:"teal",width:"320px",margin:"auto"}}>
  <button>V</button>
  <h3>child1</h3>
  <button>Add Child</button>
</div>
<div style={{display:"flex",justifyContent:"space-between",height:"50px",backgroundColor:"teal",width:"300px",margin:"auto",marginTop:"5px"}}>
  <button>V</button>
  <h3>child1-child1</h3>
  <button>Add Child</button>
</div>
<div style={{display:"flex",justifyContent:"space-between",height:"50px",backgroundColor:"teal",width:"300px",margin:"auto",marginTop:"5px"}}>
  <button>V</button>
  <h3>child1-child2</h3>
  <button>Add Child</button>
</div>


</div>
<div style={{display:"flex",justifyContent:"space-between",height:"50px",backgroundColor:"teal",width:"320px",margin:"auto",marginTop:"5px"}}>
  <button>V</button>
  <h3>child2</h3>
  <button>Add Child</button>
</div>
</div>

 
    </div>
  );
}

export default App;
