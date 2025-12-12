// 월별 신규 등록 차트
const monthlyCtx = document.getElementById('monthlyChart');
new Chart(monthlyCtx, {
  type: 'line',
  data: {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
    datasets: [{
      label: '신규 등록 수',
      data: [2, 3, 1, 4, 2, 0],
      fill: true,
      backgroundColor: 'rgb(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true
  }
});

// 어드민 상태 분포 차트
const statusCtx = document.getElementById('statusChart');
new Chart(statusCtx, {
  type: 'doughnut',
  data: {
    labels: ['운영중', '종료', '개인정보 처리중'],
    datasets: [{
      data: [9, 3, 7],
      backgroundColor: ['#22C55E', '#EF4444', '#FACC15']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // chart-wrapper 높이에 맞춤
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 10
        }
      }
    }
  }
});

// 개인정보 취급자 현황 차트
const privacyCtx = document.getElementById('privacyChart');
new Chart(privacyCtx, {
  type: 'bar',
  data: {
    labels: ['12/05', '12/06', '12/07', '12/08', '12/09', '12/10', '12/11'],
    datasets: [
      {
        label: '전체 사용자 수',
        data: [9789, 9786, 9784, 9788, 9780, 9790, 9730],
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1
      },
      {
        label: '개인정보 처리자 수',
        data: [3805, 3800, 3793, 3798, 3798, 3793, 3789],
        backgroundColor: 'rgba(30, 64, 175, 0.6)',
        borderColor: 'rgb(30, 64, 175)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }
});