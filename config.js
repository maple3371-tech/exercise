// Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹) 의 firebaseConfig 값을 그대로 붙여 넣으세요.
// apiKey 가 비어 있으면 샘플 데이터로 동작하는 미리보기 모드로 열립니다.
window.APP_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCbxtk9-9uNB0F5RcP4MhpnryFp4BtCEKQ",
    authDomain: "exercise-ba44d.firebaseapp.com",
    projectId: "exercise-ba44d",
    storageBucket: "exercise-ba44d.firebasestorage.app",
    messagingSenderId: "511169677324",
    appId: "1:511169677324:web:8f575294906075624cc629"
  },

  startDate: "2026-11-16",      // 시작 주의 월요일
  prepQuotas: [1, 2],           // 예비 기간: 1주차 1회, 2주차 2회
  weeklyQuota: 3,               // 이후 주 3회
  fines: [0, 5000, 10000, 20000], // 주간 결석 0/1/2/3회 벌금
  monthlyFreeMisses: 3,         // 사유 없이 빠질 수 있는 월 횟수
  freeMissesWaiveFine: true,    // 월 3회까지는 벌금 면제 (false 면 결석마다 부과)
  maxMembers: 4
};
