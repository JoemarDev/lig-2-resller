
import { useState } from "react";
import FloatBox from "../../partials/Modal/FloatBox";

const CashRecordChild = ((props) => {
    const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


    const [selectedIndex, setSelectedIndex] = useState();

    return (
        <>
            <div className="app-table no-border w-bg">
                <table className="w-full text-center app-table">
                    <thead>
                        <tr>
                            <td>가입코드	</td>
                            <td>닉네임</td>
                            <td>보유머니	</td>
                            <td>입금수</td>
                            <td>출금수</td>
                            <td>승률(입금-출금)	</td>
                            <td>처리내용</td>
                            <td>캐쉬</td>
                            <td>처리시간	</td>
                            <td>캐쉬합</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="text-blue-300">6666</td>

                                <td className="text-blue-300 relative cursor-pointer"
                                    onClick={() => {
                                        setSelectedIndex(index == selectedIndex ? null : index)

                                    }}>
                                    <b className={`bg-level-3`}></b>
                                    빠빠라구
                                    {selectedIndex == index && <FloatBox />}

                                </td>
                                <td className="text-yellow-500">	5,914,000원	</td>
                                <td className="text-blue-300">	5,914,000원	</td>
                                <td className="text-red-500">	5,914,000원	</td>
                                <td className="text-blue-300">	5,914,000원	</td>


                                <td className="text-blue-300 " style={{ minWidth: '200px' }}>
                                    {props.type == 6 && <label>배팅오류로 인한 캐쉬 지급</label>}
                                    {props.type == 7 &&
                                        <label className="text-white">입금
                                            <span className="text-yellow-500">10,000 원</span> 이벤트 :
                                            <span className="text-blue-300">(매 충전)</span>지급 :
                                            <span className="text-green-500">10,000 * 10% = 1,000P</span>
                                        </label>
                                    }
                                    {props.type == 8 &&
                                        <label className="text-white">유저 포인트전환</label>
                                    }
                                    {props.type == 9 &&
                                        <label className="text-white">파트너 포인트전환</label>
                                    }

                                </td>
                                <td className="text-blue-300">10,000 P</td>
                                <td >2022. 04. 04. 16:52:29	</td>
                                <td className="text-blue-500">0 원</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
});

export default CashRecordChild;