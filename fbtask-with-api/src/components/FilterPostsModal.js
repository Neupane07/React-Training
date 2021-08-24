import React from 'react'
import { Modal } from 'react-bootstrap';
import DropdownDate from './DropdownDate';
const FilterPostsModal = ({ filterShow, setFilterShow, filterDate, setFilterDate }) => {
    return (
        <>
            <Modal show={filterShow} onHide={() => setFilterShow(false)} centered>
                <Modal.Header closeButton>
                    <h5 className="text-center col-11">Filter Post</h5>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="">Use Filter and find post on your timeline.</h5>
                    <h5 className="flush">This will not affect how others see your timeline.</h5>

                    <DropdownDate
                        setFilterDate={setFilterDate}
                        setFilterShow={setFilterShow}
                    />

                </Modal.Body>

            </Modal>
        </>
    )
}

export default FilterPostsModal
