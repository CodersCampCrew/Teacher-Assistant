import { useSelector } from "react-redux";
import CalendarComponent from "../components/calendar/CalendarComponent";
import { AnyAction } from "@reduxjs/toolkit";
import { Alert } from "react-bootstrap";
import Link from "next/link";

const Calendar = () => {
  const { user } = useSelector((state: AnyAction) => state.auth);
  if (user) {
    return <CalendarComponent />;
  } else {
    return (
      <Alert variant="warning">
        Musisz być <Link href="/login">zalogowany</Link> aby zobaczyć tą stronę
      </Alert>
    );
  }
};

export default Calendar;
