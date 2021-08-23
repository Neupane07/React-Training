import React, { useState } from 'react'
import { DropdownDate } from 'react-dropdown-date'

const FilterDropdownDate = () => {
    const [month, setMonth] = useState(12)
    const [date, setDate] = useState(null)
    const [selectedDate, setSelectedDate] = useState("2012-11-15")
    // console.log("==>", DropdownDate)
    console.log("===>", date)


    const formatDate = date => {
        // formats a JS date to 'yyyy-mm-dd'
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;

        return [year, month, day].join("-");
    };

    return (
        <div>
            <DropdownDate
                // selectedDate={
                //   // optional
                //   this.state.selectedDate // 'yyyy-mm-dd' format only
                // }
                onMonthChange={month => {
                    // optional
                    console.log(month);
                }}
                onDayChange={day => {
                    // optional
                    console.log(day);
                }}
                onYearChange={year => {
                    // optional
                    console.log(year);
                }}
                onDateChange={date => {
                    // optional
                    console.log(date);
                    // this.setState({ date: date, selectedDate: formatDate(date) });
                    setDate(date)
                    setSelectedDate(formatDate(date))
                }}
                defaultValues={
                    // optional
                    {
                        year: "select year",
                        month: "select month",
                        day: "select day"
                    }
                }
            />
        </div>
    )
}

export default FilterDropdownDate

