import { knx } from "src/connections/CreateKnexConnectios";
import { SubjectInput } from "src/types/Subject";


export const CreateSubject =async(_,{input}:{input:SubjectInput},{})=>{
    const {subject_name}=input;
    const createSubject =await knx("subjects").insert({subject_name})
    if(createSubject){
        return true;
    }else{
        return false;
    }
} 