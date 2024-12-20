import { Paper } from '@mantine/core';
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function PostsChart() {
    const [state, setState] = useState({

        series: [{
            name: 'Posts',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Comments',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
            title: {
                text: 'Posts Overview',
                align: 'center',
              },
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'category',
                categories: ["jan", "feb", "march", "april", "may", "june", "july"]
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
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </Paper>
    )
}

export default PostsChart