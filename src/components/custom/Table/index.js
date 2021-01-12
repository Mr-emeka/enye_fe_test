import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';



const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'>
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label='previous page'>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'>
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'>
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable({profiles=[]}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
   const rows = profiles;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
        <div>
      {rows.length >= 1 ? (
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='custom pagination table'>
            <TableHead>
              <TableRow>
                <TableCell>
                  FirstName
                </TableCell>
                <TableCell>
                  LastName
                </TableCell>
                <TableCell>
                  Gender
                </TableCell>
                <TableCell>
                  Latitude
                </TableCell>
                <TableCell>
                  Longitude
                </TableCell>
                 <TableCell>
                  CreditCardNumber
                </TableCell>
                    <TableCell>
                  CreditCardType
                </TableCell>
                   <TableCell>
                  Email
                </TableCell>
                    <TableCell>
                  DomainName
                </TableCell>
                     <TableCell>
                  PhoneNumber
                </TableCell>
                <TableCell>
                  MacAddress
                </TableCell>
                  <TableCell>
                  URL
                </TableCell>
                   <TableCell>
                  UserName
                </TableCell>
                    <TableCell>
                  LastLogin
                </TableCell>
                      <TableCell>
                  PaymentMethod
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ backgroundColor: 'white' }}>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row, i) => (
                <TableRow
                  // key={row.ngo}
                  key={i}
                  style={{
                    borderBottom: '1px solid rgba(224, 224, 224, 0.3)',
                  }}>
                {console.log(row)}
                  <TableCell
                      key={1 + i}>
                    {row.FirstName}
                  </TableCell>
                  <TableCell
                    style={{
                      color: 'grey',
                      fontFamily: 'Josefin Sans',
                      borderBottom: 'none',
                    }}
                      key={2 + i}>
                    {row.LastName}
                  </TableCell>
                  <TableCell
                    key={3 + i}>
                    {row.Gender}
                  </TableCell>
                  <TableCell
                    key={4 + i}>
                    {row.Latitude}
                  </TableCell>
                  <TableCell>
                    {row.Longitude}
                  </TableCell>
                     <TableCell>
                    {row.CreditCardNumber}
                  </TableCell>
                    <TableCell>
                    {row.CreditCardType}
                  </TableCell>
                     <TableCell>
                    {row.Email}
                  </TableCell>
                    <TableCell>
                    {row.DomainName}
                  </TableCell>
                   <TableCell>
                    {row.PhoneNumber}
                  </TableCell>
                       <TableCell>
                    {row.MacAddress}
                  </TableCell>
                     <TableCell>
                    {row.URL}
                  </TableCell>
                     <TableCell>
                    {row.UserName}
                  </TableCell>
                    <TableCell>
                    {row.LastLogin}
                  </TableCell>
                   <TableCell>
                    {row.PaymentMethod}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[20 ,{ label: 'All', value: -1 }]}
                  colSpan={6}
                  className='pagination'
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            border: 'none',
            boxShadow: 'none !important',
            backgroundColor: 'transparent !important',
            width: '100%',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              fontFamily: 'Josefin Sans',
              fontSize: '32px',
              position: 'relative',
              top: '60px',
              width: '80%',
              margin: 'auto',
              marginBottom: '20px',
            }}>
            You have no payment yet
          </div>
        </div>
      )}
    </div>
  );
}