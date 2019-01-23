import React from "react";
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curUrl: "",
            pageSize: 0,
            pageNo: 0,
            itemNum: 0
        };
    }

    createPageNoItem(curUrl, pageNo, number) {
        const url = `${curUrl}?p=${number}`;
        return (
            <li
                className={pageNo === number ? "page-item active" : "page-item"}
                key={number}
            >
                <a className="page-link" href={url}>
                    {number}
                </a>
            </li>
        );
    }
    createBlankPageNoItem() {
        return (
            <li className="page-item" key="blank">
                <a className="page-link" href="#/">
                    ...
        </a>
            </li>
        );
    }
    render() {
        const { curUrl, pageSize, pageNo, itemNum } = this.props;

        let pageNumberSet = [];
        const pageNum = itemNum ? Math.ceil(itemNum / pageSize) : 0;

        const prevPageNo = pageNo > 1 ? pageNo - 1 : 0;
        const prevUrl = `${curUrl}?p=${prevPageNo}`;

        let prevContent = (
            <li
                className={pageNo === 1 ? "page-item disabled" : "page-item"}
                key="prev"
            >
                <a
                    className="page-link"
                    href={prevUrl}
                    tabIndex="-1"
                    aria-disabled="true"
                >
                    Prev
        </a>
            </li>
        );

        const nextPageNo = pageNo < itemNum ? pageNo + 1 : 0;
        const nextUrl = `${curUrl}?p=${nextPageNo}`;

        let nextContent = (
            <li
                className={pageNo === pageNum ? "page-item disabled" : "page-item"}
                key="next"
            >
                <a
                    className="page-link"
                    href={nextUrl}
                    tabIndex="-1"
                    aria-disabled="true"
                >
                    Next
        </a>
            </li>
        );

        //const showPageNos = findShowingPageNos();
        for (let number = 1; pageNum > 0 && number <= pageNum; number++) {
            if (pageNum <= 4) {
                const pageNoItem = this.createPageNoItem(curUrl, pageNo, number);
                pageNumberSet.push(pageNoItem);
            } else {
                if (number <= 2 || number >= pageNum - 1 || number === pageNum) {
                    const pageNoItem = this.createPageNoItem(curUrl, pageNo, number);
                    pageNumberSet.push(pageNoItem);
                } else {
                    const pageNoItem = this.createBlankPageNoItem();
                    pageNumberSet.push(pageNoItem);
                }
            }
        }
        const paginationContent = (
            <nav aria-label="...">
                <ul className="pagination">
                    {prevContent}
                    {pageNumberSet}
                    {nextContent}
                </ul>
            </nav>
        );
        return <div>{paginationContent}</div>;
    }
}

export default Pagination;
