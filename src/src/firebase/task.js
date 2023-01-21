import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot
} from "firebase/firestore"
import { getEmployee } from "./employee"
import firestore from "./firestore"

export async function createTask(task) {
  const taskCol = collection(firestore, "tasks")
  const docRef = await addDoc(taskCol, task)
  console.log("Document written with ID: ", docRef.id)
}

export async function getAllTasks() {
  const taskCol = collection(firestore, "tasks")
  const snapshot = await getDocs(taskCol)

  const tasks = []
  snapshot.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id})
  })

  return tasks
}

export async function deleteTask(id) {
  try {
    await deleteDoc(doc(firestore, "tasks", id))
  } catch (error) {
    console.error(error)
  }
}

export async function listenTaskChange(callback) {
  const tasks = []
  const taskCol = collection(firestore, "tasks")
  onSnapshot(taskCol, (snapshot) => {
    snapshot.forEach((doc) => {
      tasks.push({ ...doc.data(), id: doc.id })
    })
    console.log("DB changed")
    callback(tasks)
  })
}
