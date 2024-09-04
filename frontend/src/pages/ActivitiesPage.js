import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import ActivitiesSubPage from "./ActiviesSubPage";
import H1 from "../components/H1";
import ActivitiesTable from "../components/ActivitiesTable";

// The page that displays the activities in a table.
// Conditionally renders the subpage that allows user to add new activities when "Add new" button is clicked.

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [subPageVisible, setSubpageVisible] = useState(false);

  // On component mount try to retrieve activities from local storage
  useEffect(() => {
    const storedActivities = localStorage.getItem("activities");
    if (storedActivities) {
      setActivities(JSON.parse(storedActivities));
    } else {
      setActivities([]);
    }
  }, []);

  // Delete an activity when delete button is clicked on the table that renders the activities
  const handleDeleteButtonClick = (id) => {
    const updatedActivities = activities.filter(
      (activity) => activity.activity_id !== id
    );
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));
  };

  // Render the subpage when "Add new" button is clicked
  const handleAddButtonClick = () => {
    setSubpageVisible(true);
  };

  // Receive a new activity as props, generate id and then add to activies when "Add new" button is clicked on the subpage
  const handleSubPageAddButtonClick = (newActivity) => {
    if (activities.length > 0) {
      newActivity.activity_id = activities[activities.length - 1].activity_id + 1;
    } else {
      newActivity.activity_id = 1;
    }
    const updatedActivities = [...activities, newActivity];
    setActivities(updatedActivities);
    localStorage.setItem("activities", JSON.stringify(updatedActivities));

    setSubpageVisible(false);
  };

  // Hide the subpage when "Cancel" button is clicked on it
  const handleSubPageCancelButtonClick = () => {
    setSubpageVisible(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "left",
        textAlign: "left",
      }}
    >
      <H1 text="My activities" />

      <ActivitiesTable
        activities={activities}
        onDeleteButtonClick={handleDeleteButtonClick}
      />

      {!subPageVisible && (
        <Button
          variant="contained"
          color="success"
          sx={{ width: "30%", marginTop: "35px" }}
          onClick={handleAddButtonClick}
        >
          Add new
        </Button>
      )}

      {subPageVisible && (
        <ActivitiesSubPage
          onSubPageAddButtonClick={handleSubPageAddButtonClick}
          onSubPageCancelButtonClick={handleSubPageCancelButtonClick}
        />
      )}
    </Box>
  );
};

export default ActivitiesPage;
