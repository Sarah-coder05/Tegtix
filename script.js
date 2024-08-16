document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('insulation-chart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['CELLULAR GLASS', 'NITRILE RUBBER', 'EPS GRAPHITE', 'PF (RESOL)', 'TECTOTHERM-PHENOL', 'VIP (VACUUM-INSULATED PANEL)'],
            datasets: [{
                data: [225, 200, 180, 155, 150, 145, 135, 80, 35],
                backgroundColor: (context) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return label === 'TECTOTHERM-PHENOL' ? '#0066ff' : '#f0f0f0';
                },
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'x', // Changed from 'y' to 'x' to flip the axis
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {  // This was previously 'x'
                    beginAtZero: true,
                    max: 250,
                    ticks: {
                        stepSize: 50
                    }
                },
                x: {  // This was previously 'y'
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            }
        }
    });
});