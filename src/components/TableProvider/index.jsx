import * as React from "react";
import { addDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { TextAction } from "../../components";

import { Add, Delete, Edit, Pause, PlayArrow } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    label: "School Name",
  },
  {
    id: "board",
    numeric: false,
    label: "Board",
  },
  {
    id: "medium",
    numeric: false,
    label: "Medium",
  },
  {
    id: "class",
    numeric: false,
    label: "Class",
  },
];
function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id == "name" ? "left" : "center"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000D9",
              fontWeight: 500,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center">ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
}

const TableProvider = ({ data, addAction, deleteAction, updateAction }) => {
  const rows = data;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [editId, setEditId] = React.useState("");
  const [schoolFormData, setSchoolFormData] = React.useState({
    name: "",
    board: "",
    medium: "",
    class: "",
  });

  const handleSchoolData = (event) => {
    const { name, value } = event.target;
    setSchoolFormData((prevSchoolData) => {
      return { ...prevSchoolData, [name]: value };
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSchoolDataSubmit = () => {
    if (editId) {
      updateAction(editId, schoolFormData);
      setEditId("");
    } else {
      addAction(schoolFormData);
    }
    setSchoolFormData({
      name: "",
      board: "",
      medium: "",
      class: "",
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", boxShadow: "none" }}>
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody className="relative">
              <TableRow>
                <TableCell component="th" scope="row">
                  <TextField
                    name="name"
                    variant="outlined"
                    onChange={handleSchoolData}
                    value={schoolFormData.name}
                    required
                  />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#000000D9",
                    fontWeight: 400,
                  }}
                >
                  <TextField
                    name="board"
                    variant="outlined"
                    onChange={handleSchoolData}
                    value={schoolFormData.board}
                    required
                  />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#000000D9",
                    fontWeight: 400,
                  }}
                >
                  <TextField
                    name="medium"
                    variant="outlined"
                    onChange={handleSchoolData}
                    value={schoolFormData.medium}
                    required
                  />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "14px",
                    lineHeight: "22px",
                    color: "#000000D9",
                    fontWeight: 400,
                  }}
                >
                  <TextField
                    name="class"
                    variant="outlined"
                    onChange={handleSchoolData}
                    value={schoolFormData.class}
                    required
                  />
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextAction
                      sx={{ margin: "0 auto" }}
                      onClick={handleSchoolDataSubmit}
                      disabled={
                        !Boolean(schoolFormData.name.trim()) ||
                        !Boolean(schoolFormData.medium.trim()) ||
                        !Boolean(schoolFormData.class.trim()) ||
                        !Boolean(schoolFormData.board.trim())
                      }
                    >
                      {editId ? "UPDATE" : "ADD"}
                    </TextAction>
                  </div>
                </TableCell>
              </TableRow>
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="flex gap-5 items-center">
                        <span
                          style={{
                            fontSize: "14px",
                            lineHeight: "22px",
                            color: "#000000D9",
                            fontWeight: 400,
                          }}
                        >
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#000000D9",
                        fontWeight: 400,
                      }}
                    >
                      {row.board}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#000000D9",
                        fontWeight: 400,
                      }}
                    >
                      {row.medium}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        color: "#000000D9",
                        fontWeight: 400,
                      }}
                    >
                      {row.class}
                    </TableCell>
                    <TableCell>
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          justifyContent: "space-between",
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            setEditId(row.id);
                            setSchoolFormData({
                              name: row.name,
                              board: row.board,
                              medium: row.medium,
                              class: row.class,
                            });
                          }}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          sx={{
                            backgroundColor: "transparent",
                            "&:hover": { background: "#ddd" },
                          }}
                          onClick={() => deleteAction(row.id)}
                        >
                          <Delete />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}

              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default TableProvider;
