import { knx } from "src/connections/CreateKnexConnectios";

export const RemoveStudent = async(_,{id}:{id:number},{})=>{
    const removeStudent =await knx("students").del().where({id});
    if(removeStudent){
        return true;

    }else {
        return false;
    }
}