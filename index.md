# 미적분학 개념 시각화

아래는 정적분의 개념을 시각화한 인터랙티브 데모입니다.

<div id="integral-demo"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjs@11.0.0/lib/browser/math.min.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<script src="integral.js"></script>

## 함수 조절하기
<div id="controls">
  <label for="function-select">함수 선택:</label>
  <select id="function-select">
    <option value="sin">sin(x)</option>
    <option value="x^2">x²</option>
    <option value="exp">e^x</option>
  </select>
  
  <label for="interval-slider">구간:</label>
  <input type="range" id="interval-slider" min="1" max="10" value="5">
  <span id="interval-value">5</span>
</div>

<div id="explanation">
  정적분 \( \int_a^b f(x) dx \)는 함수 f(x)의 그래프와 x축 사이의 영역 넓이를 의미합니다.
</div>