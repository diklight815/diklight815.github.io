# AI 블로그 초안 생성기

AI를 활용하여 SEO 최적화된 블로그 초안을 자동으로 생성하는 웹 애플리케이션입니다.

![AI Powered](https://img.shields.io/badge/AI-Powered-8b5cf6?style=for-the-badge)
![Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-00a67e?style=for-the-badge)
![Claude](https://img.shields.io/badge/Anthropic-Claude-d97706?style=for-the-badge)

## 주요 기능

### 블로그 생성
- **멀티 AI 지원**: Google Gemini, OpenAI GPT, Anthropic Claude + 무료 템플릿 모드
- **SEO 제목 추천**: 주제 입력 시 SEO 최적화 제목 5개 자동 추천
- **키워드 추출**: 주제에서 관련 키워드 자동 추출
- **글 톤 선택**: 전문적, 친근한, 캐주얼, 교육적, 영감을 주는 5가지 톤
- **글자 수 조절**: 짧은 글(300자), 보통(600자), 긴 글(1000자)
- **템플릿 라이브러리**: 투자/금융, 신용/대출, 정책금융, 여행, 리뷰, IT 가이드 등 7개 카테고리

### 편집 & 미리보기
- **마크다운 에디터**: 실시간 편집 및 미리보기
- **반응형 프리뷰**: 데스크톱 / 모바일 / 동시 보기 모드
- **CSS 커스터마이징**: 커스텀 클래스 관리 및 실시간 스타일 적용
- **내보내기**: TXT, Markdown, HTML 형식 지원

### SEO 분석
- **6가지 SEO 지표** 자동 분석 및 점수화
- **SERP 프리뷰**: Google, Facebook, Twitter 미리보기
- **메타 디스크립션 생성**: AI 기반 자동 생성
- **Open Graph 태그 생성**
- **목차 자동 생성**

### 유사도 검사
- **로컬 분석**: API 키 없이 무료 사용
- **AI 분석**: 더 정확한 분석 (API 키 필요)
- **상투적 표현 감지** 및 독창적 표현 점수화
- **AI 생성 확률 감지**
- **독창성 개선 제안**

### 이미지 프롬프트 추천
- 블로그 본문 분석 후 섹션별 **이미지 생성 프롬프트**(영문) 및 **캡션**(한글) 추천
- 사진, 일러스트, 3D 렌더링, 플랫 디자인, 수채화 스타일 선택
- 블로그 본문 / 썸네일 / 소셜 미디어 용도별 최적화

### 기타
- **생성 히스토리**: 이전 생성 기록 사이드바
- **버전 비교**: 이전 버전과 현재 버전 비교
- **설정**: 탭 닫으면 자동 삭제, 자동 저장 비활성화 옵션
- **쿠키 동의 배너**: 사이트 전체 GDPR 준수

## 지원 AI 모델

| 제공자 | 모델 |
|--------|------|
| Google Gemini | Gemini 2.0 Flash, 2.0 Flash-Lite, 2.5 Flash, 2.5 Pro |
| OpenAI | GPT-3.5 Turbo, GPT-4 Turbo, GPT-4o, GPT-4o Mini |
| Anthropic | Claude 3.5 Haiku, Claude 3.5 Sonnet, Claude 3 Opus |
| 무료 | 템플릿 기반 생성 (API 키 불필요) |

## 시작하기

### 사전 요구사항

- Python 3.x 또는 Node.js (로컬 서버 실행용)
- AI API 키 (선택 — 무료 템플릿 모드 사용 가능)

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/diklight815/blog-draft-generator.git
cd blog-draft-generator

# 로컬 서버 실행 (택 1)
python -m http.server 3000
# 또는
npx serve . -p 3000
```

브라우저에서 `http://localhost:3000` 접속

## 사용 방법

1. **AI 선택**: 사용할 AI 제공자와 모델 선택 (또는 무료 템플릿 모드)
2. **API 키 입력**: 선택한 AI의 API 키 입력 (브라우저에만 저장, 서버 미전송)
3. **주제 입력**: 블로그 주제를 입력하면 SEO 제목과 키워드 자동 추천
4. **옵션 설정**: 글 톤, 글자 수 선택
5. **초안 생성**: "초안 생성하기" 클릭
6. **편집 및 분석**: 에디터에서 수정, SEO 분석, 유사도 검사, 이미지 프롬프트 추천 활용
7. **내보내기**: TXT / Markdown / HTML로 내보내기

## 프로젝트 구조

```
blog-draft-generator/
├── index.html          # 랜딩 페이지
├── app.html            # 메인 앱 (블로그 생성기)
├── about.html          # 서비스 소개
├── docs.html           # 사용 가이드 & FAQ
├── pricing.html        # 요금 안내
├── templates.html      # 템플릿 쇼케이스
├── blog.html           # 블로그 목록
├── contact.html        # 문의
├── privacy.html        # 개인정보처리방침
├── terms.html          # 이용약관
├── js/
│   ├── app.js          # 메인 앱 로직
│   ├── common.js       # 공통 헤더/푸터/쿠키 배너
│   └── blog-templates.js # 블로그 템플릿 데이터
├── css/
│   ├── style.css       # 앱 스타일
│   ├── common.css      # 공통 스타일
│   ├── landing.css     # 랜딩 페이지 스타일
│   └── page.css        # 서브 페이지 스타일
├── blog/               # 블로그 포스트
│   ├── ai-writing-guide.html
│   ├── blog-topic-selection.html
│   └── seo-checklist.html
├── favicon.svg
├── manifest.json
├── robots.txt
├── sitemap.xml
└── ads.txt
```

## 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (프레임워크 없음)
- **AI API**: Google Gemini, OpenAI, Anthropic Claude (클라이언트 직접 통신)
- **마크다운**: Marked.js
- **코드 하이라이팅**: Highlight.js
- **폰트**: Google Fonts (Inter)
- **저장소**: LocalStorage (클라이언트 전용, 서버 미전송)
- **광고**: Google AdSense
- **디자인**: CSS Variables, Glassmorphism, 다크 테마

## 보안

- 모든 API 키는 브라우저 localStorage에만 저장되며 서버로 전송되지 않습니다.
- 중간 서버 없이 AI API와 직접 HTTPS 통신합니다.
- 개인정보는 수집하지 않습니다.

## 라이선스

MIT License

## 문의

- 이메일: diklight815@gmail.com
- [문의 페이지](https://diklight815.github.io/contact.html)
