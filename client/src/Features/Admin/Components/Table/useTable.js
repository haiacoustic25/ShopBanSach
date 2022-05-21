import { Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core';
import { styled } from '@mui/system';
import { useState } from 'react';


export default function useTable(data, headCells, filterFn) {

    const pages = [5, 10, 25]
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState();

    const StyledTableCell = styled(TableCell)(() => ({
          backgroundColor: '#008000a6',
          color: 'black',
      }));

    const tblContainer = props => (
        <Table>
            {props.children}
        </Table>
    )

    const tblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }
 
        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCell => (
                            <StyledTableCell 
                                key={headCell.id}
                                width={400} 
                                sortDirection={orderBy === headCell.id ? order:false}
                            >
                                {headCell.disableSorting ? headCell.label:
                                    <TableSortLabel
                                        active={orderBy === headCell.id}
                                        direction={orderBy === headCell.id ? order: 'asc'}
                                        onClick={() => {handleSortRequest(headCell.id)}}
                                    >
                                        {headCell.label}
                                    </TableSortLabel>
                                }
                            </StyledTableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0);
    }

    const tblPagination = () => (
        <TablePagination
            component="div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={data?.length}
            onPageChange={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )

    function stableSort(array, comparator){
        const stabilizedThis = array?.map((e1, index) => [e1, index]);
        stabilizedThis?.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis?.map((e1) => e1[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const daTaAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(data), getComparator(order, orderBy))
            ?.slice(page*rowsPerPage, (page+1)*rowsPerPage)
    }

    return {
        tblContainer,
        tblHead,
        tblPagination,
        daTaAfterPagingAndSorting
    }
}
