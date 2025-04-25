    const keywords = [
      "바람", "흑백요리사", "투명한", "올림픽", "헬베티카", "흐릿한", "산악회", "아바타", 
      "유리", "나무늘보", "대비", "국밥", "젤리", "첫눈", "당근마켓", "엔딩요정", "디즈니랜드", 
      "화들짝", "조곤조곤", "푸른빛", "필크로우", "제로콜라", "천국도", "감자", "무중력", "틈", 
      "굴림체", "반복", "수면", "피클", "야작", "녹아내리는고양이", "1호선", "발차기", "중첩", 
      "떡볶이", "티니핑", "모자", "감싸임", "윤슬", "꽁냥꽁냥", "100점시험지", "구름", "바다", 
      "대비", "물구나무", "발가락", "포복", "윤여경선생님", "김의래선생님", "박민지선생님", "이채영선생님", 
      "도규님", "달빛", "연못", "고요", "모래", "비늘", "소리", "빛깔", "계절", "시간", "마음", 
      "서늘", "햇살", "그림자", "비움", "손길", "숨결", "눈물", "단풍", "노을", "흐름", "비상", 
      "산책", "들꽃", "강아지", "낙엽", "새벽", "속삭임", "조약돌", "그네", "잔상", "번아웃", "꾸안꾸"
    ];

// 키워드 배열을 섞고 앞에서 3개 뽑기
function getRandomKeywords(count) {
  const shuffled = [...keywords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 페이지 새로고침
document.getElementById("refreshIcon").addEventListener("click", () => {
  location.reload(); 
});

// 버튼 클릭 시 카드 보여주기
document.getElementById("showCardsBtn").addEventListener("click", () => {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; // 기존 카드 제거

  const selected = getRandomKeywords(3);
  selected.forEach((word, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `${word}`;
    container.appendChild(card);

    // 랜덤 회전 각도 (-5도 ~ +5도)
    const rotation = (Math.random() * 20 - 5).toFixed(2);

    // 초기 위치 설정 (위에 숨김)
    card.style.top = `${index * 100}px`;
    card.style.left = "45%";
    card.style.transform = `translate(-50%, -100px) rotate(${rotation}deg)`;

    // 순차적으로 나타나도록 딜레이 설정
    setTimeout(() => {
      card.classList.add("show");
      card.style.transform = `translate(-50%, 0) rotate(${rotation}deg)`;
    }, index * 200);
  });
});