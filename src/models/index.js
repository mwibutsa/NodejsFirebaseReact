import { getFirestore, collection } from "@firebase/firestore";

const db = getFirestore();

export const Patient = collection(db, "Patients");
export const Admins = collection(db, "Admins");
