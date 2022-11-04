import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { TbEdit } from "react-icons/tb";
import { TbTrash } from "react-icons/tb";

const TodoList = ({
  deleteTodo,
  handleOpenDialog,
  getTodo,
  editStatus,
  filter,
  filteredTodos,
  query,
}) => {
  const StyleTypography = styled("div")({
    textDecoration: "line-through",
    opacity: 0.7,
  });

  return (
    <>
      <Box
        sx={{
          px: { xs: "5vw", sm: "8vw", md: "13vw", lg: "15vw", xl: "25vw" },
        }}
      >
        <Grid container>
          <TableContainer component={Paper} sx={{ m: "0 auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2} align="left">
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={() => handleOpenDialog("add")}
                    >
                      Add Todo
                    </Button>
                  </TableCell>
                  <TableCell colSpan={2} align="right">
                    <FormControl>
                      <InputLabel size="small">Filter</InputLabel>
                      <Select
                        size="small"
                        label="Filter"
                        sx={{ minWidth: 130 }}
                        onChange={(e) => {
                          filter(e.target.value);
                        }}
                        value={query.text}
                      >
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="true">Completed</MenuItem>
                        <MenuItem value="false">Incompleted</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredTodos.length > 0 &&
                  filteredTodos.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell align="center">
                        <Checkbox onChange={() => editStatus(t.id)} />
                      </TableCell>

                      <TableCell
                        align="center"
                        sx={{
                          width: {
                            xs: 1000,
                            sm: 900,
                            md: 800,
                            lg: 700,
                            xl: 650,
                          },
                        }}
                      >
                        {t.completed ? (
                          <StyleTypography variant="body2">
                            {t.todo}
                          </StyleTypography>
                        ) : (
                          <Typography variant="body2">{t.todo}</Typography>
                        )}
                      </TableCell>

                      <TableCell align="center">
                        <IconButton
                          onClick={() => {
                            handleOpenDialog("edit");
                            getTodo(t);
                          }}
                        >
                          <TbEdit fontSize="1.3rem" />
                        </IconButton>
                      </TableCell>

                      <TableCell align="center">
                        <IconButton onClick={() => deleteTodo(t.id)}>
                          <TbTrash fontSize="1.3rem" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
    </>
  );
};

export default TodoList;
