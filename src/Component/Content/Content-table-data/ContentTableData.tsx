// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import './ContentTableData.css';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import { TableFooter } from '@mui/material';
// import TablePagination from '@mui/material/TablePagination';
  

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 10,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));
  
//   function createData(
//     stt: number,
//     bookingcode: string,
//     numberticket: string,
//     nameevent: string,
//     statususe: 'used' | 'notuse' | 'expires',
//     dateuse: string,
//     daterelease: string,
//     portcheckin: string,
//   ) {
//     return { stt, bookingcode, numberticket, nameevent, statususe, dateuse, daterelease, portcheckin };
//   }
  
//   const rows = [
//     createData(1, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(2, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(3, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(4, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(5, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(6, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(7, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(8, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(9, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(10, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(11, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(12, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(1, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(2, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(3, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(4, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(5, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(6, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(7, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(8, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(9, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(10, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(11, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//     createData(12, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
//   ];

//   function CheckStatus(status: string) {
//     switch (status) {
//       case 'used':
//         return <div className="statususe used">
//           <p className="status_dot"></p>
//           <p className="status_text">
//             Đã sử dụng
//           </p>
//         </div>
//       case 'notuse':
//         return <div className="statususe notuse">
//           <p className="status_dot"></p>
//           <p className="status_text">
//             Chưa sử dụng
//           </p>
//         </div>
//       case 'expires':
//         return <div className="statususe expires">
//           <p className="status_dot"></p>
//           <p className="status_text">
//             Hết hạn
//           </p>
//         </div>
//     }
//   }

//   const customRowHeaderStyle = 
//   { 
//     lineHeight: '19px', 
//     padding: 8, 
//     fontSize: 11, 
//     backgroundColor: "#F1F4F8", 
//     color: "#1E0D03",
//     fontWeight: 700, 
//     border: 'unset',
//   };

//   const customRowBodyStyle = 
//   {
//     paddingTop: 4, 
//     paddingBottom: 4,
//     border: 'unset',
//   };


//   export default function CustomizedTables() {

//     const [page, setPage] = React.useState(2);
//     const [rowsPerPage, setRowsPerPage] = React.useState(10);

//     const handleChangePage = ({event, newPage}: any) => {
//       setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event: any) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       setPage(0);
//     };

//     return (<>
    
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }}  aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell style={customRowHeaderStyle} align="center">STT</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Booking code</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Số vé</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Tên sự kiện</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Tình trạng sử dụng</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Ngày sử dụng</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Ngày xuất vé</StyledTableCell>
//               <StyledTableCell style={customRowHeaderStyle} align="left">Cổng check - in</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <StyledTableRow key={row.stt}>
//                 <StyledTableCell style={customRowBodyStyle} align="center" component="th" scope="row">
//                   {row.stt}
//                 </StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="left">{row.bookingcode}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="left">{row.numberticket}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="left">{row.nameevent}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="left">{CheckStatus(row.statususe)}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="right">{row.dateuse}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="right">{row.daterelease}</StyledTableCell>
//                 <StyledTableCell style={customRowBodyStyle} align="left">{row.portcheckin}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               {/* <StyledTableCell colSpan={8} style={{...customRowBodyStyle}}>
//                 <Stack spacing={2}>
//                   <Pagination count={rows.length/3} variant="outlined" shape="rounded" color={'secondary'}/>
//                 </Stack>
//               </StyledTableCell> */}
//               <StyledTableCell colSpan={8} style={{...customRowBodyStyle}}>
//                 <Stack spacing={2}>
//                   <TablePagination
//                     component="div"
//                     count={100}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     rowsPerPage={rowsPerPage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                   />
//                 </Stack>
//               </StyledTableCell>
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//     </>);
//   }


import { useState, useEffect, useLayoutEffect } from 'react'
import { Table, Tag, Space, Row } from 'antd';
// import { SearchProps } from 'antd/lib/input';
import { useSelector } from 'react-redux';
import { Tab } from 'src/redux/actions/Tab';
import { searchNumberTicket } from 'src/redux/actions/searchTicket';
import { useDispatch } from 'react-redux';
// import { any, string } from 'prop-types';
import './ContentTableData.css';
// import { object } from 'prop-types';

// Data && Column
import { dataEvents, columnsEvents } from '../../../Data/DataEvent';
import { dataFamilys, columnsFamilys } from '../../../Data/DataFamily';



const tabPakageTickets = ['Gói gia đình', 'Gói sự kiện'];

function createData(
      stt: number,
      bookingcode: string,
      numberticket: string,
      nameevent: string,
      statususe: 'used' | 'notuse' | 'expires',
      dateuse: string,
      daterelease: string,
      portcheckin: string,
    ) {
      return { stt,
         bookingcode,
         numberticket,
         nameevent,
         statususe,
         dateuse,
         daterelease,
         portcheckin
       };
    }
    
    // const dataEvents = [
    //   createData(1, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(2, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(3, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(4, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(5, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(6, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(7, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(8, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(9, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(10, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(11, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(12, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(13, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(14, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(15, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(16, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(17, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(18, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(19, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(20, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(21, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(22, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(23, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(24, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 5' ),
    //   createData(25, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(26, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(27, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(28, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(29, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(30, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(31, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(32, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(33, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(34, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(35, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 4' ),
    //   createData(36, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(37, 'ATL20210501', '123456789034', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(38, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(39, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(40, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(41, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(42, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(43, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(44, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(45, 'ATL20210501', '123456789045', 'Hội chợ triển lãm tiêu dùng 2021', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    // ];

    // const dataFamily = [
    //   createData(1, 'ATL20210501', '123456789034', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(2, 'ATL20210501', '123456789045', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(3, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(4, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(5, 'ATL20210501', '123456789045', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(6, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(7, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(8, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(9, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(10, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(11, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(12, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(13, 'ATL20210501', '123456789034', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(14, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(15, 'ATL20210501', '123456789045', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(16, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(17, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(18, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(19, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(20, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(21, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(22, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(23, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(24, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 5' ),
    //   createData(25, 'ATL20210501', '123456789034', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(26, 'ATL20210501', '123456789045', '', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(27, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(28, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(29, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(30, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(31, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(32, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
    //   createData(33, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(34, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(35, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 4' ),
    //   createData(36, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(37, 'ATL20210501', '123456789034', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
    //   createData(38, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(39, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(40, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(41, 'ATL20210501', '123456789045', '', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(42, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(43, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(44, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    //   createData(45, 'ATL20210501', '123456789045', '', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
    // ];

export let dataTicket:any
export let columnTicket: any

function itemRender(current: any, type: string, originalElement: any) {
  if (type === 'prev') {
    return (
      <a style={{
        fontSize: 16, 
        fontWeight: 900,
      }}>
        <i className="fas fa-caret-left"></i>
      </a>
    );
  }
  if (type === 'next') {
    return (
      <a style={{fontSize: 16, fontWeight: 900}}>
        <i className="fas fa-caret-right"></i>
      </a>
      
    );
  }
  return originalElement;
}

type dataprop ={
  dataprop?: any,
  columnprop?: any,
}

export const TableData = ({ dataprop, columnprop }: dataprop) => {
  
  const data = useSelector((state: any) => state.search.list)
  const type = useSelector((state: any) => state.tab)
  
  const [dataset, setDataset] = useState([{}])
  const [columnset, setColumnset] = useState([{}])
  const dispatch = useDispatch();

  // let dataset:any;

  const handleSetType = (e: any) => {
    let tab:any = e.target.name;
    const actionTab = Tab(tab);
    dispatch(actionTab);

    let dataTable: any;
    if(tab == 'Gói gia đình'){
      dataTable= []
      dataTable= [...dataFamilys]
    }
    if(tab == 'Gói sự kiện'){
      dataTable= []
      dataTable= [...dataEvents]
    }
    const action = searchNumberTicket(dataTable);
    dispatch(action);
    
  }
  
  useEffect(()=>{
    if(type == 'Gói gia đình'){
      setDataset([...dataFamilys])
      setColumnset([...columnsFamilys])
    }
    if(type == 'Gói sự kiện'){
      setDataset([...dataEvents])
      setColumnset([...columnsEvents])
    }
  },[type])
  dataTicket=[]
  dataTicket=[...dataset]

  columnTicket=[]
  columnTicket=[...columnset]


  return(<>
    <div className="container-tab">
      {tabPakageTickets.map(tab=>(
        <button 
          key={tab}
          name={tab}
          style={type == tab? {
            color: '#FF993C',
            borderBottom: '2px solid #FF993C',
          } :{}}
          onClick={handleSetType}
          className='button-ticket-tran'
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="table-data" style={{flex: 1}}>
      <Table
        dataSource={dataprop || data}
        columns={columnprop || columnset}
        pagination={{
          pageSize: 12,
          style: {
            justifyContent: 'center', color: '#FF993C'
          },
          itemRender: itemRender,
        }}
        size='small'
      >
      </Table>
    </div>
  </>

  )
}