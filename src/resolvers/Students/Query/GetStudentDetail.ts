import { knx } from "src/connections/CreateKnexConnectios"

export const GetStudentDetail = async (_, { id }: { id: number }, { }) => {
    const getStudentDetail = await knx("students").where({ id }).first();
    const subject = await knx("subjects").where({ id:getStudentDetail.subject_id }).first();
    return {
        ...getStudentDetail,
        subject_id:subject
    };
}