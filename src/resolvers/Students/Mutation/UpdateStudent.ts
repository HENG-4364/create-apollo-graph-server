import { knx } from "src/connections/CreateKnexConnectios";
import { StudentInput } from "src/types/Students";

export const UpdateStudent =async(_,{id,input}:{id:number,input:StudentInput},{})=>{
    const {student_name,subject_id,gender}= input;
    const updateStudent = await knx("students").update({student_name,subject_id,gender}).where({id});
    if(updateStudent){
        return true;

    }else{
        return false;
    }
}