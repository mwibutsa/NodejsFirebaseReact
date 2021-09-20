import { Patient } from "../models";
import { addDoc, getDoc } from "firebase/firestore";

export const addPatient = async (req, res) => {
  await addDoc(Patient, req.body);
  return res.json({
    message: "Patient added",
  });
};

export const getPatients = async (req, res) => {
  const patients = await getDoc(Patient);
  return res.json({
    data: patients,
  });
};
