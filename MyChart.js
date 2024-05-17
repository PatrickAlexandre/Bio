            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'Investing in Stocks (08:00)', 'Networking (09:00)', 'Personal Development (10:00)', 
                        'Fitness Routine (11:00)', 'Reading (12:00)', 'Managing Businesses (13:00)', 
                        'Traveling (14:00)', 'Learning New Skills (15:00)', 'Real Estate Investments (16:00)', 
                        'Meditation (17:00)', 'Philanthropy (18:00)', 'High-End Dining (19:00)', 
                        'Luxury Shopping (20:00)', 'Golfing (21:00)', 'Collecting Art (22:00)', 
                        'Attending Conferences (23:00)', 'Advising Startups (00:00)', 'Yachting (01:00)', 
                        'Skiing (02:00)', 'Spa Days (03:00)', 'Driving Luxury Cars (04:00)', 
                        'Charity Events (05:00)', 'Exclusive Parties (06:00)'
                    ],
                    datasets: [{
                        label: 'Habitudes',
                        data: [12, 19, 15, 10, 8, 20, 14, 16, 9, 6, 18, 21, 11, 7, 13, 5, 4, 3, 2, 1, 0, 1, 2],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
