import { knx } from "src/connections/CreateKnexConnectios";
import { StudentInput } from "src/types/Students";
export const CreateStudent = async(_,{input}:{input:StudentInput},{})=>{
const {student_name,subject_id,gender}= input;
 const createStudent = await knx("students").insert({student_name,subject_id,gender})
 if(createStudent){
    return true;

 }else{
    return false;
 }
}