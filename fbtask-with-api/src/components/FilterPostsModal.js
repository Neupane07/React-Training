import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import FilterDropdownDate from './FilterDropdownDate';

const FilterPostsModal = ({ filterShow, setFilterShow, filterDate, setFilterDate }) => {
    const [date, setDate] = useState('');
    return (
        <>
            <Modal show={filterShow} onHide={() => setFilterShow(false)} centered>
                <Modal.Header closeButton>
                    <h5 className="text-center col-11">Filter Post</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="">Use Filter and find post on your timeline.</h5>
                    <h5 className="flush">This will not affect how others see your timeline.</h5>
                    <div>
                        {/* <div className="d-flex mt-3">
                            <h5>Go to:</h5>
                            <div className="dropdown mx-1">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    2015
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    November
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="dropdown ms-1">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    22
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div>Go to: <input type="date" value={date} onChange={e => setDate(e.target.value)} /></div>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={() => { setFilterDate(date); setFilterShow(false) }}
                        >Done</button>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default FilterPostsModal
