import { currentScoreData, isLoading } from "$lib/model/store";
import {
    collection,
    query,
    onSnapshot,
    getDocs,
    orderBy,
} from "firebase/firestore";
import { db } from "./client";

export type ScoreData = {
    rank: number;
    charId: number;
    classId: string;
    isKata: boolean;
    nickname: string;
    score: number;
};

const q = query(collection(db, "data"), orderBy("score", "desc"));

const getSnapshot = () =>
    onSnapshot(q, (querySnapshot) => {
        const scoreData: ScoreData[] = [];

        let rank = 1;
        querySnapshot.forEach((doc) => {
            scoreData.push({
                rank: rank,
                charId: doc.data().charId,
                classId: doc.data().classId,
                isKata: doc.data().isKata,
                nickname: doc.data().nickname,
                score: doc.data().score,
            } as ScoreData);
            rank++;
        });
        currentScoreData.set(scoreData);
        console.log("updated received! => ", scoreData);
        isLoading.set(false);
    });

async function getData() {
    const querySnapshot = await getDocs(q);
    const scoreData: ScoreData[] = [];

    let rank = 1;
    querySnapshot.forEach((doc) => {
        scoreData.push({
            rank: rank,
            charId: doc.data().charId,
            classId: doc.data().classId,
            isKata: doc.data().isKata,
            nickname: doc.data().nickname,
            score: doc.data().score,
        } as ScoreData);
        rank++;
    });

    currentScoreData.set(scoreData);
    console.log("callable data received! => ", scoreData);
}

export { getSnapshot, getData };
