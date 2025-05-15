
import './App.css'

function App() {

  return (
    <>
  
      <h1>Vite + React</h1>
      <Students></Students>
      <Students></Students>
      <Person></Person>
      <Devolper name="redoayn"tec="pyhton"></Devolper>
      
      <Devolper name="alim"tec="java"></Devolper>
      
      <Devolper name='mojumdaar'tec="react"></Devolper>
      
    </>
  )
}
function Students() {
  const name = "alim"
  const depart="EEE"
  return (
    <div className='students'>
      <p>name:{name}</p>
      <p>depart:{depart} </p>


    </div>

  )
}
function Devolper(props) {
 console.log(props)
  return (
    <div style={{ border: '2px', border: '2px solid red', color: 'orange', padding: '10px', borderRadius: '10px' }}><h1>name:{ props.name}</h1> 
      <h2>technology:{ props.tec}</h2>
</div>
  )
}
function Person() {
  const age = 34;
  const name = "alim"
  const personStyle = {
    color:' green',
    border: '2px'
    
  }
  return (
    <p style={personStyle} >i am person {name} {age}</p>
  )
}
function Sports() {
  const name = "argentina"
  const brand="messi"
  return (
   
<div>      <h2>football </h2>
      <p>my playing styel {name} {brand}</p>
      <ul>
        <li>hoku </li>
        <li>cricket</li>
      </ul>
   
   </div>
   
  )
}
function Pet() {
  return (
<div><p>my cat nemt </p>
    <h3>i like also dog</h3>
  </div>

  )

}
export default App
