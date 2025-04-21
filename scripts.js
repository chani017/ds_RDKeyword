const keywords = [
  "바람", "무너짐", "투명한", "울림", "조각", "흐릿한", "불완전", "공명",
  "유리", "침묵", "대비", "기억", "스며듦", "파편", "흐름", "불안정", "고요",
  "전이", "맥박", "푸른빛", "차가운", "균형", "가면", "낯섦", "무중력", "틈",
  "기묘한", "반복", "수면", "이음", "억제된", "부유", "무형", "얽힘", "중첩",
  "감정선", "지연", "균열", "감싸임", "이질감", "긴장", "번짐", "구름", "생명",
  "대비", "역설", "망각", "유동성", "잠재", "닿지 않는"
];

function getRandomKeywords(count) {
  const shuffled = [...keywords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

document.getElementById("showCardsBtn").addEventListener("click", () => {
  const container = document.querySelector(".card-container");
  container.innerHTML = ""; // 기존 카드 제거

  const selectedKeywords = getRandomKeywords(3);

  selectedKeywords.forEach((word, index) => {
    const card = document.createElement("div");
    card.className = "card hidden";
    card.textContent = `키워드: ${word}`;
    container.appendChild(card);

    // 위치 다르게 (조금씩 더 많이 이동)
    setTimeout(() => {
      card.style.transform = `translate(-50%, -50%) translate(${150 + index * 60}px, ${-150 - index * 60}px)`;
      card.classList.add("show");
      card.classList.remove("hidden");
    }, index * 500);
  });
});