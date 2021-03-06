import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ToDoList from './Widgets/ToDo/Todo';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';


function Calendar(props) {

    let defaultSelectedDay = {
        day: moment().format("D"),
        month: moment().month()
    };

    const [dateObject, setdateObject] = useState(moment());
    const [showMonthTable, setShowMonthTable] = useState(false);
    const [selectedDay, setSelected] = useState(defaultSelectedDay);


    /*** CALENDAR HEAD ***/
    const allMonths = moment.months();
    const currentMonth = () => dateObject.format("MMMM");
    const currentYear = () => dateObject.format("YYYY");

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let newDateObject = Object.assign({}, dateObject);
        newDateObject = moment(dateObject).set("month", monthNo);
        setdateObject(newDateObject);
        setShowMonthTable(false);
    }

    const toggleMonthSelect = () => setShowMonthTable(!showMonthTable);

    /*** CALENDAR BODY ***/
    const setSelectedDay = day => {
        setSelected({
            day,
            month: currentMonthNum()
        });

    };

    const currentMonthNum = () => dateObject.month();
    const daysInMonth = () => dateObject.daysInMonth();
    const currentDay = () => dateObject.format("D");
    const actualMonth = () => moment().format("MMMM");

    const firstDayOfMonth = () => moment(dateObject).startOf("month").format("d");

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <CalendarHead
                    allMonths={allMonths}
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    setMonth={setMonth}
                    showMonthTable={showMonthTable}
                    toggleMonthSelect={toggleMonthSelect}
                />
                <CalendarBody
                    firstDayOfMonth={firstDayOfMonth}
                    daysInMonth={daysInMonth}
                    currentDay={currentDay}
                    currentMonth={currentMonth}
                    currentMonthNum={currentMonthNum}
                    actualMonth={actualMonth}
                    setSelectedDay={setSelectedDay}
                    selectedDay={selectedDay}
                    weekdays={moment.weekdays()}
                // activeDays={activeDays}
                />
            </Grid>
            <Grid item = {8}>
            <ToDoList/>
            </Grid>
            
        </Grid>
    
    )
};
export default Calendar;