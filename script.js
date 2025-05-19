// Firebase SDK 불러오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCW1f0g03-aZ6jNiRwBt6QH_2ZZFJLmjyc",
  authDomain: "survey-app-1e0af.firebaseapp.com",
  projectId: "survey-app-1e0af",
  storageBucket: "survey-app-1e0af.appspot.com",
  messagingSenderId: "438780449817",
  appId: "1:438780449817:web:a43ee2121e7ef571028688",
  measurementId: "G-TZCYZHVZWM"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 설문지 제출 핸들링
document.getElementById("surveyForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const feedback = document.getElementById("feedback").value;

  try {
    await addDoc(collection(db, "responses"), {
      name,
      age,
      feedback,
      timestamp: new Date()
    });
    alert("응답이 성공적으로 저장되었어요! 😊");
  } catch (error) {
    console.error("Firebase 저장 오류:", error);
    alert("저장 실패 😢 콘솔을 확인해 주세요.");
  }
});
