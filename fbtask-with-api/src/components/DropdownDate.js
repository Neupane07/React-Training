import React, { useState } from 'react'

const DropdownDate = ({ setFilterDate, setFilterShow }) => {
    const [date, setDate] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState('2015')


    console.log(`==>date==> ${year}-${month}-${date}`)


    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const renderDays = days.map(day => {
        return (
            <option key={day} value={day}>{day}</option>
        )
    })

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const renderMonths = months.map((month, idx) => {
        return (
            <option key={month} value={idx + 1}>{month}</option>
        )
    })

    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021]
    const renderYears = years.map(year => {
        return (
            <option key={year} value={year}>{year}</option>
        )
    })
    return (
        <>
            <div className="d-flex justify-content-around">

                <select className="form-select mx-2" aria-label="Default select example" value={year} onChange={(e) => setYear(e.target.value)}>
                    {renderYears}
                </select>
                <select className="form-select mx-2" aria-label="Default select example" value={month} onChange={(e) => setMonth(e.target.value)}>
                    {renderMonths}
                </select>
                <select className="form-select mx-2" aria-label="Default select example" value={date} onChange={(e) => setDate(e.target.value)}>
                    {renderDays}
                </select>
            </div>
            <div className="d-flex mt-3 justify-content-center align-items-center">
                <button
                    className="btn btn-primary w-100"
                    onClick={() => {
                        setFilterDate(`${year}-${month}-${date}`);
                        setFilterShow(false)
                    }}
                >Done</button>
            </div>
        </>
    )
}

export default DropdownDate
