import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CollaboratorsService from '../../services/collaborator';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataList() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData(){
      const response = await CollaboratorsService.all();
      console.log(response.data);
      setUsers(response.data)
    }
    loadData();
  },[]);

  async function handleDelete(id){
    if(window.confirm('Deseja realmente excluir o colaborador?')){
      console.log(id)
      const result = await CollaboratorsService.delete(id)
      if(result.status === 200){
        window.location.href = ''
      }else{
        alert('Ocorreu um erro!')
      }
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Colaborador</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Pis</TableCell>
            <TableCell align="right">Matrícula</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.pis}</TableCell>
              <TableCell align="right">{row.registration}</TableCell>
              <Button variant="outlined" color="primary" href={`/Users?id=${row.id}`}>
              Update
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => handleDelete(row.id)}>
              Delete
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}