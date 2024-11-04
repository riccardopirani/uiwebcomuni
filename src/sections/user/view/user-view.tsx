import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import type { UserProps } from '../user-table-row';

export function UserView() {
  const table = useTable();
  const [filterName, setFilterName] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [newComuneName, setNewComuneName] = useState('');
  const [comuni, setComuni] = useState<UserProps[]>([]);

  const fetchComuni = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8989/sites', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComuni(data);
    } catch (error) {
      console.error('Errore durante il caricamento dei comuni:', error);
    }
  };

  useEffect(() => {
    fetchComuni();
  }, []);

  const dataFiltered: UserProps[] = applyFilter({
    inputData: comuni,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleAddComune = async () => {
    if (newComuneName) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        name: newComuneName,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      try {
        const response = await fetch("http://127.0.0.1:8989/sites", requestOptions);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);

        setComuni((prevComuni) => [
          ...prevComuni,
          { id: result.id, name: newComuneName, activationDate: result.activationDate, isVerified: true },
        ]);

        setNewComuneName('');
        handleCloseDialog();
      } catch (error) {
        console.error('Errore durante la creazione del comune:', error);
      }
    }
  };

  const handleDeleteComuni = async () => {
    try {
      const deletePromises = table.selected.map(async (id) => {
        const comuneToDelete = comuni.find(comune => comune.id === id);
        if (comuneToDelete) {
          const response = await fetch(`http://127.0.0.1:8989/sites/${comuneToDelete.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error(`Failed to delete comune with id ${comuneToDelete.id}`);
          }
        }
      });

      await Promise.all(deletePromises);

      // Update the state to remove the deleted comuni
      setComuni((prevComuni) => prevComuni.filter(comune => !table.selected.includes(comune.id)));
      
      // Reset selected after deletion
      table.onSelectAllRows(false, []);
    } catch (error) {
      console.error('Errore durante la cancellazione dei comuni:', error);
    }
  };

  return (
    <DashboardContent>
      <Box display="flex" alignItems="center" mb={5}>
        <Typography variant="h4" flexGrow={1}>
          Comuni Istanze
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleOpenDialog}
        >
          Nuovo Comune
        </Button>
        {table.selected.length > 0 && (
          <Button
            variant="contained"
            color="error"
            startIcon={<Iconify icon="mingcute:delete-line" />}
            onClick={handleDeleteComuni}
            sx={{ ml: 2 }}
          >
            Elimina Comune
          </Button>
        )}
      </Box>

      <Card>
        <UserTableToolbar
          numSelected={table.selected.length}
          filterName={filterName}
          onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterName(event.target.value);
            table.onResetPage();
          }}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={table.order}
                orderBy={table.orderBy}
                rowCount={comuni.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    comuni.map((comune) => comune.id)
                  )
                }
                headLabel={[
                  { id: 'name', label: 'Nome' },
                  { id: 'activationDate', label: 'Data di Attivazione' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      row={{
                        id: row.id,
                        name: row.name,
                        activationDate: row.activationDate,
                        isVerified: true
                      }}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                    />
                  ))}

                <TableEmptyRows
                  height={68}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, comuni.length)}
                />

                {notFound && <TableNoData searchQuery={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          page={table.page}
          count={comuni.length}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Nome del Comune</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Comune"
            type="text"
            fullWidth
            variant="outlined"
            value={newComuneName}
            onChange={(e) => setNewComuneName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleAddComune} variant="contained" color="primary">
            Crea Comune
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardContent>
  );
}

export function useTable() {
  const [page, setPage] = useState(0);
  const [orderBy, setOrderBy] = useState('name');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<string[]>([]);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');

  const onSort = useCallback(
    (id: string) => {
      const isAsc = orderBy === id && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    },
    [order, orderBy]
  );

  const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }, []);

  const onSelectRow = useCallback(
    (inputValue: string) => {
      const newSelected = selected.includes(inputValue)
        ? selected.filter((value) => value !== inputValue)
        : [...selected, inputValue];

      setSelected(newSelected);
    },
    [selected]
  );

  const onResetPage = useCallback(() => {
    setPage(0);
  }, []);

  const onChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      onResetPage();
    },
    [onResetPage]
  );

  return {
    page,
    order,
    onSort,
    orderBy,
    selected,
    rowsPerPage,
    onSelectRow,
    onResetPage,
    onChangePage,
    onSelectAllRows,
    onChangeRowsPerPage,
  };
}
