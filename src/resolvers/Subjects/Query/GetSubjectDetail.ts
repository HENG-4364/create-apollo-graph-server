import { knx } from "src/connections/CreateKnexConnectios"

export const GetSubjectDetail = async (_, { id }: { id: number }, { }) => {
    const getSubjectDetail = await knx("subjects").where({ id }).first();
    return getSubjectDetail;

}
