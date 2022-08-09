import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate';
import {TableLeft, TableRight, MiddlePane} from './Table'

export default function MiddlePinnedTable({firstTableData, middlePane, secondTableData, itemEachPage, pageLength}: any) {
    const [firstTableItems, setFirstTableItems] = useState([]);
    const [middleTableItems, setMiddleTableItems] = useState([]);
    const [lastTableItems, setLastTableItems] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {
        const endOffset = itemOffset + itemEachPage;

        setFirstTableItems(firstTableData.slice(itemOffset, endOffset));
        setMiddleTableItems(middlePane.slice(itemOffset, endOffset));
        setLastTableItems(secondTableData.slice(itemOffset, endOffset));


        setPageCount(Math.ceil(pageLength / itemEachPage));
    }, [itemOffset, itemEachPage, setFirstTableItems, setMiddleTableItems, setLastTableItems, pageLength]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemEachPage) % pageLength;
        setItemOffset(newOffset);
    };


    return (
        <>
            <h1>Middle Pane</h1>
            <div className='pw-table__middle-pane'>
                <div className='pw-table__middle-pane--left'>
                    <TableLeft data={firstTableItems} />
                </div>
                <div className='pw-table__middle-pane--middle'>
                    <MiddlePane data={middleTableItems} />
                </div>
                <div className='pw-table__middle-pane--right'>
                    <TableRight data={lastTableItems} />
                </div>
            </div>

            {pageLength > itemEachPage && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            )}
        </>
    )
}
