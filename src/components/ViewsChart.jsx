import { Paper } from "@mantine/core";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";




const ViewsChart = () => {
    const [state, setState] = useState({

        series: [90],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Completion'],
        },


    });



    return (
        <Paper shadow="xs" p="xl">
            <div id="chart">
                <h2 className='font-bold text-xl mb-3'>Posts Views</h2>
                <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
            </div>
        </Paper>
    );
}

export default ViewsChart