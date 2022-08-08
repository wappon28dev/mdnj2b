import { app, db } from "./client";
import { doc, Firestore, getDoc, Timestamp } from "firebase/firestore";
import { firestoreStatus, sampleData } from "$lib/model/store";
import { FirebaseError } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    query,
} from "firebase/firestore/lite";
import { safe_not_equal } from "svelte/internal";
