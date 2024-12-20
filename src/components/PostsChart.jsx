import { Paper } from '@mantine/core';
import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function PostsChart() {

    const [chartS, setChartS] = useState({

        series: [{
            name: 'Posts',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Comments',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            title: {
                text: 'Sales Overview',
                align: 'center',
              },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'category',
                categories: ["January", "February", "March", "April", "May", "June", "July"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    });


    return (
        <Paper shadow="xs" p="xl">
            <h2 className='font-bold text-xl mb-3'>Posts Analytics</h2>
            <ReactApexChart options={chartS.options} series={chartS.series} type="area" height={350} />
        </Paper>

    )
}

export default PostsChart