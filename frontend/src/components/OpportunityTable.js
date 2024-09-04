import React from "react";
import { Box } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

//  Renders the tables showing hourly opportunities for each activity on "weather" page. Gets

const OpportunityTable = ({ hourlyData }) => {
  const values = [];

  for (let index = 0; index < 24; index++) {
    if (index.toString().length === 1) {
      values.push("0" + index.toString());
    } else {
      values.push(index.toString());
    }
  }

  // Helper function that analyzes if weather conditions are met (in general).
  const getStatus = (hour) => {
    const keysToCheck = Object.keys(hour).filter(
      (key) => key.endsWith("_in_range") // define parameters that need to be checked
    );

    // Filter to find keys with false values
    const falseKeys = keysToCheck.filter((key) => !hour[key]);

    if (falseKeys.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <Box sx={{ marginBottom: "35px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {values.map((value, index) => (
                <TableCell
                  key={index}
                  sx={{ padding: "4px", textAlign: "center" }}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              {hourlyData.map((hour, index) => (
                <TableCell
                  key={index}
                  sx={{
                    padding: "6px",
                    textAlign: "center",
                    backgroundColor: getStatus(hour)
                      ? "forestgreen"
                      : "firebrick",
                  }}
                >
                  
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OpportunityTable;
