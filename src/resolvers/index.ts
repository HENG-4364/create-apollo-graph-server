import { CreateStudent } from "./Students/Mutation/CreateStudent";
import { RemoveStudent } from "./Students/Mutation/RemoveStudent";
import { UpdateStudent } from "./Students/Mutation/UpdateStudent";
import { GetAllStudents } from "./Students/Query/GetAllStudents";
import { GetStudentDetail } from "./Students/Query/GetStudentDetail";
import { CreateSubject } from "./Subjects/Mutation/CreateSubject";
import { RemoveSubject } from "./Subjects/Mutation/RemoveSubject";
import { UpdateSubject } from "./Subjects/Mutation/updateSubject";
import { GetAllSubjects } from "./Subjects/Query/GetAllSubjects";
import { GetSubjectDetail } from "./Subjects/Query/GetSubjectDetail";


export const Resolvers = {
    Query: {
        Students: GetAllStudents,
        Subjects: GetAllSubjects,
        subject: GetSubjectDetail,
        student: GetStudentDetail,
    },
    Mutation: {

        CreateSubject: CreateSubject,
        UpdateSubject: UpdateSubject,
        RemoveSubject: RemoveSubject,
        CreateStudent: CreateStudent,
        UpdateStudent: UpdateStudent,
        RemoveStudent: RemoveStudent,


    }
}