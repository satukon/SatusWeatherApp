import React from "react";
import { isToday, format } from "date-fns";
import { Typography } from "@mui/material";

// Helper component to format dates on "weather page" (from "yyyyy-mm-dd" to: "Weekday dd.mm.yyyy")

const DateFormatter = ({ dateString }) => {
    const date = new Date(dateString);
    const dateIsToday = isToday(date);
    const formattedDate = format(date, "d.M.yyyy");
    const weekdayName = format(date, "eeee");
  
    return (
      <div>
        {dateIsToday ? (
          <Typography variant="h6" sx={{ marginBottom: "10px" }}>
            Today {formattedDate}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            sx={{ marginBottom: "10px", marginTop: "65px" }}
          >
            {weekdayName} {formattedDate}
          </Typography>
        )}
      </div>
    );
  };
  
  export default DateFormatter;