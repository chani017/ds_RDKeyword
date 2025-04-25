    const keywords = [
      "바람", "흑백요리사", "투명한", "올림픽", "헬베티카", "흐릿한", "산악회", "아바타", 
      "유리", "나무늘보", "대비", "국밥", "젤리", "첫눈", "당근마켓", "엔딩요정", "디즈니랜드", 
      "화들짝", "조곤조곤", "푸른빛", "필크로우", "제로콜라", "천국도", "감자", "무중력", "틈", 
      "굴림체", "반복", "수면", "피클", "야작", "녹아내리는고양이", "1호선", "발차기", "중첩", 
      "떡볶이", "티니핑", "모자", "감싸임", "윤슬", "꽁냥꽁냥", "100점시험지", "구름", "바다", 
      "대비", "물구나무", "발가락", "포복", "윤여경선생님", "김의래선생님", "박민지선생님", "이채영선생님", "도규님"
    ];

    function getRandomKeywords(count) {
      const shuffled = [...keywords].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    document.getElementById("showCardsBtn").addEventListener("click", () => {
      const container = document.getElementById("cardContainer");
      container.innerHTML = ""; // 기존 카드 제거

      const selected = getRandomKeywords(3);
      selected.forEach((word, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = `${word}`;
        container.appendChild(card);

        // 수직 위치 지정
        card.style.top = `${index * 110}px`;

        // 카드 등장 애니메이션
        setTimeout(() => {
          card.classList.add("show");
        }, index * 300); // 등장 간격 차이
      });
    });