import { knx } from "src/connections/CreateKnexConnectios";

export const RemoveSubject = async (_, { id }: { id: number }, { }) => {
    const removeSubject = await knx("subjects").del().where({ id });
    if (removeSubject) {
        return true;
    } else {
        return false;
    }
}