import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllStudents = async()=>{
    const students= await knx("students");
    return students;
}