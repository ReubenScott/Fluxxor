import React from 'react';
import "../style/search.scss"
import {FormControl, InputGroup, Button, Dropdown, DropdownButton} from "react-bootstrap";

function Search(props) {

    // 証憑項目、証憑種類、証憑input、証憑表示名、備考のchangeイベント
    const handleChangeSelect = e => {
        //ファイル以外の場合
        // alert(11111);
    }

    return (
        <div className="Search">

            <ul>
                <li>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">ファイル</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={props.evidenceFileName}
                        />
                    </InputGroup>
                </li>

                <li>
                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
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

            <Button variant="primary" onClick={handleChangeSelect}>参照</Button>


        </div>
    );
}

export default Search;