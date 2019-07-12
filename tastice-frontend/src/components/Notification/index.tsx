import React, { SyntheticEvent, useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { NotificationContentWrapper } from "./NotificationContentWrapper";
import { NOTIFICATION } from "../../queries";
import { useQuery } from "@apollo/react-hooks";

export const Notifications = () => {
  const [open, setOpen] = useState(true);
  const notification = useQuery(NOTIFICATION);
  useEffect(() => setOpen(true), [notification]);

  if (
    notification.data === undefined ||
    notification.data.notification === "clear"
  ) {
    return null;
  }

  const handleCloseNotification = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={open}
      onClose={handleCloseNotification}
    >
      <NotificationContentWrapper
        onClose={handleCloseNotification}
        variant={"error"}
        message={notification.data.notification}
      />
    </Snackbar>
  );
};
