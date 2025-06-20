 import { element } from "prop-types";
import React,{ useState } from "react"
 
 function Todoapp(){ 
    const [Todoapp , setTask] = useState(["eat breakfast","take a shower","work out"]);

    const [newtask , setnewTask] = useState("");

    function handleinputtask(event){
        setnewTask(event.target.value);

    }
    function addtask(){


        if(newtask.trim() !== ""){
        setTask( t => [...t,newtask]);
        setnewTask("");
        }
        else{
            window.alert("please add task")
        }
        

    }
    function deletetask(index){
        

        const upadatetasks = Todoapp.filter((_,  i) => i  !== index);
        setTask(upadatetasks);
    }

    function movetaskup(index){


        if (index > 0){
            const upadatetasks = [...Todoapp ];

            [upadatetasks [index] ,upadatetasks [index -1]] = 
            [upadatetasks [index-1] ,upadatetasks [index]];
            setTask(upadatetasks)
        }

    }
     function movetaskdown(index){


          if (index < Todoapp.length - 1){
            const upadatetasks = [...Todoapp ];

            [upadatetasks [index] ,upadatetasks [index + 1]] = 
            [upadatetasks [index   + 1] ,upadatetasks [index]];
            setTask(upadatetasks)
        }
        
    }
    
    return(
   <div  className="to-do-list">


    <h1>To-Do-list</h1>
    <div>
        <input  type="text" placeholder="Enter A task..." value={newtask}  onChange={handleinputtask}/>

        <button  className="add-button"onClick={addtask}>add</button>
    </div>
    <ol>  {Todoapp.map((Todoapp,index) =><li key={index}><span className="task">{Todoapp}
        <button className="delete-button"   onClick={() =>  deletetask(index)}>delete</button>
        <button className="move up"  onClick={() =>  movetaskup(index)}>move up</button>
        <button className="move down"  onClick={() =>  movetaskdown(index)}>move down</button></span></li>)}
    </ol>
    

    </div>
    )

 }
// Debug: Log when Todoapp renders
console.log('📦 Todoapp rendered!');

 export default Todoapp 
