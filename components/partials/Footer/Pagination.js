import ReactPaginate from "react-paginate";

const Pagination = (() => {
    return (
        <>
            <div className='web-pagination mb-5'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=" >"
                    pageCount={20}
                    previousLabel="< "
                />
            </div>

        </>
    )
});

export default Pagination;