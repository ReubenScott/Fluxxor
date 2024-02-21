import React, { useEffect } from 'react';
import $ from 'jquery';
import DataTables from "datatables.net";

function DataTable(props) {

    useEffect(() => {
        // 在组件挂载时执行

        // 使用 jQuery 初始化 DataTables
        $(document).ready(function () {
            $('#myTable').DataTable({
                data: props.data,
                columns: [
                    { title: ' ID ' },
                    { title: ' 姓名 ' },
                    { title: ' 年龄 ' },
                    { title: ' 年龄 ' },
                ],
            });
        });

        return () => {
            // 在组件卸载时执行
        };
    }, []);

    return (
        <div>
            <table className="table table-striped table-hover" id="myTable" />

            <ul className="pagination pagination-sm">
                <li className="disabled"><a href="#">&laquo;</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
            </ul>

        </div>
    );
};

export default DataTable;
