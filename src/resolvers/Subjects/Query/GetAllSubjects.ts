import { knx } from "src/connections/CreateKnexConnectios"

export const GetAllSubjects =async()=>{
    const getAllSubjects=await knx("subjects")
    return getAllSubjects;
}