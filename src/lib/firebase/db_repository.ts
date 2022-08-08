import { db } from "./client";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    Timestamp,
} from "firebase/firestore";
import { recruitDataSnap, recruitIdSnap } from "$lib/model/store";

const recruit = "recruit";

async function getStatus() {
    type StatusData = {
        statusStr: string;
    };

    const docRef = doc(db, "status", "status");
    const docSnap = await getDoc(docRef);
    const status = docSnap.data() as StatusData;
    console.log(status);
    return status;
}
type RecruitData = {
    title: string;
    thumbnail: string;
    media1: string;
    media2: string;
    media3: string;
    media4: string;
    media5: string;
    place: string;
    deadline: Timestamp;
    beginTime: Timestamp;
    endTime: Timestamp;
    author: string;
    recruitmentNum: number;
    recruitStatus: string;
    requirements: string;
    detail: string;
};

async function getRecruitData(): Promise<void> {
    const q = query(collection(db, recruit));
    const querySnapshot = await getDocs(q);
    const docData: RecruitData[] = [];
    const docId: string[] = [];
    querySnapshot.forEach((doc) => {
        docData.push(doc.data() as RecruitData);
        docId.push(doc.id);
    });
    console.log(docData);
    console.log(docId);
    recruitDataSnap.set(docData);
    recruitIdSnap.set(docId);
}

async function addRecruitData(data: RecruitData) {
    try {
        const docRef = collection(db, "recruit");
        await addDoc(docRef, data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    getRecruitData();
}

async function deleteRecruitData(docId: string) {
    if (docId != "sample") {
        await deleteDoc(doc(db, recruit, docId));
    } else {
        console.log("no!");
    }
    getRecruitData();
}

export { getStatus, getRecruitData, addRecruitData, deleteRecruitData };
export type { RecruitData };
