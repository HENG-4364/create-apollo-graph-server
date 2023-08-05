import { knx } from "src/connections/CreateKnexConnectios";
import { SubjectInput } from "src/types/Subject";
export const UpdateSubject =async(_,{id,input}:{id:number,input:SubjectInput},{})=>{
const {subject_name}=input;
const updateSubject =await knx("subjects").update({subject_name}).where({id})
if(updateSubject){
    return true;
}else{
    return false;
}
}