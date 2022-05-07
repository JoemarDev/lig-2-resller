import Pagination from "../../../components/partials/Footer/Pagination";
import { useRouter } from "next/router";
const PartnerNotes = (() => {
    return (
        <>
            <div className=" p-2 w-full">
                <div className="flex my-5 justify-between">
                    <div><h2 className="page-title ">쪽지함</h2></div>
                    <div>
                        <button className="category-btn bg-red-500 mr-1">선택삭제</button>
                    </div>
                </div>

                {/* Return Admin Note Lists */}
                <NotesData />

                {/* Admin Note History Pagination */}
                <Pagination />

            </div>
        </>
    )
});


const NotesData = (() => {
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
                        <th>확인일자</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><input type={'checkbox'} /></td>
                            <td className="cursor-pointer" onClick={() => router.push('/Private/Messages/ViewMessage')}>[ 쪽지 ] 오징어파워볼 쪽지 안내입니다.</td>
                            <td>관리자</td>
                            <td>
                                {index % 2 == 0 && <span>-</span>}
                                {index % 2 == 1 && <span > 2021-12-16 04:30:29</span>}

                            </td>
                            <td>
                                {index % 2 == 0 && <span className="text-red-400">안읽음</span>}
                                {index % 2 == 1 && <span className="text-blue-400">읽음</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
});
export default PartnerNotes;