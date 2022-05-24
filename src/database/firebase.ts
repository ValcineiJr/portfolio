import { initializeApp } from 'firebase/app';

import { getDatabase, ref, onValue, set } from 'firebase/database';

import {
  getFirestore,
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  getDocs,
} from 'firebase/firestore';

import firebaseConfig from 'src/database/firebaseConfig';

import { Project } from '@/@types/any';

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, `projects`));

  const data: any = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
};

const addProject = async (data: any) =>
  await addDoc(collection(db, `projects`), data);

export { getProjects, addProject };
