import { forwardRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";
import { useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditTodo = ({
  editTodo,
  openDialog,
  handleCloseDialog,
  dialogType,
}) => {
  const [itemTodo, setItemTodo] = useState();
  return (
    <>
      <div>
        <Dialog
          open={dialogType === "edit" ? openDialog : false}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
        >
          <DialogTitle>Edit Todo</DialogTitle>
          <DialogContent
            sx={{ width: { xs: 350, sm: 400, md: 500, lg: 500, xl: 600 } }}
          >
            <TextField
              autoFocus
              margin="dense"
              label="Todo"
              type="email"
              fullWidth
              variant="outlined"
              onChange={(e) => setItemTodo(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={() => {
                editTodo(itemTodo);
                handleCloseDialog();
              }}
            >
              Edit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default EditTodo;
