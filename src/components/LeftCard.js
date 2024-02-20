import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import DataTables from "datatables.net";

function LeftCard(props, ref) {
    const [data, setData] = useState([]);
    const tableRef = useRef();

    useEffect(() => {
        // 使用 jQuery 初始化 DataTables
        $(document).ready(function () {
            $('#myTable').DataTable({
                data: data,
                columns: [
                    { title: 'ID' },
                    { title: '姓名' },
                    { title: '年龄' },
                ],
            });
        });

        // $('#myTable').DataTable(tableRef.current, {
        //     data: dataSet,
        //     columns: [
        //         { title: "Name" },
        //         { title: "Occupation" },
        //         { title: "City" },
        //         { title: "ZIP" },
        //         { title: "Birthday" },
        //         { title: "Salary" },
        //     ],
        // });

    }, [data]);

    return (
        <div>
            <table id="myTable">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>年龄</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeftCard;
