import { knx } from "src/connections/CreateKnexConnectios"

export const GetStudentDetail = async (_, { id }: { id: number }, { }) => {
    const getStudentDetail = await knx("students").where({ id }).first();
    return getStudentDetail;
}