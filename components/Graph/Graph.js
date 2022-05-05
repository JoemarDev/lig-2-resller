import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from 'chart.js'
import WebHelper from "../Function/WebHelper";

const GetDummyStats = ((min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
});
const Graph = ((props) => {

    let record1 = GetDummyStats(50000, 150000);
    let record2 = GetDummyStats(50000, 150000);
    let record3 = GetDummyStats(50000, 150000);

    let arr = [record1, record2];

    if (props.stats[2]) {
        arr.push(record3);
    }




    let data = {
        datasets: [
            {
                label: '# of Votes',
                data: arr,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    Chart.register(ArcElement);

    return (
        <>
            <div className="mx-1 w-full">

                <div className="p-5 bg-stone-900 border-2 border-stone-700 rounded w-full" >
                    <div className="w-full p-2 px-4 font-bold bg-gray-800 border-2 border-gray-600 rounded text-center">
                        {props.title}
                    </div>
                    <div className="flex">
                        <div className=" p-3" style={{ width: '50%' }}>
                            <Doughnut data={data} />
                        </div>
                        <div style={{ width: '50%' }} className={'py-5'}>
                            <div className="w-full p-2 px-4 font-bold bg-gray-800 border-2 border-gray-600 rounded flex justify-between mt-1">
                                <span style={{ 'color': 'rgba(255, 99, 132, 1)' }}>{props.stats[0]}</span>
                                <span className="text-yellow-300">{WebHelper.FormatMoney(record1)} </span>
                            </div>
                            <div className="w-full p-2 px-4 font-bold bg-gray-800 border-2 border-gray-600 rounded flex justify-between mt-1">
                                <span style={{ 'color': 'rgba(54, 162, 235, 1)' }}>{props.stats[1]}</span>
                                <span className="text-yellow-300">{WebHelper.FormatMoney(record2)}</span>
                            </div>
                            {props.stats[2] &&
                                <>
                                    <div className="w-full p-2 px-4 font-bold bg-gray-800 border-2 border-gray-600 rounded flex justify-between mt-1">
                                        <span style={{ 'color': 'rgba(255, 206, 86, 1)' }}>{props.stats[2]}</span>
                                        <span className="text-yellow-300">{WebHelper.FormatMoney(record3)}</span>
                                    </div>
                                </>
                            }
                        </div>
                    </div>


                </div>
            </div>


        </>
    )
});

export default Graph;