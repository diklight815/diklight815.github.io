/**
 * AI 블로그 도구 - 공통 JavaScript
 * 모바일 메뉴, 스크롤 효과 등 공통 기능
 */

document.addEventListener('DOMContentLoaded', function() {
    initCommonLayout();
    initMobileMenu();
    initActiveNavLink();
    initSmoothScroll();
});

/**
 * 공통 레이아웃 초기화 (헤더/푸터 자동 삽입)
 */
function initCommonLayout() {
    // 현재 페이지 감지
    const currentPath = window.location.pathname;
    let activePage = '';

    if (currentPath.includes('app')) activePage = 'app';
    else if (currentPath.includes('blog')) activePage = 'blog';
    else if (currentPath.includes('templates')) activePage = 'templates';
    else if (currentPath.includes('docs')) activePage = 'docs';
    else if (currentPath.includes('pricing')) activePage = 'pricing';
    else if (currentPath.includes('about')) activePage = 'about';
    else if (currentPath.includes('contact')) activePage = 'contact';

    // 헤더 삽입
    const headerPlaceholder = document.getElementById('site-header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = getHeaderHTML(activePage);
    }

    // 푸터 삽입
    const footerPlaceholder = document.getElementById('site-footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = getFooterHTML();
    }
}

/**
 * 모바일 메뉴 토글
 */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const mobileMenu = document.querySelector('.nav-mobile-menu');

    if (!toggle || !mobileMenu) return;

    toggle.addEventListener('click', function() {
        const isOpen = mobileMenu.classList.contains('active');

        if (isOpen) {
            mobileMenu.classList.remove('active');
            toggle.innerHTML = '☰';
            document.body.style.overflow = '';
        } else {
            mobileMenu.classList.add('active');
            toggle.innerHTML = '✕';
            document.body.style.overflow = 'hidden';
        }
    });

    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            toggle.innerHTML = '☰';
            document.body.style.overflow = '';
        });
    });
}

/**
 * 현재 페이지에 해당하는 네비게이션 링크 활성화
 */
function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');

        // 현재 경로와 일치하면 활성화
        if (currentPath === href ||
            currentPath.endsWith(href) ||
            (href !== '/' && currentPath.includes(href.replace('.html', '')))) {
            link.classList.add('active');
        }
    });
}

/**
 * 부드러운 스크롤 (앵커 링크용)
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 공통 헤더 HTML 생성
 */
function getHeaderHTML(activePage = '') {
    return `
    <header class="site-header">
        <nav class="site-nav">
            <a href="/" class="nav-logo">
                <span class="nav-logo-icon">✨</span>
                <span>AI 블로그 도구</span>
            </a>
            <ul class="nav-links">
                <li><a href="/app.html"${activePage === 'app' ? ' class="active"' : ''}>도구</a></li>
                <li><a href="/blog.html"${activePage === 'blog' ? ' class="active"' : ''}>블로그</a></li>
                <li><a href="/templates.html"${activePage === 'templates' ? ' class="active"' : ''}>템플릿</a></li>
                <li><a href="/docs.html"${activePage === 'docs' ? ' class="active"' : ''}>문서</a></li>
                <li><a href="/pricing.html"${activePage === 'pricing' ? ' class="active"' : ''}>가격</a></li>
            </ul>
            <a href="/app.html" class="nav-cta">무료로 시작</a>
            <button class="nav-mobile-toggle" aria-label="메뉴 열기">☰</button>
        </nav>
        <div class="nav-mobile-menu">
            <ul class="nav-links">
                <li><a href="/app.html">도구</a></li>
                <li><a href="/blog.html">블로그</a></li>
                <li><a href="/templates.html">템플릿</a></li>
                <li><a href="/docs.html">문서</a></li>
                <li><a href="/pricing.html">가격</a></li>
            </ul>
            <a href="/app.html" class="nav-cta">무료로 시작</a>
        </div>
    </header>`;
}

/**
 * 공통 푸터 HTML 생성
 */
function getFooterHTML() {
    const year = new Date().getFullYear();
    return `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="footer-brand-logo">
                        <span>✨</span>
                        <span>AI 블로그 도구</span>
                    </div>
                    <p class="footer-brand-desc">
                        AI를 활용하여 블로그 글쓰기를 더 쉽고 효율적으로.
                        SEO 최적화된 고품질 콘텐츠를 빠르게 생성하세요.
                    </p>
                </div>
                <div class="footer-section">
                    <h4>서비스</h4>
                    <div class="footer-links">
                        <a href="/app.html">블로그 생성기</a>
                        <a href="/templates.html">템플릿</a>
                        <a href="/docs.html">사용 가이드</a>
                        <a href="/pricing.html">가격</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>콘텐츠</h4>
                    <div class="footer-links">
                        <a href="/blog.html">블로그</a>
                        <a href="/blog/ai-writing-guide.html">AI 글쓰기 가이드</a>
                        <a href="/blog/seo-checklist.html">SEO 체크리스트</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>회사</h4>
                    <div class="footer-links">
                        <a href="/about.html">소개</a>
                        <a href="/contact.html">연락처</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">© ${year} AI 블로그 도구. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="/privacy.html">개인정보처리방침</a>
                    <a href="/terms.html">이용약관</a>
                </div>
            </div>
        </div>
    </footer>`;
}
