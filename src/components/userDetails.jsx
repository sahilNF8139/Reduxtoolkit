import React, { useEffect, useState } from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import "./UserDetails.css"
// import fakeuserdata from "../api";
import { useDispatch , useSelector } from "react-redux";
// import { adduser } from "./store/slice/Slice";
import DisplayUser from "./Displayuser";
import {login_API , postAPI ,newpostAPI,NowAPi_get} from "../API/Action/globalAction";

const UserDetails = () => {
const dispatch=useDispatch()

// const [name , setName] = useState("");
const[id,setid]=useState("")
console.log("thdi id id passed",id);

let Loginreducer = useSelector(state => state.globalReducer.Loginreducer);
console.log("Loginreducer", Loginreducer)


let rowreducer = useSelector(state => state.globalReducer.rowreducer);
console.log("nowreducer", rowreducer)



let basicreducer = useSelector(state => state.globalReducer.basicreducer);
console.log("basic", basicreducer)


let duction = useSelector(state => state.globalReducer.duction);
console.log("duction api", duction)




useEffect(()=> {

  let data = {
    title: 'sahil khalani',
    body: 'web devloping',
    userId: 1,
  }
  dispatch(newpostAPI (data))

  let data2 = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  dispatch(postAPI(data2))

  // dispatch( NowAPi_get())

},[])


function nowhandleclick(){  
dispatch(NowAPi_get(id))
}


// function handleClick() {
//   let data = {
//     title: 'foo',
//     body: 'bar',
//     userId: name,
//   }
//   dispatch(postAPI(data))
// }

  // const addnewuser=(name)=>{
  //   console.log("userDetail",name);
  //   dispatch(adduser(name))
  // }


  return (
   <div>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          {/* <button className="btn add-btn" onClick={()=>addnewuser(fakeuserdata())}>Add New Users</button> */}
        </div>
        <ul>
        <input type="text" placeholder="API calling" value={id} onChange={(e)=> setid(e.target.value)} ></input>

        </ul>
        <hr/>
        <button onClick={()=> nowhandleclick()}>GO TO API</button>

      </div>
    </div>
  );
};


export default UserDetails;

