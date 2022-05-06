import { useState, useEffect } from "react";
import Graph from "../../components/Graph/Graph";
const Home = (() => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return;
    return (
        <>
            <div className=" p-2 w-full">
                <h2 className="page-title my-5">그래프 통계</h2>

                <div className="flex w-full">
                    <Graph title={"회원 입금/출금"} stats={['입금 ', '출금 ', '수익 ']} />
                    <Graph title={"파트너 입금/출금"} stats={['입금 ', '출금 ', '수익 ']} />
                    <Graph title={"카지노"} stats={['WIN ', 'LOSE ', '수익 ']} />
                    <Graph title={"슬롯	"} stats={['WIN ', 'LOSE ', '수익 ']} />
                </div>
                <div className="flex w-full">
                    <Graph title={"호텔카지노	"} stats={['WIN ', 'LOSE ', '수익 ']} />
                    <Graph title={"파워볼	"} stats={['WIN ', 'LOSE ', '수익 ']} />
                    <Graph title={"미니게임"} stats={['WIN ', 'LOSE ', '수익 ']} />
                    <Graph title={"벳이스트	"} stats={['WIN ', 'LOSE ', '수익 ']} />
                </div>
            </div>
        </>
    )
});


export default Home;