import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  limit,
} from 'firebase/firestore';

import firebaseConfig from 'src/database/firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const getAllProjects = async () => {
  const Collectionref = collection(db, `projects`);
  const querySnapshot = await getDocs(Collectionref);

  const data: any = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

const getLast4Projects = async () => {
  const Collectionref = collection(db, `projects`);

  const q = query(Collectionref, limit(4));

  const querySnapshot = await getDocs(q);

  const data: any = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

const addProject = async (data: any) =>
  await addDoc(collection(db, `projects`), data);

export { getAllProjects, addProject, getLast4Projects };
