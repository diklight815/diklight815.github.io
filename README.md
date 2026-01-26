# dklight.github.io
# ✨ AI 블로그 초안 생성기

AI를 활용하여 블로그 초안을 자동으로 생성하는 웹 애플리케이션입니다.

![Demo](https://img.shields.io/badge/AI-Powered-8b5cf6?style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-00a67e?style=for-the-badge)

## 🚀 주요 기능

- 🤖 **AI 기반 생성**: OpenAI GPT-3.5-turbo를 사용한 고품질 블로그 초안 생성
- 🎨 **프리미엄 디자인**: 다크모드, 그라데이션, Glassmorphism 효과
- 📝 **다양한 옵션**: 5가지 톤, 3가지 길이 선택
- 💾 **자동 저장**: API 키 및 마지막 결과 로컬 저장
- ✏️ **편집 기능**: 생성된 텍스트 즉시 편집 가능
- 📋 **클립보드 복사**: 원클릭 복사 기능
- 📱 **반응형**: 모바일, 태블릿, 데스크톱 지원

## 📦 설치 및 실행

### 필수 요구사항

- Python 3.x (로컬 서버 실행용)
- OpenAI API 키 ([발급받기](https://platform.openai.com/api-keys))

### 실행 방법

1. **프로젝트 클론 또는 다운로드**
```bash
cd blog-draft-generator
```

2. **로컬 서버 실행**
```bash
python -m http.server 3000
```

3. **브라우저에서 접속**
```
http://localhost:3000
```

## 📖 사용 방법

1. **API 키 입력**: OpenAI API 키를 입력합니다 (한 번만 입력하면 자동 저장됩니다)
2. **주제 입력**: 작성하고 싶은 블로그 주제를 입력합니다
3. **옵션 선택**: 
   - 키워드 (선택사항)
   - 작성 톤 (전문적, 친근한, 캐주얼, 교육적, 영감을 주는)
   - 글 길이 (짧게 300자, 중간 600자, 길게 1000자)
4. **생성 시작**: "초안 생성하기" 버튼 클릭
5. **결과 활용**: 생성된 텍스트를 편집하거나 복사하여 사용

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: OpenAI GPT-3.5-turbo API
- **Storage**: LocalStorage API
- **Styling**: CSS Variables, Glassmorphism, Animations

## 📁 프로젝트 구조

```
blog-draft-generator/
├── index.html      # 메인 HTML 구조
├── style.css       # 디자인 시스템 및 스타일
├── app.js          # 애플리케이션 로직
└── README.md       # 프로젝트 문서
```

## 🎨 디자인 특징

- **다크 모드**: 세련된 다크 테마
- **그라데이션**: 생동감 있는 보라/파랑 그라데이션
- **Glassmorphism**: 반투명 카드와 블러 효과
- **애니메이션**: 부드러운 트랜지션 및 호버 효과
- **타이포그래피**: Google Fonts Inter 사용

## 🔒 보안

현재 버전은 클라이언트 측에서 API 키를 관리합니다. 
프로덕션 환경에서는 백엔드 서버를 통해 API 키를 안전하게 관리하는 것을 권장합니다.

## 🚧 향후 개선 사항

- [ ] 백엔드 서버 추가 (API 키 보안)
- [ ] GPT-4 모델 지원
- [ ] 생성 히스토리 저장
- [ ] 마크다운 미리보기
- [ ] 다국어 지원
- [ ] PDF 내보내기
- [ ] 이미지 생성 기능

## 📝 라이선스

MIT License

## 🤝 기여

이슈나 풀 리퀘스트를 환영합니다!

## 📧 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---

**Made with ❤️ using OpenAI GPT-3.5**
