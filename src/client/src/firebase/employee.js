import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore"
import firestore from "./firestore"

export async function createEmployee(employee) {
  const employeeCol = collection(firestore, "employees")
  const docRef = await addDoc(employeeCol, employee)
  console.log("Document written with ID: ", docRef.id)
}

export async function getEmployee(id) {
  const docRef = doc(firestore, 'employees', id)
  const docSnap = await getDoc(docRef)

  return docSnap.data()
}

export async function getAllEmployees() {
  const employeeCol = collection(firestore, "employees")
  const snapshot = await getDocs(employeeCol)

  const employees = []
  snapshot.forEach((doc) => {
    employees.push({ ...doc.data(), id: doc.id })
  })

  return employees
}

export async function deleteEmployee(id) {
  try {
    await deleteDoc(doc(firestore, "employees", id))
  } catch (error) {
    console.error(error)
  }
}
