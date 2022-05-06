import Pagination from "../../../components/partials/Footer/Pagination";
import { useRouter } from "next/router";
const PartnerInquiry = (() => {

    const router = useRouter();

    return (
        <>
            <div className=" p-2 w-full">
                <div className="flex my-5 justify-between">
                    <div><h2 className="page-title ">1:1문의</h2></div>
                    <div>
                        <button className="category-btn bg-stone-700 mr-1" onClick={() => router.push('/Private/Messages/WriteMessage')}>글쓰기</button>
                        <button className="category-btn bg-stone-700 mr-1">삭제</button>
                    </div>
                </div>

                {/* Return Partner Inquiry List */}
                <InquiryData />

                {/* Partner Deposit History Pagination */}
                <Pagination />



            </div>
        </>
    )
});

const InquiryData = (() => {

    const router = useRouter();

    // Create a container array for dummy data
    const data = [];

    // Push data to the container array
    for (let i = 0; i < 20; i++) { data.push(i); }


    return (
        <>
            <table className="app-table">
                <thead>
                    <tr>
                        <th ><input type={'checkbox'} /></th>
                        <th>제목</th>
                        <th>작성자	</th>
                        <th>읽은시간</th>
                        <th>답변여부</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><input type={'checkbox'} /></td>
                            <td className="cursor-pointer" onClick={() => router.push('/Private/Messages/ViewMessage')}>[ 입금계좌문의 ] 입금계좌를 요청합니다</td>
                            <td>관리자</td>
                            <td>05/04 16:08</td>
                            <td>
                                {index % 2 == 0 && <span className="text-red-400">답변중</span>}
                                {index % 2 == 1 && <span className="text-blue-400">답변완료</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
});


export default PartnerInquiry;
