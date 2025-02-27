document.addEventListener('DOMContentLoaded', function() {
    // 정규분포 관련 코드
    initNormalDistribution();
    
    // 중심극한정리 시뮬레이션 초기화
    initCLTSimulation();
    
    // 가설검정 초기화
    initHypothesisTesting();
    
    // 베이즈 정리 초기화
    initBayesTheorem();
    
    // 몬테카를로 시뮬레이션 초기화
    initMonteCarloSimulation();
    
    // 주사위 시뮬레이션 초기화
    initDiceSimulation();
});

// 정규분포 시각화
function initNormalDistribution() {
    const margin = { top: 40, right: 40, bottom: 60, left: 60 };
    const width = document.getElementById('normal-graph').clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
    
    const svg = d3.select('#normal-graph')
        .append('svg')
        .attr('width