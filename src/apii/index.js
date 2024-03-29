import Chance from "chance";
 const chance = Chance()


const fakeuserdata=()=>{
return   chance.name({ middle: true });
}

// fakeuserdata()
export default fakeuserdata
