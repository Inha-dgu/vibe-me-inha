# `<head>` 메타·링크 설명

`index.html`의 `<head>` 안 태그를 위에서부터 하나씩 정리한 문서입니다.

---

## 기본 / SEO

1. **`<meta charset="UTF-8">`**  
   한글·특수문자가 깨지지 않게 문자 인코딩을 UTF-8로 지정합니다.

2. **`<meta name="viewport" …>`**  
   모바일에서 화면 너비에 맞게 보이게 합니다.  
   `width=device-width` = 기기 너비 사용, `initial-scale=1.0` = 처음 확대 비율 100%.

3. **`<meta name="google-site-verification" …>`**  
   Google Search Console이 “이 사이트 주인이 맞다”고 확인할 때 쓰는 인증 코드입니다.  
   ※ 줄 끝에 잘못 붙은 **`v`** 가 있으면 인증이 깨질 수 있으니 지우는 것이 좋습니다.

4. **`<title>`**  
   브라우저 탭 제목이자 구글 검색 결과에 나오는 페이지 제목입니다.

5. **`<meta name="description" …>`**  
   검색 결과 제목 아래 요약 문장(스니펫)으로 쓰일 수 있는 설명입니다.

6. **`<link rel="canonical" href="…">`**  
   “이 페이지의 공식 주소는 이 URL이다”라고 검색엔진에 알립니다. 중복 URL 정리용입니다.

---

## 파비콘 (탭 아이콘)

7. **`<link rel="icon" type="image/png" href="data:image/png;base64,…">`**  
   PNG 파비콘을 **파일 없이** HTML에 직접 넣습니다. 캐시 문제를 피하려고 쓴 방식입니다.

8. **`<link rel="icon" … href="/favicon-32.png?v=3">`**  
   32×32 PNG 파비콘. `?v=3`은 캐시 새로고침용입니다.

9. **`<link rel="shortcut icon" href="/favicon.ico?v=3">`**  
   예전 브라우저용 `.ico` 파비콘 지정입니다. (`shortcut icon`은 구식 이름)

10. **`<link rel="icon" href="/favicon.ico?v=3" sizes="any">`**  
    일반 `.ico` 파비콘. `sizes="any"`는 여러 해상도를 담을 수 있다는 뜻입니다.

---

## Open Graph (카톡·페북 등 미리보기)

11. **`og:title`** — 공유 카드에 보이는 제목  
12. **`og:description`** — 공유 카드 설명  
13. **`og:image`** — 공유할 때 나오는 썸네일 이미지  
14. **`og:url`** — 공유되는 페이지의 대표 URL  
15. **`og:type`** — 콘텐츠 종류 (`website` = 일반 웹페이지)  
16. **`og:site_name`** — 사이트 이름 (디스코드 등에서 제목 위에 표시)

---

## Twitter / X 카드

17. **`twitter:card` = `summary_large_image`**  
    X에서 큰 이미지 카드로 보여 달라는 설정입니다.

18. **`twitter:image`**  
    X 카드용 이미지. 없으면 보통 `og:image`를 씁니다.

---

## Apple / PWA / Windows 아이콘

19. **`<link rel="apple-touch-icon" sizes="…">` (여러 줄)**  
    아이폰·아이패드에서 “홈 화면에 추가”할 때 쓰는 아이콘입니다.  
    기기·해상도마다 57, 60, 72, 76, 114, 120, 144, 152, 180 등 크기를 나눠 둔 것입니다.  
    요즘은 **180×180 하나**만 있어도 대부분 충분합니다.

20. **`<link rel="manifest" href="manifest.json">`**  
    PWA(홈 화면 앱처럼 설치)용 설정 파일입니다. 이름, 아이콘, 테마색 등이 들어 있습니다.

21. **`msapplication-TileColor`**  
    윈도우 시작 화면 타일 배경색입니다.

22. **`msapplication-TileImage`**  
    윈도우 타일에 쓸 이미지입니다.

23. **`theme-color`**  
    모바일 브라우저 주소창/상태바 주변 테마 색입니다.  
    (지금은 `#ffffff`인데, 사이트가 다크 테마라 `#222222`가 더 맞을 수 있습니다.)

---

## 폰트 / 아이콘 / CSS

24. **`<link rel="preconnect" href="https://fonts.googleapis.com">`**  
    구글 폰트 서버에 미리 연결해서 로딩을 조금 빠르게 합니다.

25. **`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`**  
    실제 폰트 파일이 오는 서버에도 미리 연결합니다. `crossorigin`은 폰트 CORS 때문에 필요합니다.

26. **`<link href="https://fonts.googleapis.com/css2?family=…">`**  
    Montserrat, Bitcount 폰트 CSS를 불러옵니다.

27. **`<script src="https://kit.fontawesome.com/…">`**  
    Font Awesome 아이콘(깃허브, 블로그, 메일 아이콘)을 쓰게 해 줍니다.

28. **`<link rel="stylesheet" href="style.css">`**  
    내 사이트 스타일시트입니다.

---

## 한눈에 보기

| 구간 | 역할 |
|------|------|
| charset ~ description | 기본 + 검색 |
| icon / favicon | 탭 아이콘 |
| og:* / twitter:* | SNS 미리보기 |
| apple / manifest / ms / theme | 홈화면·앱·브라우저 테마 |
| preconnect ~ style.css | 폰트·아이콘·디자인 |
