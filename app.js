// DOM Elements
const aiProviderSelect = document.getElementById('aiProvider');
const apiKeyInput = document.getElementById('apiKey');
const apiKeyLabel = document.getElementById('apiKeyLabel');
const apiKeyHelpText = document.getElementById('apiKeyHelpText');
const apiKeyLink = document.getElementById('apiKeyLink');
const directConnectionText = document.getElementById('directConnectionText');
const toggleApiKeyBtn = document.getElementById('toggleApiKey');
const topicInput = document.getElementById('topic');
const keywordsInput = document.getElementById('keywords');
const toneSelect = document.getElementById('tone');
const aiModelSelect = document.getElementById('aiModel');
const lengthRadios = document.getElementsByName('length');
const generateBtn = document.getElementById('generateBtn');
const resultCard = document.getElementById('resultCard');
const resultText = document.getElementById('resultText');
const copyBtn = document.getElementById('copyBtn');
const regenerateBtn = document.getElementById('regenerateBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

// New DOM Elements
const exportBtn = document.getElementById('exportBtn');
const exportMenu = document.getElementById('exportMenu');
const previewTabs = document.querySelectorAll('.preview-tab');
const markdownPreview = document.getElementById('markdownPreview');
const charCountDisplay = document.getElementById('charCount');
const wordCountDisplay = document.getElementById('wordCount');
const readingTimeDisplay = document.getElementById('readingTime');
const targetLengthDisplay = document.getElementById('targetLength');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const historySidebar = document.getElementById('historySidebar');
const historyToggle = document.getElementById('historyToggle');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');

// CSS Editor and Preview Elements
const cssEditor = document.getElementById('cssEditor');
const customCssTextarea = document.getElementById('customCss');
const resetCssBtn = document.getElementById('resetCssBtn');
const loadTemplateCssBtn = document.getElementById('loadTemplateCssBtn');
const previewContainer = document.getElementById('previewContainer');
const desktopContent = document.getElementById('desktopContent');
const mobileContent = document.getElementById('mobileContent');
const viewModeToggles = document.getElementById('viewModeToggles');
const viewModeBtns = document.querySelectorAll('.view-mode-btn');

// TOC Elements
const tocContainer = document.getElementById('tocContainer');
const tocNav = document.getElementById('tocNav');
const tocToggle = document.getElementById('tocToggle');

// SEO Analysis Elements
const seoAnalysis = document.getElementById('seoAnalysis');
const seoOverallScore = document.getElementById('seoOverallScore');
const seoTitleScore = document.getElementById('seoTitleScore');
const seoTitleBar = document.getElementById('seoTitleBar');
const seoTitleDesc = document.getElementById('seoTitleDesc');
const seoContentScore = document.getElementById('seoContentScore');
const seoContentBar = document.getElementById('seoContentBar');
const seoContentDesc = document.getElementById('seoContentDesc');
const seoKeywordScore = document.getElementById('seoKeywordScore');
const seoKeywordBar = document.getElementById('seoKeywordBar');
const seoKeywordDesc = document.getElementById('seoKeywordDesc');
const seoHeadingScore = document.getElementById('seoHeadingScore');
const seoHeadingBar = document.getElementById('seoHeadingBar');
const seoHeadingDesc = document.getElementById('seoHeadingDesc');
const seoReadabilityScore = document.getElementById('seoReadabilityScore');
const seoReadabilityBar = document.getElementById('seoReadabilityBar');
const seoReadabilityDesc = document.getElementById('seoReadabilityDesc');
const seoRecommendationsList = document.getElementById('seoRecommendationsList');

// Similarity Analysis Elements
const similarityAnalysis = document.getElementById('similarityAnalysis');
const similarityOverallScore = document.getElementById('similarityOverallScore');
const originalityScore = document.getElementById('originalityScore');
const originalityBar = document.getElementById('originalityBar');
const originalityDesc = document.getElementById('originalityDesc');
const commonPhrasesScore = document.getElementById('commonPhrasesScore');
const commonPhrasesBar = document.getElementById('commonPhrasesBar');
const commonPhrasesDesc = document.getElementById('commonPhrasesDesc');
const uniqueExpressionsScore = document.getElementById('uniqueExpressionsScore');
const uniqueExpressionsBar = document.getElementById('uniqueExpressionsBar');
const uniqueExpressionsDesc = document.getElementById('uniqueExpressionsDesc');
const aiProbabilityScore = document.getElementById('aiProbabilityScore');
const aiProbabilityBar = document.getElementById('aiProbabilityBar');
const aiProbabilityDesc = document.getElementById('aiProbabilityDesc');
const phrasesList = document.getElementById('phrasesList');
const similarityRecommendationsList = document.getElementById('similarityRecommendationsList');
const analyzeSimilarityBtn = document.getElementById('analyzeSimilarityBtn');

// Security Modal Elements
const securityModal = document.getElementById('securityModal');
const securityInfoBtn = document.getElementById('securityInfoBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalFooterBtn = document.getElementById('closeModalFooterBtn');
const modalOverlay = document.querySelector('.modal-overlay');

// Version Compare Elements
const compareBtn = document.getElementById('compareBtn');
const compareModal = document.getElementById('compareModal');
const closeCompareModalBtn = document.getElementById('closeCompareModalBtn');
const previousVersionText = document.getElementById('previousVersionText');
const currentVersionText = document.getElementById('currentVersionText');
const previousVersionTime = document.getElementById('previousVersionTime');
const currentVersionTime = document.getElementById('currentVersionTime');
const previousVersionStats = document.getElementById('previousVersionStats');
const currentVersionStats = document.getElementById('currentVersionStats');
const restorePreviousBtn = document.getElementById('restorePreviousBtn');
const showDiffBtn = document.getElementById('showDiffBtn');
const diffView = document.getElementById('diffView');
const diffContent = document.getElementById('diffContent');

//AdSense Elements
const adLeft = document.getElementById('ad-left');
const adBottom = document.getElementById('ad-bottom');

// Keyword Extraction Elements
const extractKeywordsBtn = document.getElementById('extractKeywordsBtn');
const suggestedKeywords = document.getElementById('suggestedKeywords');

// Reset All Data Button
const resetAllDataBtn = document.getElementById('resetAllDataBtn');

// Constants
const STORAGE_KEYS = {
    AI_PROVIDER: 'ai_provider',
    OPENAI_API_KEY: 'openai_api_key',
    GEMINI_API_KEY: 'gemini_api_key',
    CLAUDE_API_KEY: 'claude_api_key',
    LAST_TOPIC: 'last_topic',
    LAST_RESULT: 'last_result',
    HISTORY: 'generation_history',
    CUSTOM_CSS: 'custom_css',
    VIEW_MODE: 'view_mode',
    AI_MODEL: 'ai_model',
    PREVIOUS_VERSION: 'previous_version',
    AUTO_DELETE_ON_CLOSE: 'auto_delete_on_close',
    DISABLE_AUTO_SAVE: 'disable_auto_save'
};

const AI_PROVIDERS = {
    template: {
        name: '무료 템플릿',
        keyPrefix: '',
        keyLink: '',
        noApiKey: true,
        models: [
            { value: 'basic', label: '기본 템플릿' },
            { value: 'detailed', label: '상세 템플릿' },
            { value: 'listicle', label: '리스트형 템플릿' }
        ]
    },
    openai: {
        name: 'OpenAI',
        keyPrefix: 'sk-',
        keyLink: 'https://platform.openai.com/api-keys',
        models: [
            { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo (빠르고 저렴)' },
            { value: 'gpt-4-turbo', label: 'GPT-4 Turbo (균형잡힌 선택)' },
            { value: 'gpt-4o', label: 'GPT-4o (최고 품질)' },
            { value: 'gpt-4o-mini', label: 'GPT-4o Mini (경제적)' }
        ]
    },
    gemini: {
        name: 'Google Gemini',
        keyPrefix: 'AIza',
        keyLink: 'https://aistudio.google.com/app/apikey',
        models: [
            { value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash (빠르고 경제적)' },
            { value: 'gemini-2.0-flash-lite', label: 'Gemini 2.0 Flash-Lite (경량)' },
            { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash (최신)' },
            { value: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro (고성능)' }
        ]
    },
    claude: {
        name: 'Anthropic Claude',
        keyPrefix: 'sk-ant-',
        keyLink: 'https://console.anthropic.com/settings/keys',
        models: [
            { value: 'claude-3-5-haiku-20241022', label: 'Claude 3.5 Haiku (빠르고 경제적)' },
            { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet (균형잡힌 선택)' },
            { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus (최고 품질)' }
        ]
    }
};

const TONE_PROMPTS = {
    professional: '전문적이고 신뢰성 있는 톤으로',
    friendly: '친근하고 따뜻한 톤으로',
    casual: '편안하고 자연스러운 톤으로',
    educational: '교육적이고 명확한 톤으로',
    inspirational: '영감을 주고 동기부여하는 톤으로'
};

const LENGTH_SETTINGS = {
    short: { chars: 300, description: '짧은' },
    medium: { chars: 600, description: '중간 길이의' },
    long: { chars: 1000, description: '긴' }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    attachEventListeners();
});

// Load saved data from localStorage
function loadSavedData() {
    // Load provider
    const savedProvider = localStorage.getItem(STORAGE_KEYS.AI_PROVIDER) || 'openai';
    aiProviderSelect.value = savedProvider;
    updateProviderUI();

    const savedTopic = localStorage.getItem(STORAGE_KEYS.LAST_TOPIC);
    if (savedTopic) {
        topicInput.value = savedTopic;
    }

    const savedResult = localStorage.getItem(STORAGE_KEYS.LAST_RESULT);
    if (savedResult) {
        resultText.value = savedResult;
        resultCard.classList.remove('hidden');
        updateStats(); // Initial stats update
    }

    const savedCss = localStorage.getItem(STORAGE_KEYS.CUSTOM_CSS);
    if (savedCss) {
        customCssTextarea.value = savedCss;
    }

    const savedViewMode = localStorage.getItem(STORAGE_KEYS.VIEW_MODE) || 'desktop';
    switchViewMode(savedViewMode);

    const savedAiModel = localStorage.getItem(STORAGE_KEYS.AI_MODEL);
    if (savedAiModel) {
        aiModelSelect.value = savedAiModel;
    }

    // Show compare button if previous version exists
    const previousVersion = localStorage.getItem(STORAGE_KEYS.PREVIOUS_VERSION);
    if (previousVersion && compareBtn) {
        compareBtn.classList.remove('hidden');
    }

    renderHistory(); // Load history on startup
}

// Attach event listeners
function attachEventListeners() {
    toggleApiKeyBtn.addEventListener('click', toggleApiKeyVisibility);
    generateBtn.addEventListener('click', handleGenerate);
    regenerateBtn.addEventListener('click', handleGenerate);
    copyBtn.addEventListener('click', handleCopy);

    // Provider change
    aiProviderSelect.addEventListener('change', () => {
        const provider = aiProviderSelect.value;
        localStorage.setItem(STORAGE_KEYS.AI_PROVIDER, provider);
        updateProviderUI();
    });

    // Save API key when changed
    apiKeyInput.addEventListener('change', () => {
        saveApiKey();
    });

    // Save AI model when changed
    aiModelSelect.addEventListener('change', () => {
        const provider = aiProviderSelect.value;
        localStorage.setItem(`${provider}_model`, aiModelSelect.value);
    });

    // Real-time character count and preview update
    resultText.addEventListener('input', () => {
        updateStats();
        // Update preview if preview tab is active
        const activeTab = document.querySelector('.preview-tab.active');
        if (activeTab && activeTab.dataset.mode === 'preview') {
            updatePreview();
        }
    });

    // Preview tabs
    previewTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.mode));
    });

    // Export dropdown
    if (exportBtn) {
        exportBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportMenu.classList.toggle('hidden');
            exportBtn.parentElement.classList.toggle('active');
        });
    }

    // Export options
    document.querySelectorAll('.export-option').forEach(option => {
        option.addEventListener('click', () => {
            handleExport(option.dataset.format);
            exportMenu.classList.add('hidden');
            exportBtn.parentElement.classList.remove('active');
        });
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
        if (exportMenu && !exportMenu.classList.contains('hidden')) {
            exportMenu.classList.add('hidden');
            exportBtn.parentElement.classList.remove('active');
        }
    });

    // History toggle
    if (historyToggle) {
        historyToggle.addEventListener('click', () => {
            historySidebar.classList.toggle('open');
        });
    }

    // Clear history
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearHistory);
    }

    // Reset all data
    if (resetAllDataBtn) {
        resetAllDataBtn.addEventListener('click', resetAllData);
    }

    // CSS Editor
    if (customCssTextarea) {
        customCssTextarea.addEventListener('input', () => {
            const css = customCssTextarea.value;
            localStorage.setItem(STORAGE_KEYS.CUSTOM_CSS, css);
            applyCustomCss();
        });
    }

    // Reset CSS
    if (resetCssBtn) {
        resetCssBtn.addEventListener('click', resetCustomCss);
    }

    // Load CSS Template
    if (loadTemplateCssBtn) {
        loadTemplateCssBtn.addEventListener('click', loadCssTemplate);
    }

    // View mode toggles
    viewModeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewMode = btn.dataset.view;
            switchViewMode(viewMode);
            localStorage.setItem(STORAGE_KEYS.VIEW_MODE, viewMode);
        });
    });

    // Security Modal
    if (securityInfoBtn) {
        securityInfoBtn.addEventListener('click', openSecurityModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeSecurityModal);
    }

    if (closeModalFooterBtn) {
        closeModalFooterBtn.addEventListener('click', closeSecurityModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeSecurityModal);
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && securityModal && !securityModal.classList.contains('hidden')) {
            closeSecurityModal();
        }
    });

    // TOC toggle
    if (tocToggle) {
        tocToggle.addEventListener('click', () => {
            tocContainer.classList.toggle('collapsed');
            tocToggle.textContent = tocContainer.classList.contains('collapsed') ? '+' : '−';
        });
    }

    // Version Compare
    if (compareBtn) {
        compareBtn.addEventListener('click', openCompareModal);
    }

    if (closeCompareModalBtn) {
        closeCompareModalBtn.addEventListener('click', closeCompareModal);
    }

    if (restorePreviousBtn) {
        restorePreviousBtn.addEventListener('click', restorePreviousVersion);
    }

    if (showDiffBtn) {
        showDiffBtn.addEventListener('click', toggleDiffView);
    }

    // Close compare modal on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && compareModal && !compareModal.classList.contains('hidden')) {
            closeCompareModal();
        }
    });

    // Keyword Extraction
    if (extractKeywordsBtn) {
        extractKeywordsBtn.addEventListener('click', extractKeywords);
    }

    // Similarity Analysis
    if (analyzeSimilarityBtn) {
        analyzeSimilarityBtn.addEventListener('click', analyzeSimilarity);
    }
}

// Toggle API key visibility
function toggleApiKeyVisibility() {
    const type = apiKeyInput.type === 'password' ? 'text' : 'password';
    apiKeyInput.type = type;
    toggleApiKeyBtn.textContent = type === 'password' ? '👁️' : '🙈';
}

// Get selected length
function getSelectedLength() {
    for (const radio of lengthRadios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return 'medium';
}

// Validate inputs
function validateInputs() {
    const apiKey = apiKeyInput.value.trim();
    const topic = topicInput.value.trim();
    const provider = aiProviderSelect.value;
    const config = AI_PROVIDERS[provider];

    // Skip API key validation for template provider
    if (!config.noApiKey) {
        if (!apiKey) {
            alert(`${config.name} API 키를 입력해주세요.`);
            apiKeyInput.focus();
            return false;
        }

        // Validate API key format
        if (config.keyPrefix && !apiKey.startsWith(config.keyPrefix)) {
            alert(`유효한 ${config.name} API 키를 입력해주세요. (${config.keyPrefix}로 시작해야 합니다)`);
            apiKeyInput.focus();
            return false;
        }
    }

    if (!topic) {
        alert('블로그 주제를 입력해주세요.');
        topicInput.focus();
        return false;
    }

    return true;
}

// Build prompt for OpenAI
function buildPrompt() {
    const topic = topicInput.value.trim();
    const keywords = keywordsInput.value.trim();
    const tone = toneSelect.value;
    const length = getSelectedLength();

    const tonePrompt = TONE_PROMPTS[tone];
    const lengthSetting = LENGTH_SETTINGS[length];

    let prompt = `다음 주제에 대한 블로그 초안을 작성해주세요.\n\n`;
    prompt += `주제: ${topic}\n`;

    if (keywords) {
        prompt += `키워드: ${keywords}\n`;
    }

    prompt += `\n【필수 요구사항】\n`;
    prompt += `1. 글 길이: 반드시 ${lengthSetting.chars}자 이상 작성하세요. 이것은 매우 중요합니다!\n`;
    prompt += `2. 작성 톤: ${tonePrompt} 작성해주세요\n`;
    prompt += `3. 언어: 한국어로 작성해주세요\n`;
    prompt += `4. 구조: 제목(#), 서론, 본론(2-3개 소제목 ##), 결론을 포함해주세요\n`;
    prompt += `5. 가독성: 단락을 나누고 자연스럽게 작성해주세요\n\n`;
    prompt += `⚠️ 주의: 짧게 요약하지 말고 ${lengthSetting.chars}자 이상의 충분한 내용을 작성해야 합니다.\n\n`;
    prompt += `블로그 초안:`;

    return prompt;
}

// Generate blog draft using selected AI provider
async function generateBlogDraft() {
    const provider = aiProviderSelect.value;

    if (provider === 'template') {
        return generateWithTemplate();
    } else if (provider === 'openai') {
        return await generateWithOpenAI();
    } else if (provider === 'gemini') {
        return await generateWithGemini();
    } else if (provider === 'claude') {
        return await generateWithClaude();
    } else {
        throw new Error('Unknown AI provider');
    }
}

// Generate with Template (No API required)
function generateWithTemplate() {
    const topic = topicInput.value.trim();
    const keywords = keywordsInput.value.trim();
    const tone = toneSelect.value;
    const selectedModel = aiModelSelect.value;

    const toneText = {
        professional: '전문적인',
        friendly: '친근한',
        casual: '편안한',
        educational: '교육적인',
        inspirational: '영감을 주는'
    }[tone] || '전문적인';

    const keywordList = keywords ? keywords.split(',').map(k => k.trim()).filter(k => k) : [];
    const keywordSection = keywordList.length > 0
        ? `\n\n**핵심 키워드:** ${keywordList.join(', ')}\n`
        : '';

    if (selectedModel === 'basic') {
        return `# ${topic}

${keywordSection}
## 서론

${topic}에 대해 알아보겠습니다. 이 글에서는 ${topic}의 핵심 개념과 중요성에 대해 ${toneText} 관점에서 설명하겠습니다.

## 본론

### ${topic}이란?

[여기에 ${topic}의 정의와 설명을 작성하세요]

### 주요 특징

[여기에 주요 특징을 작성하세요]

### 활용 방법

[여기에 활용 방법을 작성하세요]

## 결론

${topic}에 대해 살펴보았습니다. 이 내용이 도움이 되셨기를 바랍니다.

---
*이 글은 템플릿을 기반으로 생성되었습니다. 내용을 수정하여 완성해주세요.*`;
    } else if (selectedModel === 'detailed') {
        return `# ${topic}: 완벽 가이드

${keywordSection}
## 📌 개요

${topic}은(는) 현대 사회에서 중요한 주제입니다. 이 가이드에서는 ${topic}에 대한 모든 것을 ${toneText} 시각으로 상세히 다루겠습니다.

## 🎯 목차

1. ${topic} 소개
2. 핵심 개념 이해하기
3. 실제 적용 사례
4. 장점과 단점
5. 시작하는 방법
6. 자주 묻는 질문

---

## 1. ${topic} 소개

### 배경

[${topic}이 등장하게 된 배경을 설명하세요]

### 정의

[${topic}의 명확한 정의를 작성하세요]

## 2. 핵심 개념 이해하기

### 기본 원리

[기본 원리를 설명하세요]

### 주요 구성 요소

- **요소 1**: [설명]
- **요소 2**: [설명]
- **요소 3**: [설명]

## 3. 실제 적용 사례

### 사례 1

[구체적인 사례를 작성하세요]

### 사례 2

[구체적인 사례를 작성하세요]

## 4. 장점과 단점

### ✅ 장점

- [장점 1]
- [장점 2]
- [장점 3]

### ❌ 단점

- [단점 1]
- [단점 2]

## 5. 시작하는 방법

### 단계별 가이드

1. **1단계**: [설명]
2. **2단계**: [설명]
3. **3단계**: [설명]

## 6. 자주 묻는 질문 (FAQ)

**Q: [질문 1]**
A: [답변 1]

**Q: [질문 2]**
A: [답변 2]

## 📝 마무리

${topic}에 대해 자세히 알아보았습니다. 추가 질문이 있으시면 댓글로 남겨주세요.

---
*이 글은 상세 템플릿을 기반으로 생성되었습니다.*`;
    } else if (selectedModel === 'listicle') {
        return `# ${topic}: 꼭 알아야 할 7가지

${keywordSection}
> ${topic}에 대해 ${toneText} 관점에서 핵심만 정리했습니다.

---

## 1️⃣ 첫 번째 포인트

[첫 번째 핵심 내용을 작성하세요]

## 2️⃣ 두 번째 포인트

[두 번째 핵심 내용을 작성하세요]

## 3️⃣ 세 번째 포인트

[세 번째 핵심 내용을 작성하세요]

## 4️⃣ 네 번째 포인트

[네 번째 핵심 내용을 작성하세요]

## 5️⃣ 다섯 번째 포인트

[다섯 번째 핵심 내용을 작성하세요]

## 6️⃣ 여섯 번째 포인트

[여섯 번째 핵심 내용을 작성하세요]

## 7️⃣ 일곱 번째 포인트

[일곱 번째 핵심 내용을 작성하세요]

---

## 💡 보너스 팁

[추가 팁을 작성하세요]

## 🔗 관련 자료

- [관련 링크 1]
- [관련 링크 2]

---
*이 글은 리스트형 템플릿을 기반으로 생성되었습니다.*`;
    }

    return `# ${topic}\n\n${topic}에 대한 블로그 초안입니다.`;
}

// Generate with OpenAI API
async function generateWithOpenAI() {
    const apiKey = apiKeyInput.value.trim();
    const prompt = buildPrompt();
    const selectedModel = aiModelSelect.value;

    // 길이에 따른 토큰 수 계산
    const length = getSelectedLength();
    const lengthSetting = LENGTH_SETTINGS[length];
    const estimatedTokens = Math.ceil(lengthSetting.chars * 1.5) + 500;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: selectedModel,
                messages: [
                    {
                        role: 'system',
                        content: `당신은 전문적인 블로그 작가입니다. 중요: 반드시 요청된 글자 수(${lengthSetting.chars}자 이상)를 충족하는 상세한 블로그 글을 작성하세요. 절대 짧게 요약하지 마세요.`
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.8,
                max_tokens: Math.max(estimatedTokens, 4000)
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content.trim();

    } catch (error) {
        console.error('Error with OpenAI API:', error);
        throw error;
    }
}

// Generate with Google Gemini API (with Exponential Backoff retry)
async function generateWithGemini() {
    const apiKey = apiKeyInput.value.trim();
    const prompt = buildPrompt();
    const selectedModel = aiModelSelect.value;

    // 길이에 따른 토큰 수 계산 (한국어 약 1.5자 = 1토큰)
    const length = getSelectedLength();
    const lengthSetting = LENGTH_SETTINGS[length];
    const estimatedTokens = Math.ceil(lengthSetting.chars * 1.5) + 500; // 여유분 추가

    const systemPrompt = `당신은 전문적인 블로그 작가입니다.
중요: 글을 요약하거나 짧게 쓰지 마세요. 반드시 요청된 글자 수(${lengthSetting.chars}자 이상)를 충족하는 상세하고 풍부한 내용을 작성해야 합니다.
서론, 본론(여러 소제목), 결론을 포함한 완성도 높은 블로그 글을 작성하세요.`;
    const fullPrompt = `${systemPrompt}\n\n${prompt}`;

    const maxRetries = 5;
    const baseDelay = 2000; // 2초 시작
    const maxDelay = 60000; // 최대 60초

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1/models/${selectedModel}:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: fullPrompt
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.8,
                            maxOutputTokens: Math.max(estimatedTokens, 4000)
                        }
                    })
                }
            );

            // 429 에러 시 Exponential Backoff + Jitter로 재시도
            if (response.status === 429) {
                if (attempt < maxRetries) {
                    // Exponential backoff: 2^attempt * base + random jitter
                    const exponentialDelay = Math.min(baseDelay * Math.pow(2, attempt - 1), maxDelay);
                    const jitter = Math.random() * 1000; // 0-1초 랜덤 추가
                    const delay = exponentialDelay + jitter;

                    // UI에 재시도 상태 표시
                    updateLoadingMessage(`요청 한도 초과. ${Math.round(delay / 1000)}초 후 재시도... (${attempt}/${maxRetries})`);
                    console.log(`Rate limited. Exponential backoff: ${Math.round(delay / 1000)}s (attempt ${attempt}/${maxRetries})`);

                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
            }

            // 503 Service Unavailable도 재시도
            if (response.status === 503) {
                if (attempt < maxRetries) {
                    const delay = baseDelay * attempt;
                    updateLoadingMessage(`서버 과부하. ${Math.round(delay / 1000)}초 후 재시도... (${attempt}/${maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
            }

            // 성공 시 로딩 메시지 복원
            updateLoadingMessage('AI가 블로그를 작성하고 있습니다...');

            const data = await response.json();
            return data.candidates[0].content.parts[0].text.trim();

        } catch (error) {
            if (attempt === maxRetries) {
                console.error('Error with Gemini API:', error);
                throw error;
            }
            // 네트워크 오류 등도 재시도
            const delay = baseDelay * attempt;
            updateLoadingMessage(`오류 발생. ${Math.round(delay / 1000)}초 후 재시도... (${attempt}/${maxRetries})`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// 로딩 메시지 업데이트 함수
function updateLoadingMessage(message) {
    const loadingText = document.querySelector('.loading-text');
    if (loadingText) {
        loadingText.textContent = message;
    }
}

// Generate with Anthropic Claude API
async function generateWithClaude() {
    const apiKey = apiKeyInput.value.trim();
    const prompt = buildPrompt();
    const selectedModel = aiModelSelect.value;

    // 길이에 따른 토큰 수 계산
    const length = getSelectedLength();
    const lengthSetting = LENGTH_SETTINGS[length];
    const estimatedTokens = Math.ceil(lengthSetting.chars * 1.5) + 500;

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'anthropic-dangerous-direct-browser-access': 'true'
            },
            body: JSON.stringify({
                model: selectedModel,
                max_tokens: Math.max(estimatedTokens, 4000),
                messages: [{
                    role: 'user',
                    content: prompt
                }],
                system: `당신은 전문적인 블로그 작가입니다. 중요: 반드시 요청된 글자 수(${lengthSetting.chars}자 이상)를 충족하는 상세한 블로그 글을 작성하세요. 절대 짧게 요약하지 마세요.`,
                temperature: 0.8
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
        }

        const data = await response.json();
        return data.content[0].text.trim();

    } catch (error) {
        console.error('Error with Claude API:', error);
        throw error;
    }
}

// Handle generate button click
async function handleGenerate() {
    if (!validateInputs()) {
        return;
    }

    // Save topic (자동 저장 설정 확인)
    saveToLocalStorageIfEnabled(STORAGE_KEYS.LAST_TOPIC, topicInput.value.trim());

    // Show loading
    showLoading(true);
    generateBtn.disabled = true;

    try {
        const generatedText = await generateBlogDraft();

        // Save current version as previous before replacing
        if (resultText.value.trim()) {
            savePreviousVersion(resultText.value);
        }

        // Display result
        resultText.value = generatedText;
        resultCard.classList.remove('hidden');

        // Reset to edit mode when new result is generated
        switchTab('edit');
        updateStats();

        // Save result (자동 저장 설정 확인)
        saveToLocalStorageIfEnabled(STORAGE_KEYS.LAST_RESULT, generatedText);
        saveToHistory(generatedText);

        // Scroll to result
        setTimeout(() => {
            adBottom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);

    } catch (error) {
        const provider = aiProviderSelect.value;
        const providerName = AI_PROVIDERS[provider].name;
        let errorMessage = '블로그 초안 생성 중 오류가 발생했습니다.';

        if (error.message.includes('API key') || error.message.includes('API_KEY')) {
            errorMessage = 'API 키가 유효하지 않습니다. 올바른 키를 입력해주세요.';
        } else if (error.message.includes('quota') || error.message.includes('rate') || error.message.includes('limit')) {
            errorMessage = `API 사용량을 초과했습니다. ${providerName} 계정을 확인해주세요.`;
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            errorMessage = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.';
        } else {
            errorMessage += `\n\n오류 상세: ${error.message}`;
        }

        alert(errorMessage);

    } finally {
        showLoading(false);
        generateBtn.disabled = false;
    }
}

// ===== New Feature Functions =====

// Character and Word Counter
function updateStats() {
    const text = resultText.value;
    const charCount = text.length;
    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

    const lengthKey = getSelectedLength();
    const targetLength = LENGTH_SETTINGS[lengthKey].chars;

    // Calculate reading time (average Korean reading speed: 450 chars/min)
    const readingMinutes = Math.ceil(charCount / 450);
    const readingTimeText = readingMinutes === 0 ? '0분' :
        readingMinutes === 1 ? '1분' :
            `${readingMinutes}분`;

    charCountDisplay.textContent = charCount.toLocaleString();
    wordCountDisplay.textContent = wordCount.toLocaleString();
    readingTimeDisplay.textContent = readingTimeText;
    targetLengthDisplay.textContent = `${targetLength.toLocaleString()}자`;

    const percentage = Math.min(Math.round((charCount / targetLength) * 100), 100);
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}%`;

    // Color coding
    progressFill.className = 'progress-fill';
    if (percentage >= 100) {
        progressFill.classList.add('success');
    } else if (percentage >= 80) {
        progressFill.classList.add('warning');
    } else if (percentage < 30 && charCount > 0) {
        progressFill.classList.add('error');
    }
}

// Tab Switching (Edit, Preview, CSS, SEO)
function switchTab(mode) {
    previewTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.mode === mode);
    });

    // Hide all content areas first (with null checks)
    if (resultText) resultText.classList.add('hidden');
    if (markdownPreview) markdownPreview.classList.add('hidden');
    if (cssEditor) cssEditor.classList.add('hidden');
    if (previewContainer) previewContainer.classList.add('hidden');
    if (viewModeToggles) viewModeToggles.classList.add('hidden');
    if (seoAnalysis) seoAnalysis.classList.add('hidden');
    if (similarityAnalysis) similarityAnalysis.classList.add('hidden');

    if (mode === 'edit') {
        if (resultText) resultText.classList.remove('hidden');
    } else if (mode === 'preview') {
        if (previewContainer) previewContainer.classList.remove('hidden');
        if (viewModeToggles) viewModeToggles.classList.remove('hidden');
        updatePreview();
    } else if (mode === 'css') {
        if (cssEditor) cssEditor.classList.remove('hidden');
    } else if (mode === 'seo') {
        if (seoAnalysis) seoAnalysis.classList.remove('hidden');
        analyzeSEO();
    } else if (mode === 'similarity') {
        if (similarityAnalysis) similarityAnalysis.classList.remove('hidden');
    }
}

// Update Preview Content
function updatePreview() {
    // Configure marked options
    marked.setOptions({
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // Process custom block syntax before markdown parsing
    const processedMarkdown = processCustomBlocks(resultText.value);
    const htmlContent = marked.parse(processedMarkdown);

    // Update both desktop and mobile previews
    if (desktopContent) desktopContent.innerHTML = htmlContent;
    if (mobileContent) mobileContent.innerHTML = htmlContent;

    // Generate TOC
    generateTableOfContents();

    // Apply custom CSS
    applyCustomCss();
}

// Process custom block syntax: :::classname content :::
function processCustomBlocks(markdown) {
    // Pattern: :::classname\ncontent\n:::
    // Supports: :::info, :::warning, :::success, :::error, :::tip, :::note, :::highlight, :::card, or any custom class
    const blockPattern = /:::([\w-]+)\n([\s\S]*?):::/g;

    return markdown.replace(blockPattern, (match, className, content) => {
        // Convert content to HTML first, then wrap in div
        const trimmedContent = content.trim();
        return `<div class="block-${className}">\n\n${trimmedContent}\n\n</div>`;
    });
}

// Process inline class syntax: {.classname}text{/}
function processInlineClasses(html) {
    // Pattern: {.classname}content{/}
    const inlinePattern = /\{\.([^}]+)\}([\s\S]*?)\{\/\}/g;

    return html.replace(inlinePattern, (match, className, content) => {
        return `<span class="${className}">${content}</span>`;
    });
}

// Generate Table of Contents from markdown headings
function generateTableOfContents() {
    const markdownText = resultText.value;
    const headings = [];

    // Extract headings from markdown
    const lines = markdownText.split('\n');
    lines.forEach((line, index) => {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = `heading-${index}`;
            headings.push({ level, text, id });
        }
    });

    // Show/hide TOC container
    if (headings.length === 0) {
        tocContainer.classList.add('hidden');
        return;
    } else {
        tocContainer.classList.remove('hidden');
    }

    // Generate TOC HTML
    const tocHTML = headings.map(heading => {
        return `<a href="#${heading.id}" class="toc-link" data-level="${heading.level}">${heading.text}</a>`;
    }).join('');

    tocNav.innerHTML = tocHTML;

    // Add IDs to actual headings in preview for smooth scrolling
    addHeadingIds(desktopContent, headings);
    addHeadingIds(mobileContent, headings);

    // Add click handlers for smooth scrolling
    tocNav.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = desktopContent.querySelector(`#${targetId}`) || mobileContent.querySelector(`#${targetId}`);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Highlight clicked link
                tocNav.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Add IDs to headings in rendered HTML
function addHeadingIds(container, headings) {
    const headingElements = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let headingIndex = 0;

    headingElements.forEach(element => {
        if (headingIndex < headings.length) {
            element.id = headings[headingIndex].id;
            headingIndex++;
        }
    });
}

// Apply Custom CSS to Previews
function applyCustomCss() {
    const customCss = customCssTextarea.value;

    // Remove existing custom style tags
    const existingStyles = document.querySelectorAll('style[data-custom-preview]');
    existingStyles.forEach(style => style.remove());

    if (customCss.trim()) {
        // Create style element for desktop preview
        const desktopStyle = document.createElement('style');
        desktopStyle.setAttribute('data-custom-preview', 'desktop');
        desktopStyle.textContent = `#desktopContent { ${customCss} }`;
        document.head.appendChild(desktopStyle);

        // Create style element for mobile preview
        const mobileStyle = document.createElement('style');
        mobileStyle.setAttribute('data-custom-preview', 'mobile');
        mobileStyle.textContent = `#mobileContent { ${customCss} }`;
        document.head.appendChild(mobileStyle);
    }
}

// Reset Custom CSS
function resetCustomCss() {
    if (confirm('커스텀 CSS를 초기화하시겠습니까?')) {
        customCssTextarea.value = '';
        localStorage.removeItem(STORAGE_KEYS.CUSTOM_CSS);
        applyCustomCss();
    }
}

// Load CSS Template
function loadCssTemplate() {
    const templateCss = `/* 🎨 블로그 스타일 템플릿 */

/* 전체 폰트 설정 */
font-family: 'Pretendard', -apple-system, sans-serif;
line-height: 1.8;
color: #333;

/* 제목 스타일 */
h1 {
    font-size: 2.2em;
    color: #1a1a2e;
    border-bottom: 3px solid #e94560;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

h2 {
    font-size: 1.6em;
    color: #16213e;
    margin-top: 30px;
    padding-left: 12px;
    border-left: 4px solid #e94560;
}

h3 {
    font-size: 1.3em;
    color: #0f3460;
    margin-top: 20px;
}

/* 문단 스타일 */
p {
    font-size: 1.1em;
    margin-bottom: 16px;
    text-align: justify;
}

/* 강조 스타일 */
strong {
    color: #e94560;
    font-weight: 700;
}

em {
    color: #0f3460;
    font-style: italic;
}

/* 리스트 스타일 */
ul, ol {
    padding-left: 24px;
    margin-bottom: 16px;
}

li {
    margin-bottom: 8px;
    line-height: 1.6;
}

/* 인용문 스타일 */
blockquote {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
    border-left: 5px solid #e94560;
    padding: 16px 20px;
    margin: 20px 0;
    border-radius: 0 8px 8px 0;
    font-style: italic;
}

/* 코드 스타일 */
code {
    background: #f4f4f5;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 0.9em;
    color: #e94560;
}

pre {
    background: #1a1a2e;
    color: #e4e4e7;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
}

/* 링크 스타일 */
a {
    color: #e94560;
    text-decoration: none;
    border-bottom: 1px dashed #e94560;
    transition: all 0.2s;
}

a:hover {
    color: #16213e;
    border-bottom-style: solid;
}

/* 구분선 */
hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, transparent, #e94560, transparent);
    margin: 30px 0;
}

/* 이미지 */
img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* ========================================
   커스텀 블록 스타일 (:::클래스명 사용)
   ======================================== */

/* 공통 블록 스타일 */
[class^="block-"] {
    padding: 16px 20px;
    margin: 20px 0;
    border-radius: 8px;
    border-left: 4px solid;
}

/* 정보 블록 - :::info */
.block-info {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-left-color: #2196f3;
    color: #1565c0;
}

/* 경고 블록 - :::warning */
.block-warning {
    background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
    border-left-color: #ff9800;
    color: #e65100;
}

/* 성공 블록 - :::success */
.block-success {
    background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
    border-left-color: #4caf50;
    color: #2e7d32;
}

/* 에러 블록 - :::error */
.block-error {
    background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
    border-left-color: #f44336;
    color: #c62828;
}

/* 팁 블록 - :::tip */
.block-tip {
    background: linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%);
    border-left-color: #673ab7;
    color: #4527a0;
}

/* 노트 블록 - :::note */
.block-note {
    background: linear-gradient(135deg, #fafafa 0%, #eeeeee 100%);
    border-left-color: #9e9e9e;
    color: #424242;
}

/* 하이라이트 블록 - :::highlight */
.block-highlight {
    background: linear-gradient(135deg, #fffde7 0%, #fff9c4 100%);
    border-left-color: #ffc107;
    color: #f57f17;
    font-weight: 500;
}

/* 카드 블록 - :::card */
.block-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-left: none;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    padding: 24px;
}

/* 인용 블록 - :::quote */
.block-quote {
    background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
    border-left-color: #9c27b0;
    color: #6a1b9a;
    font-style: italic;
}`;

    if (customCssTextarea.value.trim() && !confirm('현재 CSS를 템플릿으로 대체하시겠습니까?')) {
        return;
    }

    customCssTextarea.value = templateCss;
    localStorage.setItem(STORAGE_KEYS.CUSTOM_CSS, templateCss);
    applyCustomCss();

    // 미리보기 탭으로 자동 전환
    switchTab('preview');
}

// Switch View Mode (Desktop, Mobile, Both)
function switchViewMode(mode) {
    // Update active button
    viewModeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === mode);
    });

    // Update preview container classes
    previewContainer.classList.remove('desktop-only', 'mobile-only', 'both-view');

    const desktopPreview = document.getElementById('desktopPreview');
    const mobilePreview = document.getElementById('mobilePreview');

    if (mode === 'desktop') {
        previewContainer.classList.add('desktop-only');
        desktopPreview.classList.remove('hidden');
        mobilePreview.classList.add('hidden');
    } else if (mode === 'mobile') {
        previewContainer.classList.add('mobile-only');
        desktopPreview.classList.add('hidden');
        mobilePreview.classList.remove('hidden');
    } else if (mode === 'both') {
        previewContainer.classList.add('both-view');
        desktopPreview.classList.remove('hidden');
        mobilePreview.classList.remove('hidden');
    }
}

// Open Security Modal
function openSecurityModal() {
    securityModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Security Modal
function closeSecurityModal() {
    securityModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Multi-format Export
function handleExport(format) {
    const content = resultText.value;
    const topic = topicInput.value.trim() || 'blog-draft';
    const filename = `${topic.replace(/[^a-z0-9가-힣]/gi, '_').toLowerCase()}_draft`;

    if (!content) {
        alert('내보낼 내용이 없습니다.');
        return;
    }

    switch (format) {
        case 'txt':
            downloadFile(content, `${filename}.txt`, 'text/plain');
            break;
        case 'md':
            downloadFile(content, `${filename}.md`, 'text/markdown');
            break;
        case 'html':
            const customCss = customCssTextarea.value.trim();
            const baseStyles = `
        body { font-family: sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
        h1, h2, h3 { color: #222; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; font-family: monospace; }
        blockquote { border-left: 5px solid #ccc; margin: 20px 0; padding-left: 20px; color: #666; font-style: italic; }
`;
            const finalStyles = customCss ? `${baseStyles}\n        /* Custom Styles */\n        ${customCss}` : baseStyles;

            const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic}</title>
    <style>
${finalStyles}
    </style>
</head>
<body>
    ${marked.parse(content)}
</body>
</html>`;
            downloadFile(htmlContent, `${filename}.html`, 'text/html');
            break;
    }
}

function downloadFile(content, filename, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
}

// History Management
function saveToHistory(content) {
    // 자동 저장이 비활성화되어 있으면 히스토리 저장 안함
    if (isAutoSaveDisabled()) {
        return;
    }

    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    const newItem = {
        id: Date.now(),
        timestamp: new Date().toLocaleString('ko-KR'),
        topic: topicInput.value.trim(),
        tone: toneSelect.value,
        length: getSelectedLength(),
        content: content
    };

    // Add to beginning and keep last 10
    history.unshift(newItem);
    if (history.length > 10) history.pop();

    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');

    if (history.length === 0) {
        historyList.innerHTML = '<div class="history-empty"><p>📝 저장된 히스토리가 없습니다</p></div>';
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item" onclick="loadFromHistory(${item.id})">
            <div class="history-item-header">
                <span class="history-item-time">${item.timestamp}</span>
                <button class="history-item-delete" onclick="event.stopPropagation(); deleteHistoryItem(${item.id})">✕</button>
            </div>
            <div class="history-item-topic">${item.topic}</div>
            <div class="history-item-meta">${item.tone} • ${item.length}</div>
            <div class="history-item-preview">${item.content.substring(0, 100)}...</div>
        </div>
    `).join('');
}

function loadFromHistory(id) {
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    const item = history.find(h => h.id === id);

    if (item) {
        topicInput.value = item.topic;
        toneSelect.value = item.tone;
        // Update radio button
        for (const radio of lengthRadios) {
            radio.checked = radio.value === item.length;
        }
        resultText.value = item.content;
        resultCard.classList.remove('hidden');
        switchTab('edit');
        updateStats();

        // Hide sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            historySidebar.classList.remove('open');
        }

        resultCard.scrollIntoView({ behavior: 'smooth' });
    }
}

function deleteHistoryItem(id) {
    let history = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY) || '[]');
    history = history.filter(h => h.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    renderHistory();
}

function clearHistory() {
    if (confirm('모든 히스토리를 삭제하시겠습니까?')) {
        localStorage.removeItem(STORAGE_KEYS.HISTORY);
        renderHistory();
    }
}

// Reset all data (clear all localStorage)
function resetAllData() {
    if (confirm('모든 데이터를 초기화하시겠습니까?\n\n• 저장된 API 키\n• 히스토리\n• 커스텀 CSS\n• 기타 설정\n\n모든 데이터가 삭제됩니다.')) {
        // Clear all STORAGE_KEYS
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });

        // Also clear provider-specific model settings
        Object.keys(AI_PROVIDERS).forEach(provider => {
            localStorage.removeItem(`${provider}_model`);
        });

        // Reset UI
        apiKeyInput.value = '';
        topicInput.value = '';
        keywordsInput.value = '';
        resultText.value = '';
        if (customCssTextarea) customCssTextarea.value = '';

        // Hide result card
        resultCard.classList.add('hidden');

        // Reset to default provider
        aiProviderSelect.value = 'template';
        updateProviderUI();

        // Clear history display
        renderHistory();

        // Apply reset CSS
        applyCustomCss();

        alert('모든 데이터가 초기화되었습니다.');
    }
}

// Exposure for onclick handlers
window.loadFromHistory = loadFromHistory;
window.deleteHistoryItem = deleteHistoryItem;

// Handle copy button click
async function handleCopy() {
    const text = resultText.value;

    if (!text) {
        return;
    }

    try {
        await navigator.clipboard.writeText(text);

        // Visual feedback
        const originalText = copyBtn.querySelector('.btn-text').textContent;
        copyBtn.querySelector('.btn-text').textContent = '복사됨!';
        copyBtn.querySelector('.btn-icon').textContent = '✅';

        setTimeout(() => {
            copyBtn.querySelector('.btn-text').textContent = originalText;
            copyBtn.querySelector('.btn-icon').textContent = '📋';
        }, 2000);

    } catch (error) {
        alert('클립보드 복사에 실패했습니다.');
        console.error('Copy error:', error);
    }
}

// Show/hide loading overlay
function showLoading(show) {
    if (show) {
        loadingOverlay.classList.remove('hidden');
    } else {
        loadingOverlay.classList.add('hidden');
    }
}

// Prevent form submission on Enter key (except in textarea)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (e.target === apiKeyInput || e.target === topicInput || e.target === keywordsInput) {
            handleGenerate();
        }
    }
});

// ===== SEO Analysis Functions =====

function analyzeSEO() {
    const text = resultText.value;
    const keywords = keywordsInput.value.trim().split(',').map(k => k.trim()).filter(k => k);

    const scores = {
        title: 0,
        content: 0,
        keyword: 0,
        heading: 0,
        readability: 0
    };

    const recommendations = [];

    // 1. Title Analysis (H1)
    const h1Match = text.match(/^#\s+(.+)$/m);
    if (h1Match) {
        const titleLength = h1Match[1].length;
        if (titleLength >= 30 && titleLength <= 60) {
            scores.title = 20;
            seoTitleDesc.textContent = `완벽한 제목 길이입니다 (${titleLength}자)`;
            seoTitleBar.className = 'metric-bar-fill excellent';
        } else if (titleLength >= 20 && titleLength < 30) {
            scores.title = 15;
            seoTitleDesc.textContent = `제목이 조금 짧습니다 (${titleLength}자). 30-60자 권장`;
            seoTitleBar.className = 'metric-bar-fill good';
            recommendations.push('제목을 30자 이상으로 늘려보세요');
        } else if (titleLength > 60) {
            scores.title = 15;
            seoTitleDesc.textContent = `제목이 너무 깁니다 (${titleLength}자). 30-60자 권장`;
            seoTitleBar.className = 'metric-bar-fill fair';
            recommendations.push('제목을 60자 이하로 줄여보세요');
        } else {
            scores.title = 10;
            seoTitleDesc.textContent = `제목이 너무 짧습니다 (${titleLength}자)`;
            seoTitleBar.className = 'metric-bar-fill poor';
            recommendations.push('제목을 30-60자로 작성하세요');
        }
    } else {
        seoTitleDesc.textContent = 'H1 제목이 없습니다. 마크다운 # 제목을 추가하세요';
        seoTitleBar.className = 'metric-bar-fill poor';
        recommendations.push('H1 제목(# 제목)을 추가하세요');
    }

    // 2. Content Length Analysis
    const contentLength = text.length;
    if (contentLength >= 1000) {
        scores.content = 20;
        seoContentDesc.textContent = `충분한 콘텐츠 길이입니다 (${contentLength}자)`;
        seoContentBar.className = 'metric-bar-fill excellent';
    } else if (contentLength >= 600) {
        scores.content = 15;
        seoContentDesc.textContent = `적절한 콘텐츠 길이입니다 (${contentLength}자)`;
        seoContentBar.className = 'metric-bar-fill good';
    } else if (contentLength >= 300) {
        scores.content = 10;
        seoContentDesc.textContent = `최소 기준을 충족했습니다 (${contentLength}자). 더 길게 작성 권장`;
        seoContentBar.className = 'metric-bar-fill fair';
        recommendations.push('콘텐츠를 600자 이상으로 늘려보세요');
    } else {
        scores.content = 5;
        seoContentDesc.textContent = `콘텐츠가 너무 짧습니다 (${contentLength}자). 최소 300자 권장`;
        seoContentBar.className = 'metric-bar-fill poor';
        recommendations.push('콘텐츠를 최소 300자 이상으로 작성하세요');
    }

    // 3. Keyword Density Analysis
    if (keywords.length > 0) {
        const textLower = text.toLowerCase();
        const words = textLower.split(/\s+/).length;
        let totalKeywordCount = 0;

        keywords.forEach(keyword => {
            const keywordLower = keyword.toLowerCase();
            const regex = new RegExp(`\\b${keywordLower}\\b`, 'gi');
            const matches = textLower.match(regex);
            if (matches) {
                totalKeywordCount += matches.length;
            }
        });

        const density = words > 0 ? (totalKeywordCount / words) * 100 : 0;

        if (density >= 1.5 && density <= 3) {
            scores.keyword = 20;
            seoKeywordDesc.textContent = `이상적인 키워드 밀도입니다 (${density.toFixed(2)}%)`;
            seoKeywordBar.className = 'metric-bar-fill excellent';
        } else if (density >= 0.5 && density < 1.5) {
            scores.keyword = 15;
            seoKeywordDesc.textContent = `키워드 밀도가 낮습니다 (${density.toFixed(2)}%). 1.5-3% 권장`;
            seoKeywordBar.className = 'metric-bar-fill good';
            recommendations.push('키워드를 조금 더 자연스럽게 포함시켜보세요');
        } else if (density > 3 && density <= 5) {
            scores.keyword = 15;
            seoKeywordDesc.textContent = `키워드 밀도가 높습니다 (${density.toFixed(2)}%). 1.5-3% 권장`;
            seoKeywordBar.className = 'metric-bar-fill fair';
            recommendations.push('키워드 사용을 줄여 더 자연스럽게 작성하세요');
        } else if (density > 5) {
            scores.keyword = 5;
            seoKeywordDesc.textContent = `키워드 과다 사용 (${density.toFixed(2)}%). 스팸으로 감지될 수 있습니다`;
            seoKeywordBar.className = 'metric-bar-fill poor';
            recommendations.push('키워드를 과도하게 사용하지 마세요');
        } else {
            scores.keyword = 10;
            seoKeywordDesc.textContent = `키워드가 거의 없습니다 (${density.toFixed(2)}%)`;
            seoKeywordBar.className = 'metric-bar-fill poor';
            recommendations.push('키워드를 본문에 포함시키세요');
        }
    } else {
        scores.keyword = 10;
        seoKeywordDesc.textContent = '키워드가 입력되지 않았습니다';
        seoKeywordBar.className = 'metric-bar-fill fair';
    }

    // 4. Heading Structure Analysis
    const h1Count = (text.match(/^#\s+/gm) || []).length;
    const h2Count = (text.match(/^##\s+/gm) || []).length;
    const h3Count = (text.match(/^###\s+/gm) || []).length;
    const totalHeadings = h1Count + h2Count + h3Count;

    if (h1Count === 1 && totalHeadings >= 3) {
        scores.heading = 20;
        seoHeadingDesc.textContent = `훌륭한 헤딩 구조입니다 (H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count})`;
        seoHeadingBar.className = 'metric-bar-fill excellent';
    } else if (h1Count === 1 && totalHeadings >= 2) {
        scores.heading = 15;
        seoHeadingDesc.textContent = `적절한 헤딩 구조입니다 (H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count})`;
        seoHeadingBar.className = 'metric-bar-fill good';
    } else if (h1Count === 1 && totalHeadings >= 1) {
        scores.heading = 10;
        seoHeadingDesc.textContent = `헤딩이 부족합니다. H2, H3 추가 권장`;
        seoHeadingBar.className = 'metric-bar-fill fair';
        recommendations.push('H2, H3 헤딩을 추가해 구조를 개선하세요');
    } else if (h1Count > 1) {
        scores.heading = 5;
        seoHeadingDesc.textContent = `H1이 ${h1Count}개입니다. 1개만 사용하세요`;
        seoHeadingBar.className = 'metric-bar-fill poor';
        recommendations.push('H1 제목은 하나만 사용하세요');
    } else {
        scores.heading = 0;
        seoHeadingDesc.textContent = 'H1 제목이 없습니다';
        seoHeadingBar.className = 'metric-bar-fill poor';
        recommendations.push('H1 제목을 추가하세요');
    }

    // 5. Readability Analysis (평균 문장 길이)
    const sentences = text.split(/[.!?。！？]/g).filter(s => s.trim().length > 0);
    const avgSentenceLength = sentences.length > 0 ? contentLength / sentences.length : 0;

    if (avgSentenceLength >= 40 && avgSentenceLength <= 100) {
        scores.readability = 20;
        seoReadabilityDesc.textContent = `읽기 좋은 문장 길이입니다 (평균 ${Math.round(avgSentenceLength)}자)`;
        seoReadabilityBar.className = 'metric-bar-fill excellent';
    } else if (avgSentenceLength >= 30 && avgSentenceLength < 40) {
        scores.readability = 15;
        seoReadabilityDesc.textContent = `문장이 조금 짧습니다 (평균 ${Math.round(avgSentenceLength)}자)`;
        seoReadabilityBar.className = 'metric-bar-fill good';
    } else if (avgSentenceLength > 100 && avgSentenceLength <= 150) {
        scores.readability = 15;
        seoReadabilityDesc.textContent = `문장이 조금 깁니다 (평균 ${Math.round(avgSentenceLength)}자)`;
        seoReadabilityBar.className = 'metric-bar-fill good';
        recommendations.push('긴 문장은 나누어 가독성을 높이세요');
    } else if (avgSentenceLength > 150) {
        scores.readability = 10;
        seoReadabilityDesc.textContent = `문장이 너무 깁니다 (평균 ${Math.round(avgSentenceLength)}자)`;
        seoReadabilityBar.className = 'metric-bar-fill fair';
        recommendations.push('문장을 짧게 나누세요');
    } else {
        scores.readability = 10;
        seoReadabilityDesc.textContent = `문장이 너무 짧습니다 (평균 ${Math.round(avgSentenceLength)}자)`;
        seoReadabilityBar.className = 'metric-bar-fill fair';
    }

    // Calculate Overall Score
    const overallScore = scores.title + scores.content + scores.keyword + scores.heading + scores.readability;

    // Update UI
    seoOverallScore.textContent = overallScore;
    seoTitleScore.textContent = `${scores.title}/20`;
    seoContentScore.textContent = `${scores.content}/20`;
    seoKeywordScore.textContent = `${scores.keyword}/20`;
    seoHeadingScore.textContent = `${scores.heading}/20`;
    seoReadabilityScore.textContent = `${scores.readability}/20`;

    // Update progress bars
    seoTitleBar.style.width = `${(scores.title / 20) * 100}%`;
    seoContentBar.style.width = `${(scores.content / 20) * 100}%`;
    seoKeywordBar.style.width = `${(scores.keyword / 20) * 100}%`;
    seoHeadingBar.style.width = `${(scores.heading / 20) * 100}%`;
    seoReadabilityBar.style.width = `${(scores.readability / 20) * 100}%`;

    // Update recommendations
    if (recommendations.length === 0) {
        seoRecommendationsList.innerHTML = '<li style="list-style: none;">🎉 모든 SEO 기준을 충족했습니다!</li>';
    } else {
        seoRecommendationsList.innerHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    }
}

// ===== Similarity Analysis Functions =====

async function analyzeSimilarity() {
    const content = resultText.value.trim();

    if (!content) {
        alert('분석할 콘텐츠가 없습니다. 먼저 블로그 초안을 생성해주세요.');
        return;
    }

    const provider = aiProviderSelect.value;
    const apiKey = getApiKey(provider);

    // Show loading state
    if (analyzeSimilarityBtn) {
        analyzeSimilarityBtn.disabled = true;
        analyzeSimilarityBtn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">분석 중...</span>';
    }

    try {
        let analysisResult;

        // Use local analysis if no API key or template provider
        if (provider === 'template' || !apiKey) {
            analysisResult = performLocalSimilarityAnalysis(content);
        } else {
            // Try API analysis, fallback to local on error
            try {
                analysisResult = await performSimilarityAnalysis(content, provider, apiKey);
            } catch (apiError) {
                console.warn('API analysis failed, using local analysis:', apiError.message);
                analysisResult = performLocalSimilarityAnalysis(content);
            }
        }

        updateSimilarityUI(analysisResult);
    } catch (error) {
        console.error('Similarity analysis error:', error);
        alert(`분석 중 오류가 발생했습니다: ${error.message}`);
    } finally {
        if (analyzeSimilarityBtn) {
            analyzeSimilarityBtn.disabled = false;
            analyzeSimilarityBtn.innerHTML = '<span class="btn-icon">🔍</span><span class="btn-text">유사도 분석 시작</span>';
        }
    }
}

// Local similarity analysis (no API required)
function performLocalSimilarityAnalysis(content) {
    // Common Korean phrases that indicate generic content
    const commonPhrases = [
        '이 글에서는', '알아보겠습니다', '살펴보겠습니다', '소개해 드리겠습니다',
        '중요합니다', '필요합니다', '있습니다', '됩니다', '합니다',
        '때문입니다', '것입니다', '수 있습니다', '해야 합니다',
        '첫째', '둘째', '셋째', '마지막으로', '결론적으로',
        '다양한', '효과적인', '중요한', '필수적인', '기본적인',
        '따라서', '그러므로', '하지만', '그러나', '또한',
        '이러한', '이와 같이', '이를 통해', '이를 위해',
        '많은 사람들이', '누구나', '모든', '항상', '매우',
        '좋은 방법', '도움이 됩니다', '유용합니다', '효과가 있습니다'
    ];

    // AI-typical phrases
    const aiTypicalPhrases = [
        '흥미롭게도', '주목할 만한', '핵심적인', '본질적으로',
        '다양한 측면에서', '종합적으로', '체계적으로', '효율적으로',
        '지속 가능한', '혁신적인', '최적화', '극대화',
        '패러다임', '시너지', '인사이트', '솔루션'
    ];

    const sentences = content.split(/[.!?。]+/).filter(s => s.trim().length > 0);
    const words = content.replace(/[^\w\s가-힣]/g, '').split(/\s+/).filter(w => w.length > 0);

    // Detect common phrases
    const detectedCommon = [];
    const lowerContent = content.toLowerCase();

    commonPhrases.forEach(phrase => {
        if (lowerContent.includes(phrase.toLowerCase())) {
            detectedCommon.push(phrase);
        }
    });

    // Detect AI-typical phrases
    const detectedAiPhrases = [];
    aiTypicalPhrases.forEach(phrase => {
        if (lowerContent.includes(phrase.toLowerCase())) {
            detectedAiPhrases.push(phrase);
        }
    });

    // Calculate sentence diversity (unique sentence starts)
    const sentenceStarts = sentences.map(s => s.trim().substring(0, 10));
    const uniqueStarts = new Set(sentenceStarts);
    const sentenceDiversity = sentences.length > 0 ? (uniqueStarts.size / sentences.length) * 100 : 0;

    // Calculate word diversity
    const uniqueWords = new Set(words.map(w => w.toLowerCase()));
    const wordDiversity = words.length > 0 ? (uniqueWords.size / words.length) * 100 : 0;

    // Detect repeated phrases (3+ words appearing multiple times)
    const repeatedPhrases = findRepeatedPhrases(content);

    // Calculate scores
    const commonPhraseScore = Math.max(0, 100 - (detectedCommon.length * 5));
    const aiPhraseScore = Math.max(0, 100 - (detectedAiPhrases.length * 10));
    const diversityScore = (sentenceDiversity + wordDiversity) / 2;
    const repetitionPenalty = Math.min(repeatedPhrases.length * 10, 50);

    // Overall originality score
    const originalityScore = Math.round(
        (commonPhraseScore * 0.3 + aiPhraseScore * 0.2 + diversityScore * 0.3 + (100 - repetitionPenalty) * 0.2)
    );

    // AI generated probability (higher if many AI-typical phrases)
    const aiProbability = Math.min(100, Math.round(
        (detectedAiPhrases.length * 15) + (100 - sentenceDiversity) * 0.3 + (detectedCommon.length * 2)
    ));

    // Find unique expressions (longer unique phrases)
    const uniqueExpressions = findUniqueExpressions(content, commonPhrases.concat(aiTypicalPhrases));

    // Generate recommendations
    const recommendations = generateLocalRecommendations(
        detectedCommon, detectedAiPhrases, repeatedPhrases, sentenceDiversity, wordDiversity
    );

    return {
        originalityScore: Math.max(0, Math.min(100, originalityScore)),
        commonPhrases: detectedCommon.slice(0, 10),
        uniqueExpressions: uniqueExpressions.slice(0, 5),
        aiGeneratedProbability: Math.max(0, Math.min(100, aiProbability)),
        recommendations: recommendations,
        isLocalAnalysis: true
    };
}

function findRepeatedPhrases(content) {
    const words = content.split(/\s+/);
    const phrases = {};
    const repeated = [];

    // Find 3-word phrases
    for (let i = 0; i < words.length - 2; i++) {
        const phrase = words.slice(i, i + 3).join(' ').toLowerCase();
        if (phrase.length > 10) {
            phrases[phrase] = (phrases[phrase] || 0) + 1;
        }
    }

    for (const [phrase, count] of Object.entries(phrases)) {
        if (count >= 2) {
            repeated.push(phrase);
        }
    }

    return repeated.slice(0, 5);
}

function findUniqueExpressions(content, commonList) {
    const sentences = content.split(/[.!?。]+/).filter(s => s.trim().length > 10);
    const unique = [];

    sentences.forEach(sentence => {
        const trimmed = sentence.trim();
        const isCommon = commonList.some(phrase =>
            trimmed.toLowerCase().includes(phrase.toLowerCase())
        );

        if (!isCommon && trimmed.length > 20 && trimmed.length < 100) {
            // Check for creative elements (questions, exclamations, unique structures)
            if (trimmed.includes('?') || trimmed.includes('!') ||
                /["""''']/.test(trimmed) || /\d+/.test(trimmed)) {
                unique.push(trimmed.substring(0, 50) + (trimmed.length > 50 ? '...' : ''));
            }
        }
    });

    return unique;
}

function generateLocalRecommendations(commonPhrases, aiPhrases, repeated, sentDiv, wordDiv) {
    const recommendations = [];

    if (commonPhrases.length > 5) {
        recommendations.push('일반적인 표현이 많습니다. 더 구체적이고 독특한 표현으로 바꿔보세요.');
    }

    if (aiPhrases.length > 3) {
        recommendations.push('AI가 자주 사용하는 표현이 감지되었습니다. 자연스러운 구어체로 수정해보세요.');
    }

    if (repeated.length > 2) {
        recommendations.push('반복되는 문구가 있습니다. 다양한 표현으로 변경해보세요.');
    }

    if (sentDiv < 50) {
        recommendations.push('문장 시작이 비슷합니다. 다양한 문장 구조를 사용해보세요.');
    }

    if (wordDiv < 40) {
        recommendations.push('어휘가 반복적입니다. 동의어나 다른 표현을 활용해보세요.');
    }

    if (recommendations.length === 0) {
        recommendations.push('전반적으로 독창적인 글입니다. 계속해서 자신만의 스타일을 유지하세요!');
    }

    return recommendations;
}

async function performSimilarityAnalysis(content, provider, apiKey) {
    const analysisPrompt = `다음 블로그 글의 독창성과 유사 콘텐츠를 분석해주세요. 반드시 아래 JSON 형식으로만 응답해주세요. 다른 텍스트 없이 JSON만 출력하세요.

분석할 글:
"""
${content}
"""

응답 형식 (JSON):
{
  "originalityScore": (0-100 사이의 숫자, 높을수록 독창적),
  "commonPhrases": ["흔히 사용되는 표현1", "흔히 사용되는 표현2", ...],
  "uniqueExpressions": ["독특한 표현1", "독특한 표현2", ...],
  "aiGeneratedProbability": (0-100 사이의 숫자, AI가 생성했을 확률),
  "recommendations": ["독창성 개선 제안1", "독창성 개선 제안2", ...]
}`;

    let result;

    if (provider === 'openai') {
        result = await callOpenAIForAnalysis(analysisPrompt, apiKey);
    } else if (provider === 'gemini') {
        result = await callGeminiForAnalysis(analysisPrompt, apiKey);
    } else if (provider === 'claude') {
        result = await callClaudeForAnalysis(analysisPrompt, apiKey);
    }

    // Parse JSON response
    try {
        // Extract JSON from response (handle markdown code blocks)
        let jsonStr = result;
        const jsonMatch = result.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch) {
            jsonStr = jsonMatch[1].trim();
        }
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error('JSON parsing error:', e, 'Raw response:', result);
        throw new Error('AI 응답을 파싱할 수 없습니다. 다시 시도해주세요.');
    }
}

async function callOpenAIForAnalysis(prompt, apiKey) {
    const selectedModel = aiModelSelect.value || 'gpt-3.5-turbo';

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: selectedModel,
            messages: [
                {
                    role: 'system',
                    content: '당신은 콘텐츠 분석 전문가입니다. 텍스트의 독창성과 유사 콘텐츠를 분석합니다. 반드시 요청된 JSON 형식으로만 응답하세요.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.3,
            max_tokens: 2000
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function callGeminiForAnalysis(prompt, apiKey) {
    // Use the same model as content generation
    const selectedModel = aiModelSelect.value;

    const maxRetries = 3;
    const baseDelay = 2000;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1/models/${selectedModel}:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.3,
                            maxOutputTokens: 2000
                        }
                    })
                }
            );

            if (response.status === 429) {
                if (attempt < maxRetries) {
                    const delay = baseDelay * Math.pow(2, attempt - 1);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    continue;
                }
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
            }

            const data = await response.json();
            return data.candidates[0].content.parts[0].text.trim();
        } catch (error) {
            if (attempt === maxRetries) throw error;
            await new Promise(resolve => setTimeout(resolve, baseDelay * attempt));
        }
    }
}

async function callClaudeForAnalysis(prompt, apiKey) {
    const selectedModel = aiModelSelect.value || 'claude-3-5-haiku-20241022';

    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
            model: selectedModel,
            max_tokens: 2000,
            messages: [{
                role: 'user',
                content: prompt
            }],
            system: '당신은 콘텐츠 분석 전문가입니다. 텍스트의 독창성과 유사 콘텐츠를 분석합니다. 반드시 요청된 JSON 형식으로만 응답하세요.',
            temperature: 0.3
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text.trim();
}

function updateSimilarityUI(result) {
    const {
        originalityScore: origScore = 0,
        commonPhrases = [],
        uniqueExpressions = [],
        aiGeneratedProbability = 0,
        recommendations = [],
        isLocalAnalysis = false
    } = result;

    // Calculate individual scores (max 25 each)
    const scores = {
        originality: Math.round((origScore / 100) * 25),
        commonPhrases: Math.round((1 - Math.min(commonPhrases.length / 10, 1)) * 25),
        uniqueExpressions: Math.round(Math.min(uniqueExpressions.length / 5, 1) * 25),
        aiProbability: Math.round((1 - aiGeneratedProbability / 100) * 25)
    };

    const overallScore = scores.originality + scores.commonPhrases + scores.uniqueExpressions + scores.aiProbability;

    // Update overall score
    if (similarityOverallScore) {
        similarityOverallScore.textContent = overallScore;
    }

    // Show analysis type indicator
    const analysisType = isLocalAnalysis ? '(로컬 분석)' : '(AI 분석)';

    // Update Originality
    if (originalityScore) originalityScore.textContent = `${scores.originality}/25`;
    if (originalityBar) {
        originalityBar.style.width = `${(scores.originality / 25) * 100}%`;
        originalityBar.className = `metric-bar-fill ${getScoreClass(scores.originality, 25)}`;
    }
    if (originalityDesc) originalityDesc.textContent = `독창성 점수: ${origScore}점 ${analysisType}`;

    // Update Common Phrases
    if (commonPhrasesScore) commonPhrasesScore.textContent = `${scores.commonPhrases}/25`;
    if (commonPhrasesBar) {
        commonPhrasesBar.style.width = `${(scores.commonPhrases / 25) * 100}%`;
        commonPhrasesBar.className = `metric-bar-fill ${getScoreClass(scores.commonPhrases, 25)}`;
    }
    if (commonPhrasesDesc) commonPhrasesDesc.textContent = `${commonPhrases.length}개의 일반적 표현 감지됨`;

    // Update Unique Expressions
    if (uniqueExpressionsScore) uniqueExpressionsScore.textContent = `${scores.uniqueExpressions}/25`;
    if (uniqueExpressionsBar) {
        uniqueExpressionsBar.style.width = `${(scores.uniqueExpressions / 25) * 100}%`;
        uniqueExpressionsBar.className = `metric-bar-fill ${getScoreClass(scores.uniqueExpressions, 25)}`;
    }
    if (uniqueExpressionsDesc) uniqueExpressionsDesc.textContent = `${uniqueExpressions.length}개의 고유 표현 발견됨`;

    // Update AI Probability (inverse - lower is better)
    if (aiProbabilityScore) aiProbabilityScore.textContent = `${scores.aiProbability}/25`;
    if (aiProbabilityBar) {
        aiProbabilityBar.style.width = `${(scores.aiProbability / 25) * 100}%`;
        aiProbabilityBar.className = `metric-bar-fill ${getScoreClass(scores.aiProbability, 25)}`;
    }
    if (aiProbabilityDesc) aiProbabilityDesc.textContent = `AI 생성 확률: ${aiGeneratedProbability}%`;

    // Update detected phrases list
    if (phrasesList) {
        if (commonPhrases.length > 0) {
            phrasesList.innerHTML = commonPhrases.map(phrase =>
                `<span class="phrase-tag">${phrase}</span>`
            ).join('');
        } else {
            phrasesList.innerHTML = '<p class="phrases-empty">일반적인 표현이 감지되지 않았습니다. 훌륭합니다!</p>';
        }
    }

    // Update recommendations
    if (similarityRecommendationsList) {
        if (recommendations.length > 0) {
            similarityRecommendationsList.innerHTML = recommendations.map(rec =>
                `<li>${rec}</li>`
            ).join('');
        } else {
            similarityRecommendationsList.innerHTML = '<li style="list-style: none;">🎉 콘텐츠가 충분히 독창적입니다!</li>';
        }
    }
}

function getScoreClass(score, max) {
    const percentage = (score / max) * 100;
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'fair';
    return 'poor';
}

function getApiKey(provider) {
    const storageKey = {
        'openai': STORAGE_KEYS.OPENAI_API_KEY,
        'gemini': STORAGE_KEYS.GEMINI_API_KEY,
        'claude': STORAGE_KEYS.CLAUDE_API_KEY
    }[provider];

    return localStorage.getItem(storageKey) || '';
}

// ===== Version Compare Functions =====

function openCompareModal() {
    const currentText = resultText.value;
    const previousVersionData = JSON.parse(localStorage.getItem(STORAGE_KEYS.PREVIOUS_VERSION) || 'null');

    if (!previousVersionData) {
        alert('비교할 이전 버전이 없습니다.');
        return;
    }

    // Set current version
    currentVersionText.value = currentText;
    currentVersionTime.textContent = '현재';

    const currentStats = {
        chars: currentText.length,
        words: currentText.trim().split(/\s+/).length
    };
    currentVersionStats.textContent = `${currentStats.chars}자 / ${currentStats.words}단어`;

    // Set previous version
    previousVersionText.value = previousVersionData.content;
    previousVersionTime.textContent = previousVersionData.timestamp;

    const previousStats = {
        chars: previousVersionData.content.length,
        words: previousVersionData.content.trim().split(/\s+/).length
    };
    previousVersionStats.textContent = `${previousStats.chars}자 / ${previousStats.words}단어`;

    // Show modal
    compareModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCompareModal() {
    compareModal.classList.add('hidden');
    document.body.style.overflow = '';
    diffView.classList.add('hidden');
}

function restorePreviousVersion() {
    const previousVersionData = JSON.parse(localStorage.getItem(STORAGE_KEYS.PREVIOUS_VERSION) || 'null');

    if (!previousVersionData) {
        alert('복원할 이전 버전이 없습니다.');
        return;
    }

    if (confirm('이전 버전으로 복원하시겠습니까? 현재 내용이 덮어쓰여집니다.')) {
        // Save current as new previous before restoring
        savePreviousVersion(resultText.value);

        // Restore previous version
        resultText.value = previousVersionData.content;
        updateStats();

        // Save to last result
        localStorage.setItem(STORAGE_KEYS.LAST_RESULT, previousVersionData.content);

        closeCompareModal();

        // Show success message
        const originalText = copyBtn.querySelector('.btn-text').textContent;
        copyBtn.querySelector('.btn-text').textContent = '복원 완료!';
        copyBtn.querySelector('.btn-icon').textContent = '✅';

        setTimeout(() => {
            copyBtn.querySelector('.btn-text').textContent = originalText;
            copyBtn.querySelector('.btn-icon').textContent = '📋';
        }, 2000);
    }
}

function toggleDiffView() {
    const isHidden = diffView.classList.contains('hidden');

    if (isHidden) {
        const currentText = currentVersionText.value;
        const previousText = previousVersionText.value;

        // Simple diff implementation
        const diff = generateSimpleDiff(previousText, currentText);
        diffContent.innerHTML = diff;

        diffView.classList.remove('hidden');
        showDiffBtn.querySelector('.btn-text').textContent = '차이점 숨기기';
    } else {
        diffView.classList.add('hidden');
        showDiffBtn.querySelector('.btn-text').textContent = '차이점 강조';
    }
}

function generateSimpleDiff(oldText, newText) {
    const oldLines = oldText.split('\n');
    const newLines = newText.split('\n');

    let diffHtml = '';
    const maxLength = Math.max(oldLines.length, newLines.length);

    for (let i = 0; i < maxLength; i++) {
        const oldLine = oldLines[i] || '';
        const newLine = newLines[i] || '';

        if (oldLine === newLine) {
            diffHtml += `<div class="diff-line">${escapeHtml(newLine)}</div>`;
        } else {
            if (oldLine && !newLine) {
                diffHtml += `<div class="diff-line"><span class="diff-removed">${escapeHtml(oldLine)}</span></div>`;
            } else if (!oldLine && newLine) {
                diffHtml += `<div class="diff-line"><span class="diff-added">${escapeHtml(newLine)}</span></div>`;
            } else {
                diffHtml += `<div class="diff-line">`;
                diffHtml += `<span class="diff-removed">${escapeHtml(oldLine)}</span><br>`;
                diffHtml += `<span class="diff-added">${escapeHtml(newLine)}</span>`;
                diffHtml += `</div>`;
            }
        }
    }

    return diffHtml || '<p>변경 사항이 없습니다.</p>';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function savePreviousVersion(content) {
    const versionData = {
        content: content,
        timestamp: new Date().toLocaleString('ko-KR')
    };
    localStorage.setItem(STORAGE_KEYS.PREVIOUS_VERSION, JSON.stringify(versionData));

    // Show compare button if we have a previous version
    if (compareBtn) {
        compareBtn.classList.remove('hidden');
    }
}

// ===== AI Provider Functions =====

function updateProviderUI() {
    const provider = aiProviderSelect.value;
    const config = AI_PROVIDERS[provider];

    // Hide/show API key section for template provider
    const apiKeySection = apiKeyInput.closest('.section');
    if (config.noApiKey) {
        apiKeySection.style.display = 'none';
        directConnectionText.textContent = 'API 키 불필요 (무료)';
    } else {
        apiKeySection.style.display = '';
        // Update labels and links
        apiKeyLabel.textContent = `${config.name} API Key`;
        apiKeyLink.href = config.keyLink;
        directConnectionText.textContent = `직접 ${config.name} 연결`;
    }

    // Update model options
    aiModelSelect.innerHTML = '';
    config.models.forEach(model => {
        const option = document.createElement('option');
        option.value = model.value;
        option.textContent = model.label;
        aiModelSelect.appendChild(option);
    });

    // Load saved model for this provider
    const savedModel = localStorage.getItem(`${provider}_model`);
    if (savedModel && config.models.some(m => m.value === savedModel)) {
        aiModelSelect.value = savedModel;
    }

    // Load API key for this provider
    if (!config.noApiKey) {
        loadApiKey();
    }
}

function saveApiKey() {
    const provider = aiProviderSelect.value;
    const apiKey = apiKeyInput.value.trim();

    if (provider === 'openai') {
        localStorage.setItem(STORAGE_KEYS.OPENAI_API_KEY, apiKey);
    } else if (provider === 'gemini') {
        localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, apiKey);
    } else if (provider === 'claude') {
        localStorage.setItem(STORAGE_KEYS.CLAUDE_API_KEY, apiKey);
    }
}

function loadApiKey() {
    const provider = aiProviderSelect.value;
    let savedApiKey = '';

    if (provider === 'openai') {
        savedApiKey = localStorage.getItem(STORAGE_KEYS.OPENAI_API_KEY) || '';
    } else if (provider === 'gemini') {
        savedApiKey = localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY) || '';
    } else if (provider === 'claude') {
        savedApiKey = localStorage.getItem(STORAGE_KEYS.CLAUDE_API_KEY) || '';
    }

    apiKeyInput.value = savedApiKey;
}

// ===== Keyword Extraction Functions =====

function extractKeywords() {
    const text = resultText.value;

    if (!text.trim()) {
        alert('키워드를 추출할 콘텐츠가 없습니다. 먼저 블로그를 생성해주세요.');
        return;
    }

    // Remove markdown syntax and clean text
    const cleanText = text
        .replace(/#{1,6}\s/g, '') // Remove heading markers
        .replace(/[*_~`]/g, '') // Remove markdown formatting
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
        .toLowerCase();

    // Korean stopwords (commonly used words to ignore)
    const stopwords = new Set([
        '이', '그', '저', '것', '수', '등', '및', '를', '을', '가', '이', '의', '에',
        '도', '는', '은', '과', '와', '한', '하는', '있는', '있다', '된다', '한다',
        '대한', '위한', '통해', '대해', '통한', '위해', '매우', '가장', '더', '덜',
        '같은', '다른', '많은', '적은', '좋은', '나쁜', '크다', '작다', '높다', '낮다'
    ]);

    // Extract words (Korean and English)
    const koreanWords = cleanText.match(/[가-힣]{2,}/g) || [];
    const englishWords = cleanText.match(/[a-z]{3,}/g) || [];

    const allWords = [...koreanWords, ...englishWords];

    // Count word frequencies
    const wordCount = {};
    allWords.forEach(word => {
        if (!stopwords.has(word) && word.length >= 2) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    });

    // Sort by frequency and get top keywords
    const sortedKeywords = Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15); // Top 15 keywords

    if (sortedKeywords.length === 0) {
        alert('추출할 키워드를 찾을 수 없습니다.');
        return;
    }

    // Display suggested keywords
    displaySuggestedKeywords(sortedKeywords);
}

function displaySuggestedKeywords(keywords) {
    suggestedKeywords.classList.remove('hidden');

    const keywordChipsHtml = keywords.map(([word, count]) => {
        return `<div class="keyword-chip" data-keyword="${word}">
            ${word} <span class="keyword-count">(${count})</span>
        </div>`;
    }).join('');

    suggestedKeywords.innerHTML = `
        <div class="suggested-keywords-title">💡 추출된 키워드 (클릭하여 추가)</div>
        <div class="keyword-chips">
            ${keywordChipsHtml}
        </div>
    `;

    // Add click handlers to keyword chips
    suggestedKeywords.querySelectorAll('.keyword-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const keyword = chip.dataset.keyword;
            addKeywordToInput(keyword);
            chip.classList.add('selected');
        });
    });
}

function addKeywordToInput(keyword) {
    const currentKeywords = keywordsInput.value.trim();

    // Check if keyword already exists
    const keywordList = currentKeywords.split(',').map(k => k.trim());
    if (keywordList.includes(keyword)) {
        return; // Already added
    }

    // Add keyword
    if (currentKeywords) {
        keywordsInput.value = currentKeywords + ', ' + keyword;
    } else {
        keywordsInput.value = keyword;
    }

    // Visual feedback
    const originalText = extractKeywordsBtn.textContent;
    extractKeywordsBtn.textContent = '✅';
    extractKeywordsBtn.style.background = 'var(--color-success)';

    setTimeout(() => {
        extractKeywordsBtn.textContent = originalText;
        extractKeywordsBtn.style.background = '';
    }, 1000);
}

// ===== Custom Class Management =====

const STORAGE_KEY_CUSTOM_CLASSES = 'custom_classes';

// DOM Elements for Class Management
const formattingToolbar = document.getElementById('formattingToolbar');
const classSelector = document.getElementById('classSelector');
const customClassGroup = document.getElementById('customClassGroup');
const applyBlockClassBtn = document.getElementById('applyBlockClass');
const applyInlineClassBtn = document.getElementById('applyInlineClass');
const removeFormatBtn = document.getElementById('removeFormat');
const addNewClassBtn = document.getElementById('addNewClassBtn');
const newClassForm = document.getElementById('newClassForm');
const newClassName = document.getElementById('newClassName');
const newClassLabel = document.getElementById('newClassLabel');
const newClassCss = document.getElementById('newClassCss');
const saveNewClassBtn = document.getElementById('saveNewClassBtn');
const cancelNewClassBtn = document.getElementById('cancelNewClassBtn');
const customClassList = document.getElementById('customClassList');

// Initialize class management
function initClassManagement() {
    if (!formattingToolbar) return;

    // Load custom classes
    renderCustomClasses();
    updateClassSelectorOptions();

    // Toolbar button events
    document.querySelectorAll('.toolbar-btn[data-format]').forEach(btn => {
        btn.addEventListener('click', () => applyFormat(btn.dataset.format));
    });

    // Apply class buttons
    if (applyBlockClassBtn) {
        applyBlockClassBtn.addEventListener('click', () => applyClassToSelection('block'));
    }

    if (applyInlineClassBtn) {
        applyInlineClassBtn.addEventListener('click', () => applyClassToSelection('inline'));
    }

    if (removeFormatBtn) {
        removeFormatBtn.addEventListener('click', removeFormatFromSelection);
    }

    // Class management buttons
    if (addNewClassBtn) {
        addNewClassBtn.addEventListener('click', showNewClassForm);
    }

    if (saveNewClassBtn) {
        saveNewClassBtn.addEventListener('click', saveNewClass);
    }

    if (cancelNewClassBtn) {
        cancelNewClassBtn.addEventListener('click', hideNewClassForm);
    }

    // Keyboard shortcuts for formatting
    if (resultText) {
        resultText.addEventListener('keydown', handleFormattingShortcuts);
    }
}

// Apply basic formatting (bold, italic, code)
function applyFormat(format) {
    const textarea = resultText;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (!selectedText) {
        alert('텍스트를 먼저 선택해주세요.');
        return;
    }

    let wrappedText = '';
    switch (format) {
        case 'bold':
            wrappedText = `**${selectedText}**`;
            break;
        case 'italic':
            wrappedText = `*${selectedText}*`;
            break;
        case 'code':
            wrappedText = `\`${selectedText}\``;
            break;
        default:
            return;
    }

    replaceSelection(textarea, wrappedText, start, end);
}

// Apply class to selection
function applyClassToSelection(type) {
    const textarea = resultText;
    if (!textarea) return;

    const selectedClass = classSelector.value;
    if (!selectedClass) {
        alert('적용할 클래스를 선택해주세요.');
        return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    if (!selectedText) {
        alert('텍스트를 먼저 선택해주세요.');
        return;
    }

    let wrappedText = '';
    if (type === 'block') {
        // Block class: :::classname\ncontent\n:::
        wrappedText = `:::${selectedClass}\n${selectedText}\n:::`;
    } else {
        // Inline class: {.classname}content{/}
        wrappedText = `{.${selectedClass}}${selectedText}{/}`;
    }

    replaceSelection(textarea, wrappedText, start, end);

    // Reset selector
    classSelector.value = '';
}

// Remove format from selection
function removeFormatFromSelection() {
    const textarea = resultText;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    let selectedText = textarea.value.substring(start, end);

    if (!selectedText) {
        alert('텍스트를 먼저 선택해주세요.');
        return;
    }

    // Remove block class syntax
    selectedText = selectedText.replace(/^:::\w+\n?/gm, '');
    selectedText = selectedText.replace(/\n?:::$/gm, '');

    // Remove inline class syntax
    selectedText = selectedText.replace(/\{\.[\w-]+\}/g, '');
    selectedText = selectedText.replace(/\{\/\}/g, '');

    // Remove markdown formatting
    selectedText = selectedText.replace(/\*\*(.+?)\*\*/g, '$1');
    selectedText = selectedText.replace(/\*(.+?)\*/g, '$1');
    selectedText = selectedText.replace(/`(.+?)`/g, '$1');

    replaceSelection(textarea, selectedText, start, end);
}

// Helper function to replace selection in textarea
function replaceSelection(textarea, newText, start, end) {
    const before = textarea.value.substring(0, start);
    const after = textarea.value.substring(end);

    textarea.value = before + newText + after;
    textarea.focus();

    // Set cursor position after the inserted text
    const newCursorPos = start + newText.length;
    textarea.setSelectionRange(newCursorPos, newCursorPos);

    // Trigger input event for stats update
    textarea.dispatchEvent(new Event('input'));
}

// Keyboard shortcuts
function handleFormattingShortcuts(e) {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
            case 'b':
                e.preventDefault();
                applyFormat('bold');
                break;
            case 'i':
                e.preventDefault();
                applyFormat('italic');
                break;
        }
    }
}

// Show new class form
function showNewClassForm() {
    if (newClassForm) {
        newClassForm.classList.remove('hidden');
        newClassName.value = '';
        newClassLabel.value = '';
        newClassCss.value = '';
        newClassName.focus();
    }
}

// Hide new class form
function hideNewClassForm() {
    if (newClassForm) {
        newClassForm.classList.add('hidden');
    }
}

// Save new custom class
function saveNewClass() {
    const name = newClassName.value.trim();
    const label = newClassLabel.value.trim();
    const css = newClassCss.value.trim();

    if (!name) {
        alert('클래스 이름을 입력해주세요.');
        newClassName.focus();
        return;
    }

    if (!css) {
        alert('CSS 스타일을 입력해주세요.');
        newClassCss.focus();
        return;
    }

    // Validate class name (only alphanumeric and hyphens)
    if (!/^[a-zA-Z][a-zA-Z0-9-]*$/.test(name)) {
        alert('클래스 이름은 영문자로 시작하고 영문, 숫자, 하이픈만 사용할 수 있습니다.');
        newClassName.focus();
        return;
    }

    // Get existing classes
    const customClasses = getCustomClasses();

    // Check for duplicate
    if (customClasses.some(c => c.name === name)) {
        alert('이미 존재하는 클래스 이름입니다.');
        newClassName.focus();
        return;
    }

    // Add new class
    customClasses.push({
        id: Date.now(),
        name: name,
        label: label || name,
        css: css
    });

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY_CUSTOM_CLASSES, JSON.stringify(customClasses));

    // Update UI
    renderCustomClasses();
    updateClassSelectorOptions();
    updateCustomCssWithClasses();
    hideNewClassForm();

    // Feedback
    alert(`"${label || name}" 클래스가 추가되었습니다.`);
}

// Get custom classes from localStorage
function getCustomClasses() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY_CUSTOM_CLASSES)) || [];
    } catch {
        return [];
    }
}

// Render custom classes in the class manager
function renderCustomClasses() {
    if (!customClassList) return;

    const customClasses = getCustomClasses();

    if (customClasses.length === 0) {
        customClassList.innerHTML = `
            <div class="custom-class-empty">
                아직 커스텀 클래스가 없습니다.<br>
                "새 클래스" 버튼을 클릭하여 추가하세요.
            </div>
        `;
        return;
    }

    customClassList.innerHTML = customClasses.map(cls => `
        <div class="custom-class-item" data-id="${cls.id}">
            <div class="class-item-preview" style="${cls.css}">Aa</div>
            <div class="class-item-info">
                <div class="class-item-name">.block-${cls.name}</div>
                <div class="class-item-label">${cls.label}</div>
            </div>
            <div class="class-item-actions">
                <button type="button" class="class-item-btn edit" title="편집" onclick="editCustomClass(${cls.id})">✏️</button>
                <button type="button" class="class-item-btn delete" title="삭제" onclick="deleteCustomClass(${cls.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

// Update class selector options
function updateClassSelectorOptions() {
    if (!customClassGroup) return;

    const customClasses = getCustomClasses();

    customClassGroup.innerHTML = customClasses.map(cls =>
        `<option value="${cls.name}">🎨 ${cls.label} (${cls.name})</option>`
    ).join('');
}

// Delete custom class
function deleteCustomClass(id) {
    if (!confirm('이 클래스를 삭제하시겠습니까?')) return;

    let customClasses = getCustomClasses();
    customClasses = customClasses.filter(c => c.id !== id);
    localStorage.setItem(STORAGE_KEY_CUSTOM_CLASSES, JSON.stringify(customClasses));

    renderCustomClasses();
    updateClassSelectorOptions();
    updateCustomCssWithClasses();
}

// Edit custom class
function editCustomClass(id) {
    const customClasses = getCustomClasses();
    const cls = customClasses.find(c => c.id === id);

    if (!cls) return;

    // Show form with existing values
    if (newClassForm) {
        newClassForm.classList.remove('hidden');
        newClassName.value = cls.name;
        newClassLabel.value = cls.label;
        newClassCss.value = cls.css;

        // Change save button to update
        saveNewClassBtn.textContent = '💾 업데이트';
        saveNewClassBtn.onclick = function () {
            updateCustomClass(id);
        };
    }
}

// Update custom class
function updateCustomClass(id) {
    const name = newClassName.value.trim();
    const label = newClassLabel.value.trim();
    const css = newClassCss.value.trim();

    if (!name || !css) {
        alert('클래스 이름과 CSS를 입력해주세요.');
        return;
    }

    let customClasses = getCustomClasses();
    const index = customClasses.findIndex(c => c.id === id);

    if (index !== -1) {
        customClasses[index] = {
            ...customClasses[index],
            name: name,
            label: label || name,
            css: css
        };

        localStorage.setItem(STORAGE_KEY_CUSTOM_CLASSES, JSON.stringify(customClasses));

        renderCustomClasses();
        updateClassSelectorOptions();
        updateCustomCssWithClasses();
        hideNewClassForm();

        // Reset save button
        saveNewClassBtn.textContent = '💾 저장';
        saveNewClassBtn.onclick = saveNewClass;

        alert('클래스가 업데이트되었습니다.');
    }
}

// Update custom CSS textarea with custom classes
function updateCustomCssWithClasses() {
    const customClasses = getCustomClasses();

    if (customClasses.length === 0) return;

    // Generate CSS for custom classes
    let customClassesCss = '\n\n/* ===== 커스텀 클래스 (자동 생성) ===== */\n';

    customClasses.forEach(cls => {
        customClassesCss += `\n/* ${cls.label} */\n`;
        customClassesCss += `.block-${cls.name} {\n`;
        customClassesCss += `    ${cls.css.split('\n').join('\n    ')}\n`;
        customClassesCss += `}\n`;
        customClassesCss += `.inline-${cls.name} {\n`;
        customClassesCss += `    ${cls.css.split('\n').join('\n    ')}\n`;
        customClassesCss += `    display: inline;\n`;
        customClassesCss += `}\n`;
    });

    // Check if custom CSS already has custom classes section
    let currentCss = customCssTextarea.value;
    const marker = '/* ===== 커스텀 클래스 (자동 생성) ===== */';

    if (currentCss.includes(marker)) {
        // Replace existing custom classes section
        const markerIndex = currentCss.indexOf(marker);
        currentCss = currentCss.substring(0, markerIndex).trimEnd();
    }

    customCssTextarea.value = currentCss + customClassesCss;
    localStorage.setItem(STORAGE_KEYS.CUSTOM_CSS, customCssTextarea.value);
    applyCustomCss();
}

// Exposure for onclick handlers
window.deleteCustomClass = deleteCustomClass;
window.editCustomClass = editCustomClass;

// Process inline class syntax in updatePreview
const originalProcessCustomBlocks = processCustomBlocks;
function processCustomBlocksWithInline(markdown) {
    let processed = originalProcessCustomBlocks(markdown);
    // Process inline classes: {.classname}content{/}
    processed = processed.replace(/\{\.([^}]+)\}([\s\S]*?)\{\/\}/g, (_match, className, content) => {
        return `<span class="inline-${className}">${content}</span>`;
    });
    return processed;
}

// Override the original function
window.processCustomBlocks = processCustomBlocksWithInline;

// Initialize class management on DOM loaded
document.addEventListener('DOMContentLoaded', initClassManagement);

// ===========================
// 메인 네비게이션 탭 전환
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const mainNavTabs = document.querySelectorAll('.main-nav-tab');
    const mainSections = document.querySelectorAll('.main-section');

    mainNavTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSection = tab.dataset.section;

            // 탭 활성화 상태 변경
            mainNavTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 섹션 표시/숨김
            mainSections.forEach(section => {
                if (section.id === `${targetSection}Section`) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

            // 유사도 검사 탭으로 이동 시 저장된 API 키 미리 로드
            if (targetSection === 'similarity') {
                if (typeof loadSavedSimilarityApiKey === 'function') {
                    loadSavedSimilarityApiKey();
                }
            }

            // 선택된 탭 저장
            localStorage.setItem('activeMainTab', targetSection);
        });
    });

    // 저장된 탭 복원
    const savedTab = localStorage.getItem('activeMainTab');
    if (savedTab) {
        const tabToActivate = document.querySelector(`.main-nav-tab[data-section="${savedTab}"]`);
        if (tabToActivate) {
            tabToActivate.click();
        }
    }
});

// ===========================
// 독립형 유사도 검사 기능
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const similarityTextInput = document.getElementById('similarityText');
    const similarityKeywordsInput = document.getElementById('similarityKeywords');
    const runSimilarityBtn = document.getElementById('runSimilarityBtn');
    const similarityResultCard = document.getElementById('similarityResultCard');
    const similarityCharCount = document.getElementById('similarityCharCount');
    const similarityWordCount = document.getElementById('similarityWordCount');

    if (!similarityTextInput || !runSimilarityBtn) return;

    // 텍스트 통계 업데이트
    similarityTextInput.addEventListener('input', () => {
        const text = similarityTextInput.value;
        const chars = text.length;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;

        if (similarityCharCount) similarityCharCount.textContent = `${chars}자`;
        if (similarityWordCount) similarityWordCount.textContent = `${words}단어`;
    });

    // 분석 실행
    runSimilarityBtn.addEventListener('click', () => {
        const text = similarityTextInput.value.trim();
        if (!text) {
            alert('분석할 텍스트를 입력해주세요.');
            return;
        }

        if (text.length < 50) {
            alert('최소 50자 이상의 텍스트를 입력해주세요.');
            return;
        }

        const keywords = similarityKeywordsInput.value
            .split(',')
            .map(k => k.trim())
            .filter(k => k.length > 0);

        // 분석 실행
        const result = analyzeTextSimilarity(text, keywords);

        // 결과 표시
        displaySimilarityResult(result);
        similarityResultCard.classList.remove('hidden');

        // 결과 카드로 스크롤
        similarityResultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// 텍스트 유사도 분석 함수
function analyzeTextSimilarity(text, keywords = []) {
    // 일반적인 AI 생성 표현 패턴
    const commonPatterns = [
        '이러한', '따라서', '그러므로', '결론적으로', '종합해보면',
        '살펴보면', '알아보겠습니다', '다루어 보겠습니다',
        '중요한 역할을', '점점 더', '다양한 방면에서',
        '핵심적인', '필수적인', '효과적인', '효율적인',
        '긍정적인 영향', '부정적인 영향', '중요성이 대두되고',
        '주목받고 있', '각광받고 있', '관심이 높아지고',
        '변화하고 있', '발전하고 있', '성장하고 있',
        '이를 통해', '이에 따라', '그 결과',
        '마지막으로', '첫째', '둘째', '셋째',
        '무엇보다', '특히', '또한', '게다가',
        '한편', '반면', '그러나', '하지만',
        '앞으로', '향후', '미래에는'
    ];

    // 감지된 일반적 표현 찾기
    const detectedPhrases = [];
    commonPatterns.forEach(pattern => {
        const regex = new RegExp(pattern, 'gi');
        const matches = text.match(regex);
        if (matches) {
            detectedPhrases.push({
                phrase: pattern,
                count: matches.length
            });
        }
    });

    // 문장 분석
    const sentences = text.split(/[.!?。]+/).filter(s => s.trim().length > 0);
    const totalSentences = sentences.length;

    // 평균 문장 길이
    const avgSentenceLength = text.length / Math.max(totalSentences, 1);

    // 고유 단어 비율 계산
    const words = text.toLowerCase().replace(/[^\w\s가-힣]/g, '').split(/\s+/);
    const uniqueWords = new Set(words);
    const uniqueWordRatio = uniqueWords.size / Math.max(words.length, 1);

    // 키워드 밀도 계산
    let keywordDensity = 0;
    if (keywords.length > 0) {
        let keywordCount = 0;
        keywords.forEach(keyword => {
            const regex = new RegExp(keyword, 'gi');
            const matches = text.match(regex);
            if (matches) keywordCount += matches.length;
        });
        keywordDensity = (keywordCount / words.length) * 100;
    }

    // 점수 계산
    const commonPhraseRatio = detectedPhrases.reduce((sum, p) => sum + p.count, 0) / Math.max(sentences.length, 1);

    // 독창성 점수 (0-100)
    let originalityScore = 100;
    originalityScore -= Math.min(commonPhraseRatio * 15, 40); // 일반적 표현 패널티
    originalityScore -= avgSentenceLength > 80 ? 10 : 0; // 너무 긴 문장 패널티
    originalityScore += uniqueWordRatio > 0.5 ? 10 : 0; // 다양한 어휘 보너스
    originalityScore = Math.max(0, Math.min(100, Math.round(originalityScore)));

    // AI 생성 확률 (낮을수록 좋음)
    let aiProbability = 20; // 기본값
    aiProbability += Math.min(commonPhraseRatio * 20, 50);
    aiProbability += avgSentenceLength > 60 ? 15 : 0;
    aiProbability -= uniqueWordRatio > 0.6 ? 10 : 0;
    aiProbability = Math.max(0, Math.min(100, Math.round(aiProbability)));

    // 개선 제안 생성
    const suggestions = [];
    if (commonPhraseRatio > 0.5) {
        suggestions.push('일반적인 표현이 많습니다. 더 구체적이고 독창적인 표현으로 바꿔보세요.');
    }
    if (avgSentenceLength > 60) {
        suggestions.push('문장이 다소 깁니다. 짧고 간결한 문장으로 나눠보세요.');
    }
    if (uniqueWordRatio < 0.4) {
        suggestions.push('어휘 다양성이 낮습니다. 동의어나 다른 표현을 사용해보세요.');
    }
    if (keywords.length > 0 && keywordDensity < 1) {
        suggestions.push('키워드 밀도가 낮습니다. 핵심 키워드를 자연스럽게 더 포함해보세요.');
    }
    if (keywords.length > 0 && keywordDensity > 5) {
        suggestions.push('키워드가 과도하게 사용되었습니다. 자연스럽게 줄여보세요.');
    }
    if (detectedPhrases.length === 0 && suggestions.length === 0) {
        suggestions.push('좋습니다! 독창적인 표현으로 잘 작성되었습니다.');
    }

    return {
        originalityScore,
        aiProbability,
        uniqueWordRatio: Math.round(uniqueWordRatio * 100),
        commonPhraseCount: detectedPhrases.reduce((sum, p) => sum + p.count, 0),
        detectedPhrases,
        keywordDensity: keywordDensity.toFixed(1),
        suggestions
    };
}

// 유사도 분석 결과 표시
function displaySimilarityResult(result) {
    // 분석 유형 배지 업데이트
    const analysisTypeBadge = document.getElementById('analysisTypeBadge');
    if (analysisTypeBadge) {
        if (result.isAiAnalysis) {
            analysisTypeBadge.textContent = '🤖 AI 분석';
            analysisTypeBadge.classList.add('ai-analysis');
        } else {
            analysisTypeBadge.textContent = '💻 로컬 분석';
            analysisTypeBadge.classList.remove('ai-analysis');
        }
    }

    // 점수 원형 그래프 업데이트
    const scoreCircle = document.getElementById('similarityScoreCircle');
    const scoreNumber = document.getElementById('similarityScoreNumber');

    if (scoreCircle && scoreNumber) {
        const circumference = 2 * Math.PI * 45; // r=45
        const offset = circumference - (result.originalityScore / 100) * circumference;
        scoreCircle.style.strokeDashoffset = offset;

        // 점수에 따른 색상
        if (result.originalityScore >= 70) {
            scoreCircle.style.stroke = '#10b981'; // green
        } else if (result.originalityScore >= 40) {
            scoreCircle.style.stroke = '#f59e0b'; // yellow
        } else {
            scoreCircle.style.stroke = '#ef4444'; // red
        }

        scoreNumber.textContent = result.originalityScore;
    }

    // 세부 점수 업데이트
    const uniqueExpValue = document.getElementById('uniqueExpValue');
    const commonExpValue = document.getElementById('commonExpValue');
    const aiProbValue = document.getElementById('aiProbValue');
    const keywordDensityValue = document.getElementById('keywordDensityValue');

    if (uniqueExpValue) uniqueExpValue.textContent = `${result.uniqueWordRatio}%`;
    if (commonExpValue) commonExpValue.textContent = `${result.commonPhraseCount}개`;
    if (aiProbValue) aiProbValue.textContent = `${result.aiProbability}%`;
    if (keywordDensityValue) keywordDensityValue.textContent = `${result.keywordDensity}%`;

    // 감지된 표현 목록
    const detectedPhrasesList = document.getElementById('detectedPhrasesList');
    if (detectedPhrasesList) {
        if (result.detectedPhrases.length > 0) {
            detectedPhrasesList.innerHTML = result.detectedPhrases
                .map(p => `<span class="detected-phrase">${p.phrase} (${p.count})</span>`)
                .join('');
        } else {
            detectedPhrasesList.innerHTML = '<p class="empty-message">일반적인 표현이 감지되지 않았습니다. 좋습니다!</p>';
        }
    }

    // 개선 제안 목록
    const suggestionsList = document.getElementById('similaritySuggestions');
    if (suggestionsList) {
        suggestionsList.innerHTML = result.suggestions
            .map(s => `<li>${s}</li>`)
            .join('');
    }
}

// ===========================
// AI 기반 유사도 분석 기능
// ===========================

// AI 유사도 분석용 모델 목록
const SIMILARITY_AI_MODELS = {
    openai: [
        { value: 'gpt-4o-mini', label: 'GPT-4o Mini (경제적)' },
        { value: 'gpt-4o', label: 'GPT-4o (최고 품질)' },
        { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo (빠름)' }
    ],
    gemini: [
        { value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash (빠름)' },
        { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash (최신)' },
        { value: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro (고성능)' }
    ],
    claude: [
        { value: 'claude-3-5-haiku-20241022', label: 'Claude 3.5 Haiku (경제적)' },
        { value: 'claude-3-5-sonnet-20241022', label: 'Claude 3.5 Sonnet (균형)' }
    ]
};

// 유사도 분석 섹션 초기화
document.addEventListener('DOMContentLoaded', () => {
    initSimilarityAiSettings();
});

function initSimilarityAiSettings() {
    const analysisModeRadios = document.getElementsByName('analysisMode');
    const aiSettingsSection = document.getElementById('similarityAiSettings');
    const aiProviderSelect = document.getElementById('similarityAiProvider');
    const aiModelSelect = document.getElementById('similarityAiModel');
    const apiKeyInput = document.getElementById('similarityApiKey');
    const toggleApiKeyBtn = document.getElementById('toggleSimilarityApiKey');
    const useSameKeyBtn = document.getElementById('useSameApiKey');
    const runSimilarityBtn = document.getElementById('runSimilarityBtn');

    if (!analysisModeRadios.length || !aiSettingsSection) return;

    // 분석 모드 변경 이벤트
    analysisModeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'ai') {
                aiSettingsSection.classList.remove('hidden');
                // AI 모드 선택 시 저장된 API 키 자동 불러오기
                loadSavedSimilarityApiKey();
            } else {
                aiSettingsSection.classList.add('hidden');
            }
        });
    });

    // AI 제공자 변경 시 모델 목록 업데이트
    if (aiProviderSelect && aiModelSelect) {
        aiProviderSelect.addEventListener('change', () => {
            updateSimilarityAiModels();
            loadSavedSimilarityApiKey();
        });
        // 초기 모델 목록 설정
        updateSimilarityAiModels();
    }

    // API 키 토글
    if (toggleApiKeyBtn && apiKeyInput) {
        toggleApiKeyBtn.addEventListener('click', () => {
            const type = apiKeyInput.type === 'password' ? 'text' : 'password';
            apiKeyInput.type = type;
            toggleApiKeyBtn.textContent = type === 'password' ? '👁️' : '🙈';
        });
    }

    // 블로그 생성기 API 키 복사
    if (useSameKeyBtn && apiKeyInput) {
        useSameKeyBtn.addEventListener('click', () => {
            const generatorProvider = document.getElementById('aiProvider')?.value;
            const similarityProvider = aiProviderSelect?.value;

            if (generatorProvider === similarityProvider) {
                const generatorApiKey = document.getElementById('apiKey')?.value;
                if (generatorApiKey) {
                    apiKeyInput.value = generatorApiKey;
                    alert('블로그 생성기의 API 키를 복사했습니다.');
                } else {
                    alert('블로그 생성기에 저장된 API 키가 없습니다.');
                }
            } else {
                // 다른 제공자면 해당 제공자의 저장된 키 불러오기
                const storageKey = `${similarityProvider}_api_key`;
                const savedKey = localStorage.getItem(storageKey);
                if (savedKey) {
                    apiKeyInput.value = savedKey;
                    alert(`저장된 ${similarityProvider.toUpperCase()} API 키를 불러왔습니다.`);
                } else {
                    alert(`저장된 ${similarityProvider.toUpperCase()} API 키가 없습니다.`);
                }
            }
        });
    }

    // API 키 변경 시 저장
    if (apiKeyInput) {
        apiKeyInput.addEventListener('change', () => {
            const provider = aiProviderSelect?.value || 'openai';
            const storageKey = `similarity_${provider}_api_key`;
            localStorage.setItem(storageKey, apiKeyInput.value);
        });
        // 저장된 API 키 불러오기
        loadSavedSimilarityApiKey();
    }

    // 분석 버튼 이벤트 재정의
    if (runSimilarityBtn) {
        // 기존 이벤트 제거 후 새로 추가
        const newBtn = runSimilarityBtn.cloneNode(true);
        runSimilarityBtn.parentNode.replaceChild(newBtn, runSimilarityBtn);

        newBtn.addEventListener('click', handleSimilarityAnalysis);
    }
}

function updateSimilarityAiModels() {
    const providerSelect = document.getElementById('similarityAiProvider');
    const modelSelect = document.getElementById('similarityAiModel');

    if (!providerSelect || !modelSelect) return;

    const provider = providerSelect.value;
    const models = SIMILARITY_AI_MODELS[provider] || [];

    modelSelect.innerHTML = models
        .map(m => `<option value="${m.value}">${m.label}</option>`)
        .join('');
}

function loadSavedSimilarityApiKey() {
    const providerSelect = document.getElementById('similarityAiProvider');
    const apiKeyInput = document.getElementById('similarityApiKey');

    if (!providerSelect || !apiKeyInput) return;

    const provider = providerSelect.value;

    // 1. 먼저 유사도 검사 전용 키 확인
    const similarityStorageKey = `similarity_${provider}_api_key`;
    let savedKey = localStorage.getItem(similarityStorageKey);

    // 2. 없으면 블로그 생성기에서 저장한 키 확인
    if (!savedKey) {
        const generatorStorageKey = `${provider}_api_key`;
        savedKey = localStorage.getItem(generatorStorageKey);
    }

    if (savedKey) {
        apiKeyInput.value = savedKey;
    } else {
        apiKeyInput.value = '';
    }
}

// 유사도 분석 핸들러
async function handleSimilarityAnalysis() {
    const textInput = document.getElementById('similarityText');
    const keywordsInput = document.getElementById('similarityKeywords');
    const resultCard = document.getElementById('similarityResultCard');
    const runBtn = document.getElementById('runSimilarityBtn') || document.querySelector('#similaritySection .btn-primary');

    const text = textInput?.value.trim();
    if (!text) {
        alert('분석할 텍스트를 입력해주세요.');
        return;
    }

    if (text.length < 50) {
        alert('최소 50자 이상의 텍스트를 입력해주세요.');
        return;
    }

    const keywords = keywordsInput?.value
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0) || [];

    // 분석 모드 확인
    const analysisMode = document.querySelector('input[name="analysisMode"]:checked')?.value || 'local';

    if (analysisMode === 'ai') {
        // AI 분석
        const apiKeyInput = document.getElementById('similarityApiKey');
        const providerSelect = document.getElementById('similarityAiProvider');
        const modelSelect = document.getElementById('similarityAiModel');

        // 저장된 API 키 자동 불러오기 (입력 필드가 비어있을 경우)
        if (!apiKeyInput?.value.trim()) {
            loadSavedSimilarityApiKey();
        }

        const apiKey = apiKeyInput?.value.trim();
        if (!apiKey) {
            alert('AI 분석을 위해 API 키를 입력해주세요.');
            apiKeyInput?.focus();
            return;
        }

        const provider = providerSelect?.value || 'openai';
        const model = modelSelect?.value || 'gpt-4o-mini';

        // 버튼 비활성화 및 로딩 표시
        if (runBtn) {
            runBtn.disabled = true;
            runBtn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">AI 분석 중...</span>';
        }

        try {
            const result = await analyzeSimilarityWithAI(text, keywords, provider, model, apiKey);
            displaySimilarityResult(result);
            resultCard?.classList.remove('hidden');
            resultCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (error) {
            console.error('AI similarity analysis error:', error);
            alert(`AI 분석 중 오류가 발생했습니다: ${error.message}`);
        } finally {
            if (runBtn) {
                runBtn.disabled = false;
                runBtn.innerHTML = '<span class="btn-text">유사도 분석 시작</span><span class="btn-icon">🔍</span>';
            }
        }
    } else {
        // 로컬 분석
        const result = analyzeTextSimilarity(text, keywords);
        displaySimilarityResult(result);
        resultCard?.classList.remove('hidden');
        resultCard?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// AI 기반 유사도 분석
async function analyzeSimilarityWithAI(text, keywords, provider, model, apiKey) {
    const prompt = buildSimilarityPrompt(text, keywords);

    let response;
    if (provider === 'openai') {
        response = await analyzeSimilarityOpenAI(prompt, model, apiKey);
    } else if (provider === 'gemini') {
        response = await analyzeSimilarityGemini(prompt, model, apiKey);
    } else if (provider === 'claude') {
        response = await analyzeSimilarityClaude(prompt, model, apiKey);
    } else {
        throw new Error('지원하지 않는 AI 제공자입니다.');
    }

    return parseAIAnalysisResult(response, text, keywords);
}

function buildSimilarityPrompt(text, keywords) {
    return `다음 텍스트의 독창성과 품질을 분석해주세요.

【분석 대상 텍스트】
${text}

【분석 요청 항목】
1. 독창성 점수 (0-100): 표현의 독창성, 창의성 평가
2. AI 생성 확률 (0-100): AI가 생성한 것으로 보이는 확률
3. 감지된 일반적/상투적 표현 목록 (쉼표로 구분)
4. 독특하고 창의적인 표현 비율 (0-100%)
5. 개선 제안 (3가지 이내)
${keywords.length > 0 ? `6. 키워드 밀도 분석 (키워드: ${keywords.join(', ')})` : ''}

【응답 형식 - 반드시 아래 JSON 형식으로만 응답】
{
  "originalityScore": 숫자,
  "aiProbability": 숫자,
  "detectedPhrases": ["표현1", "표현2"],
  "uniqueWordRatio": 숫자,
  "keywordDensity": "숫자%",
  "suggestions": ["제안1", "제안2", "제안3"]
}`;
}

async function analyzeSimilarityOpenAI(prompt, model, apiKey) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: '당신은 텍스트 품질과 독창성을 분석하는 전문가입니다. 반드시 요청된 JSON 형식으로만 응답하세요.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.3,
            max_tokens: 1000
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `OpenAI API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function analyzeSimilarityGemini(prompt, model, apiKey) {
    const systemPrompt = '당신은 텍스트 품질과 독창성을 분석하는 전문가입니다. 반드시 요청된 JSON 형식으로만 응답하세요.';
    const fullPrompt = `${systemPrompt}\n\n${prompt}`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: fullPrompt }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 1000
                }
            })
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Gemini API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

async function analyzeSimilarityClaude(prompt, model, apiKey) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
            model: model,
            max_tokens: 1000,
            messages: [{
                role: 'user',
                content: prompt
            }],
            system: '당신은 텍스트 품질과 독창성을 분석하는 전문가입니다. 반드시 요청된 JSON 형식으로만 응답하세요.',
            temperature: 0.3
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Claude API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text.trim();
}

function parseAIAnalysisResult(response, text, keywords) {
    try {
        // JSON 추출 (마크다운 코드블록 처리)
        let jsonStr = response;
        const jsonMatch = response.match(/```(?:json)?\s*([\s\S]*?)```/);
        if (jsonMatch) {
            jsonStr = jsonMatch[1].trim();
        }

        // JSON 파싱 시도
        const parsed = JSON.parse(jsonStr);

        // 감지된 표현을 객체 배열로 변환
        const detectedPhrases = (parsed.detectedPhrases || []).map(phrase => ({
            phrase: phrase,
            count: 1
        }));

        return {
            originalityScore: Math.min(100, Math.max(0, parsed.originalityScore || 50)),
            aiProbability: Math.min(100, Math.max(0, parsed.aiProbability || 50)),
            uniqueWordRatio: Math.min(100, Math.max(0, parsed.uniqueWordRatio || 50)),
            commonPhraseCount: detectedPhrases.length,
            detectedPhrases: detectedPhrases,
            keywordDensity: parsed.keywordDensity || '0',
            suggestions: parsed.suggestions || ['분석 결과를 확인하세요.'],
            isAiAnalysis: true
        };
    } catch (error) {
        console.error('AI response parsing error:', error);
        console.log('Raw response:', response);

        // 파싱 실패 시 로컬 분석으로 폴백
        const localResult = analyzeTextSimilarity(text, keywords);
        localResult.suggestions.unshift('AI 응답 파싱에 실패하여 로컬 분석 결과를 표시합니다.');
        return localResult;
    }
}

// ===========================
// SEO 추천 제목 생성 기능
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    initSeoTitleGenerator();
});

function initSeoTitleGenerator() {
    const generateTitlesBtn = document.getElementById('generateTitlesBtn');
    const closeTitlesBtn = document.getElementById('closeTitlesBtn');
    const suggestedTitles = document.getElementById('suggestedTitles');
    const titlesList = document.getElementById('titlesList');
    const topicInput = document.getElementById('topic');

    if (!generateTitlesBtn || !suggestedTitles) return;

    // 제목 생성 버튼 클릭
    generateTitlesBtn.addEventListener('click', async () => {
        const topic = topicInput?.value.trim();
        if (!topic) {
            alert('먼저 블로그 주제를 입력해주세요.');
            topicInput?.focus();
            return;
        }

        const provider = aiProviderSelect?.value;
        if (provider === 'template') {
            // 템플릿 모드일 때는 기본 제목 생성
            const titles = generateLocalTitles(topic);
            displayTitles(titles);
            return;
        }

        const apiKey = apiKeyInput?.value.trim();
        if (!apiKey) {
            alert('AI 제목 생성을 위해 API 키를 입력해주세요.');
            apiKeyInput?.focus();
            return;
        }

        // 로딩 표시
        suggestedTitles.classList.remove('hidden');
        titlesList.innerHTML = `
            <div class="titles-loading">
                <div class="spinner-small"></div>
                <span>AI가 SEO 최적화 제목을 생성 중...</span>
            </div>
        `;

        try {
            const keywords = keywordsInput?.value.trim();
            const titles = await generateAITitles(topic, keywords, provider, apiKey);
            displayTitles(titles);
        } catch (error) {
            console.error('Title generation error:', error.message);
            titlesList.innerHTML = `
                <div class="titles-error">
                    <p>제목 생성 중 오류가 발생했습니다: ${error.message}</p>
                    <p>로컬 제목을 대신 표시합니다.</p>
                </div>
            `;
            // 폴백으로 로컬 제목 생성
            const titles = generateLocalTitles(topic);
            displayTitles(titles);
        }
    });

    // 닫기 버튼
    if (closeTitlesBtn) {
        closeTitlesBtn.addEventListener('click', () => {
            suggestedTitles.classList.add('hidden');
        });
    }
}

// 로컬 제목 생성 (API 없이)
function generateLocalTitles(topic) {
    const templates = [
        `${topic}: 완벽 가이드 2026`,
        `${topic} 시작하기 - 초보자를 위한 A to Z`,
        `${topic}의 모든 것: 핵심 정리`,
        `왜 ${topic}이 중요한가? 5가지 이유`,
        `${topic} 마스터하기: 전문가 팁`
    ];
    return templates;
}

// AI 제목 생성
async function generateAITitles(topic, keywords, provider, apiKey) {
    const model = aiModelSelect?.value || 'gpt-4o-mini';
    const prompt = buildTitlePrompt(topic, keywords);

    let response;
    if (provider === 'openai') {
        response = await generateTitlesOpenAI(prompt, model, apiKey);
    } else if (provider === 'gemini') {
        response = await generateTitlesGemini(prompt, model, apiKey);
    } else if (provider === 'claude') {
        response = await generateTitlesClaude(prompt, model, apiKey);
    } else {
        throw new Error('지원하지 않는 AI 제공자입니다.');
    }

    return parseTitleResponse(response);
}

function buildTitlePrompt(topic, keywords) {
    return `다음 블로그 주제에 대해 SEO 최적화된 제목 5개를 생성해주세요.

【주제】
${topic}

${keywords ? `【키워드】\n${keywords}\n` : ''}
【요구사항】
1. 검색엔진 최적화(SEO)에 적합한 제목
2. 클릭을 유도하는 매력적인 표현
3. 30-60자 내외의 적절한 길이
4. 숫자나 강조 표현 활용 (예: "5가지", "완벽 가이드", "핵심")
5. 한국어 블로그에 적합한 자연스러운 표현

【응답 형식 - 반드시 JSON 배열로만 응답】
["제목1", "제목2", "제목3", "제목4", "제목5"]`;
}

async function generateTitlesOpenAI(prompt, model, apiKey) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: 'SEO 전문가로서 검색 최적화된 블로그 제목을 생성합니다. 반드시 JSON 배열 형식으로만 응답하세요.'
                },
                { role: 'user', content: prompt }
            ],
            temperature: 0.8,
            max_tokens: 500
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `OpenAI API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
}

async function generateTitlesGemini(prompt, model, apiKey) {
    const systemPrompt = 'SEO 전문가로서 검색 최적화된 블로그 제목을 생성합니다. 반드시 JSON 배열 형식으로만 응답하세요.';
    const fullPrompt = `${systemPrompt}\n\n${prompt}`;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: fullPrompt }] }],
                generationConfig: { temperature: 0.8, maxOutputTokens: 500 }
            })
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Gemini API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

async function generateTitlesClaude(prompt, model, apiKey) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
            model: model,
            max_tokens: 500,
            messages: [{ role: 'user', content: prompt }],
            system: 'SEO 전문가로서 검색 최적화된 블로그 제목을 생성합니다. 반드시 JSON 배열 형식으로만 응답하세요.',
            temperature: 0.8
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Claude API 오류: ${response.status}`);
    }

    const data = await response.json();
    return data.content[0].text.trim();
}

function parseTitleResponse(response) {
    try {
        // JSON 추출
        let jsonStr = response;
        const jsonMatch = response.match(/\[[\s\S]*?\]/);
        if (jsonMatch) {
            jsonStr = jsonMatch[0];
        }

        const titles = JSON.parse(jsonStr);
        if (Array.isArray(titles) && titles.length > 0) {
            return titles.slice(0, 5); // 최대 5개
        }
        throw new Error('Invalid response format');
    } catch (error) {
        console.error('Title parsing error:', error);
        // 줄바꿈으로 분리된 형식 시도
        const lines = response.split('\n').filter(line => line.trim() && !line.startsWith('[') && !line.startsWith(']'));
        if (lines.length >= 3) {
            return lines.slice(0, 5).map(line => line.replace(/^[\d\.\-\*]+\s*/, '').replace(/["']/g, '').trim());
        }
        throw new Error('제목 파싱 실패');
    }
}

function displayTitles(titles) {
    const titlesList = document.getElementById('titlesList');
    const suggestedTitles = document.getElementById('suggestedTitles');
    const topicInput = document.getElementById('topic');

    if (!titlesList) return;

    suggestedTitles.classList.remove('hidden');

    titlesList.innerHTML = titles.map((title, index) => `
        <div class="title-item" data-title="${title.replace(/"/g, '&quot;')}">
            <span class="title-number">${index + 1}</span>
            <span class="title-text">${title}</span>
        </div>
    `).join('');

    // 제목 클릭 이벤트
    titlesList.querySelectorAll('.title-item').forEach(item => {
        item.addEventListener('click', () => {
            const selectedTitle = item.dataset.title;
            if (topicInput) {
                topicInput.value = selectedTitle;
                suggestedTitles.classList.add('hidden');
            }
        });
    });
}

// ===========================
// 설정 기능 (자동 삭제 / 자동 저장 비활성화)
// ===========================

// 설정 상태를 확인하는 헬퍼 함수
function isAutoSaveDisabled() {
    return localStorage.getItem(STORAGE_KEYS.DISABLE_AUTO_SAVE) === 'true';
}

function isAutoDeleteOnClose() {
    return localStorage.getItem(STORAGE_KEYS.AUTO_DELETE_ON_CLOSE) === 'true';
}

// 자동 저장이 활성화된 경우에만 저장하는 래퍼 함수
function saveToLocalStorageIfEnabled(key, value) {
    // 설정 자체는 항상 저장 (설정을 저장해야 사용자 선택이 유지됨)
    const alwaysSaveKeys = [
        STORAGE_KEYS.AUTO_DELETE_ON_CLOSE,
        STORAGE_KEYS.DISABLE_AUTO_SAVE,
        STORAGE_KEYS.AI_PROVIDER,
        STORAGE_KEYS.OPENAI_API_KEY,
        STORAGE_KEYS.GEMINI_API_KEY,
        STORAGE_KEYS.CLAUDE_API_KEY,
        'openai_model',
        'gemini_model',
        'claude_model'
    ];

    if (alwaysSaveKeys.includes(key)) {
        localStorage.setItem(key, value);
        return true;
    }

    // 자동 저장이 비활성화되어 있으면 저장하지 않음
    if (isAutoSaveDisabled()) {
        return false;
    }

    localStorage.setItem(key, value);
    return true;
}

// 설정 초기화
document.addEventListener('DOMContentLoaded', () => {
    initSettings();
});

function initSettings() {
    const settingsToggle = document.getElementById('settingsToggle');
    const settingsPanel = document.getElementById('settingsPanel');
    const autoDeleteCheckbox = document.getElementById('autoDeleteOnClose');
    const disableAutoSaveCheckbox = document.getElementById('disableAutoSave');

    if (!settingsToggle || !settingsPanel) return;

    // 저장된 설정 불러오기
    if (autoDeleteCheckbox) {
        autoDeleteCheckbox.checked = isAutoDeleteOnClose();
    }
    if (disableAutoSaveCheckbox) {
        disableAutoSaveCheckbox.checked = isAutoSaveDisabled();
    }

    // 설정 토글 버튼
    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.toggle('hidden');
        const arrow = settingsToggle.querySelector('.settings-arrow');
        if (arrow) {
            arrow.textContent = settingsPanel.classList.contains('hidden') ? '▼' : '▲';
        }
    });

    // 자동 삭제 설정 변경
    if (autoDeleteCheckbox) {
        autoDeleteCheckbox.addEventListener('change', () => {
            localStorage.setItem(STORAGE_KEYS.AUTO_DELETE_ON_CLOSE, autoDeleteCheckbox.checked);
            if (autoDeleteCheckbox.checked) {
                showSettingsNotification('탭을 닫으면 모든 데이터가 삭제됩니다');
            }
        });
    }

    // 자동 저장 비활성화 설정 변경
    if (disableAutoSaveCheckbox) {
        disableAutoSaveCheckbox.addEventListener('change', () => {
            localStorage.setItem(STORAGE_KEYS.DISABLE_AUTO_SAVE, disableAutoSaveCheckbox.checked);
            if (disableAutoSaveCheckbox.checked) {
                showSettingsNotification('자동 저장이 비활성화되었습니다');
            } else {
                showSettingsNotification('자동 저장이 활성화되었습니다');
            }
        });
    }

    // 탭 닫을 때 자동 삭제 처리
    window.addEventListener('beforeunload', handleAutoDeleteOnClose);
}

// 탭 닫을 때 데이터 삭제
function handleAutoDeleteOnClose() {
    if (isAutoDeleteOnClose()) {
        // API 키와 설정을 제외한 모든 데이터 삭제
        const keysToKeep = [
            STORAGE_KEYS.AUTO_DELETE_ON_CLOSE,
            STORAGE_KEYS.DISABLE_AUTO_SAVE,
            STORAGE_KEYS.OPENAI_API_KEY,
            STORAGE_KEYS.GEMINI_API_KEY,
            STORAGE_KEYS.CLAUDE_API_KEY
        ];

        Object.values(STORAGE_KEYS).forEach(key => {
            if (!keysToKeep.includes(key)) {
                localStorage.removeItem(key);
            }
        });

        // 히스토리 삭제
        localStorage.removeItem(STORAGE_KEYS.HISTORY);

        // 커스텀 클래스 삭제
        localStorage.removeItem('custom_classes');

        // 활성 탭 정보 삭제
        localStorage.removeItem('activeMainTab');
    }
}

// 설정 알림 표시
function showSettingsNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.settings-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'settings-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // 애니메이션 후 제거
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}
