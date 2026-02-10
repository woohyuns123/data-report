// nav.js
(function () {
  const html = `
  <nav class="topnav">
    <div class="topnav-inner">
      <a class="brand" href="index.html">분석 대시보드</a>
      <div class="menu">
        <a href="index.html" data-nav="index">대표 분석</a>
        <a href="org.html" data-nav="org">조직별 분석</a>
        <a href="compare.html" data-nav="compare">비교 분석</a>
        <a href="trend.html" data-nav="trend">추세 분석</a>
      </div>
    </div>
  </nav>`;

  document.body.insertAdjacentHTML("afterbegin", html);

  // active 자동 처리: <body data-page="...">
  const key = document.body.getAttribute("data-page");
  if (!key) return;

  const a = document.querySelector(`.menu a[data-nav="${key}"]`);
  if (a) a.classList.add("active");
})();
