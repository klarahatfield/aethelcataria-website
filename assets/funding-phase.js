/* 『비밀정원』 텀블벅 펀딩 시기별 문구 자동 전환 (한국 시간 기준)
   - data-live      : 11/20(금) 18:00 펀딩 오픈 뒤 보여 줄 문구
   - data-ended     : 12/22 00:00 (12/21 마감) 뒤 보여 줄 문구
   - data-*-href    : 같은 시점에 바꿀 링크 (없으면 그대로)
   - data-hide-ended: 마감 뒤 숨길 요소 */
(function () {
  try {
    var START = new Date('2026-11-20T18:00:00+09:00').getTime();
    var END   = new Date('2026-12-22T00:00:00+09:00').getTime();
    var now = Date.now();
    function swap(attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        el.textContent = el.getAttribute(attr);
        var href = el.getAttribute(attr + '-href');
        if (href) el.setAttribute('href', href);
      });
    }
    if (now >= START) swap('data-live');
    if (now >= END) {
      swap('data-ended');
      document.querySelectorAll('[data-hide-ended]').forEach(function (el) { el.style.display = 'none'; });
    }
  } catch (e) {}
})();
