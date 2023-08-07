import { knx } from "src/connections/CreateKnexConnectios";

export const GetAllStudents = async () => {
    const students = await knx("students");
    const subjects = await knx("subjects");
    return students.map(async (item) => {
        const subject = subjects.find((x) => x.id === Number(item.subject_id));
        console.log(subject)
        return {
            ...item,
            subject_id: subject
        }
    })
}