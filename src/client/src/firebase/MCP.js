import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  getDoc
} from "firebase/firestore"
import firestore from "./firestore"

export async function createMCP(MCP) {
  const MCPCol = collection(firestore, "MCPs")
  const docRef = await addDoc(MCPCol, MCP)
  console.log("Document written with ID: ", docRef.id)
}

export async function getMCP(id) {
  const docRef = doc(firestore, 'MCPs', id)
  const docSnap = await getDoc(docRef)

  return docSnap.data()
}

export async function getAllMCPs() {
  const MCPCol = collection(firestore, "MCPs")
  const snapshot = await getDocs(MCPCol)

  const MCPs = []
  snapshot.forEach((doc) => {
    MCPs.push({ ...doc.data(), id: doc.id })
  })

  return MCPs
}

export async function deleteMCP(id) {
  try {
    await deleteDoc(doc(firestore, "MCPs", id))
  } catch (error) {
    console.error(error)
  }
}

export async function listenMCPChange(callback) {
  const MCPs = []
  const MCPCol = collection(firestore, "MCPs")
  onSnapshot(MCPCol, (snapshot) => {
    snapshot.forEach((doc) => {
      MCPs.push({ ...doc.data(), id: doc.id })
    })
    console.log("DB changed")
    callback(MCPs)
  })
}
