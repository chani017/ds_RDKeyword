const keywords = [
    "바람", "무너짐", "투명한", "울림", "조각", "흐릿한", "불완전", "공명", 
    "유리", "침묵", "대비", "기억", "스며듦", "파편", "흐름", "불안정", "고요", 
    "전이", "맥박", "푸른빛", "차가운", "균형", "가면", "낯섦", "무중력", "틈", 
    "기묘한", "반복", "수면", "이음", "억제된", "부유", "무형", "얽힘", "중첩", 
    "감정선", "지연", "균열", "감싸임", "이질감", "긴장", "번짐", "구름", "생명", 
    "대비", "역설", "망각", "유동성", "잠재", "닿지 않는"
  ];

  function generateKeywords() {
    let selected = [];
    while (selected.length < 3) {
      const keyword = keywords[Math.floor(Math.random() * keywords.length)];
      if (!selected.includes(keyword)) {
        selected.push(keyword);
      }
    }
    document.getElementById('keyword').textContent = selected.join(' · ');
  }