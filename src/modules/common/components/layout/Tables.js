import React, { Component } from "react";

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Tables extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: "Product1",
                price: 120
            },{
                id: 2,
                name: "Product2",
                price: 80
            },{
                id: 3,
                name: "Product3",
                price: 207
            },{
                id: 4,
                name: "Product4",
                price: 100
            },{
                id: 5,
                name: "Product5",
                price: 150
            },{
                id: 6,
                name: "Product6",
                price: 160
            },{
                id: 7,
                name: "Product7",
                price: 120
            },{
                id: 8,
                name: "Product8",
                price: 80
            },{
                id: 9,
                name: "Product9",
                price: 207
            },{
                id: 10,
                name: "Product10",
                price: 100
            },{
                id: 11,
                name: "Product11",
                price: 150
            },{
                id: 12,
                name: "Product12",
                price: 160
            },
          ];

        const authContent =
            <div>
                <BootstrapTable
                    data={ products }
                    pagination>
                    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        return (
            <div>
                {authContent}
            </div>
        )
    }
}

export default Tables;
