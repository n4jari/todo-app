import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AddTodo = ({
  openDialog,
  handleCloseDialog,
  addTodoProps,
  dialogType,
}) => {
  const [todoItem, setTodoItem] = useState("");

  const addTodo = () => {
    addTodoProps({
      id: new Date().getTime(),
      todo: todoItem,
      completed: false,
    });
    setTodoItem("");
  };
  return (
    <>
      <div>
        <Dialog
          open={dialogType === "add" ? openDialog : false}
          onClose={handleCloseDialog}
          TransitionComponent={Transition}
        >
          <DialogTitle>Add Todo</DialogTitle>
          <DialogContent
            sx={{ width: { xs: 350, sm: 400, md: 500, lg: 500, xl: 600 } }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Todo"
              type="email"
              fullWidth
              variant="outlined"
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={() => {
                addTodo();
                handleCloseDialog();
              }}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AddTodo;
