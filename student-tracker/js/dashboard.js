<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Similarity', 'Consistency', 'Clarity', 'Cognitive Demand', 'Focus', 'Engagement', 'Time Consumption'],
            datasets: [{
                label: 'Student Performance',
                data: [78, 67, 46, 72, 42, 77, 81],
                backgroundColor: 'rgba(0, 191, 255, 0.2)',
                borderColor: '#00BFFF',
                pointBackgroundColor: '#00BFFF',
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
</script>
