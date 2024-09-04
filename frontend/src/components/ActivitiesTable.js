import React from "react";
import { Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

// Renders the table on "my activities" page.

const ActivitiesTable = ({ activities, onDeleteButtonClick }) => {

  const getCriteria = (criteria, variableName) => {
    const criteriaItem = criteria.find(item => item.variable === variableName);
    if (criteriaItem) {
      if (criteriaItem.min === criteriaItem.max) {
        return criteriaItem.min;
      }
      else return `${criteriaItem.min} - ${criteriaItem.max}`;
    }
    return '';
  };

  if (activities.length < 1) {
    return (
      <Typography variant="body1" align="center">
        You haven't set any activities yet.
      </Typography>
    );
  } else {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Activity</TableCell>
              <TableCell>Temperature (&deg;C)</TableCell>
              <TableCell>Windspeed (m/s)</TableCell>
              <TableCell>Rainfall (mm/h)</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.activity_id}>
                <TableCell>{activity.activity_name}</TableCell>
                <TableCell>
                {getCriteria(activity.criteria, 'temperature_2m')}
                </TableCell>
                <TableCell>
                {getCriteria(activity.criteria, 'wind_speed_10m')}
                </TableCell>
                <TableCell>
                {getCriteria(activity.criteria, 'rain')}
                </TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => onDeleteButtonClick(activity.activity_id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default ActivitiesTable;
