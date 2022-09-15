import { currentScoreData } from "$lib/model/store";
import {
    collection,
    query,
    onSnapshot,
    getDocs,
    orderBy,
} from "firebase/firestore";
import { db } from "./client";

export type ScoreData = {
    charId: number;
    classId: string;
    isKata: boolean;
    nickname: string;
    score: number;
};

const q = query(collection(db, "data"), orderBy("score", "desc"));

onSnapshot(q, (querySnapshot) => {
    const scoreData: ScoreData[] = [];
    querySnapshot.forEach((doc) => {
        scoreData.push(doc.data() as ScoreData);
    });
    currentScoreData.set(scoreData);
    console.log("updated received! => ", scoreData);
});

async function getData() {
    const querySnapshot = await getDocs(q);
    const scoreData: ScoreData[] = [];
    querySnapshot.forEach((doc) => {
        scoreData.push(doc.data() as ScoreData);
    });
    currentScoreData.set(scoreData);
    console.log("callable data received! => ", scoreData);
}

export { getData };
