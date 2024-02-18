import React from 'react';
import "./index.scss"

function Search(props) {

    // 証憑項目、証憑種類、証憑input、証憑表示名、備考のchangeイベント
    const handleChangeSelect = e => {
        //ファイル以外の場合
        // alert(11111);
    }

    return (
        <div>

            <ul>
                <li>
                    <div className="content">
                        <label className="w80">ファイル</label>
                        <input
                            name="evidenceFileNameFileForDisplay"
                            type="text"
                            value={props.evidenceFileName}
                        />
                    </div>
                </li>

                <li>
                    <div className="content">
                        <label className="w80">ファイル</label>
                        <input
                            name="evidenceFileNameFileForDisplay"
                            type="text"
                            value={props.evidenceFileName}
                        />
                    </div>
                </li>

                <li>
                    <div className="content">
                        <label className="w80">ファイル</label>
                        <input
                            name="evidenceFileNameFileForDisplay"
                            type="text"
                            value={props.evidenceFileName}
                        />
                    </div>
                </li>
            </ul>

            <ul>
                <li>one22</li>
                <li>two22</li>
                <li>three22</li>
            </ul>

            <button type="button" className="ml5"
                    onClick={handleChangeSelect}>
                参照
            </button>


        </div>
    );
}

export default Search;