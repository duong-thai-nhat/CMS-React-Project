function createData(
    stt: number,
    bookingcode: string,
    numberticket: string,
    statususe: 'used' | 'notuse' | 'expires',
    dateuse: string,
    daterelease: string,
    portcheckin: string,
  ) {
    return { stt,
       bookingcode,
       numberticket,
       statususe,
       dateuse,
       daterelease,
       portcheckin
     };
  }

export const dataFamilys = [
  createData(1, 'ATL20210501', '123456789034', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(2, 'ATL20210501', '123456789045', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(3, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(4, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(5, 'ATL20210501', '123456789045', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(6, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(7, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(8, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(9, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 2' ),
  createData(10, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(11, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(12, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(13, 'ATL20210501', '123456789034', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(14, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(15, 'ATL20210501', '123456789045', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(16, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(17, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(18, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(19, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(20, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(21, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(22, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
  createData(23, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(24, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 5' ),
  createData(25, 'ATL20210501', '123456789034', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(26, 'ATL20210501', '123456789045', 'notuse', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(27, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
  createData(28, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(29, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
  createData(30, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(31, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(32, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 3' ),
  createData(33, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(34, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(35, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 4' ),
  createData(36, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(37, 'ATL20210501', '123456789034', 'expires', '14/04/2021', '14/04/2021', 'Cổng 2' ),
  createData(38, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(39, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(40, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(41, 'ATL20210501', '123456789045', 'used', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(42, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(43, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(44, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
  createData(45, 'ATL20210501', '123456789045', 'expires', '14/04/2021', '14/04/2021', 'Cổng 1' ),
];

export const columnsFamilys = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'key'
  },
  {
    title: 'Booking code',
    dataIndex: 'bookingcode',
    key: 'key'
  },
  {
    title: 'Số vé',
    dataIndex: 'numberticket',
    key: 'key'
  },
  {
    title: 'Tình trạng sử dụng',
    dataIndex: 'statususe',
    key: 'key',
    render: (text: any) =>{
      switch (text) {
        case 'used':
          return (<div className="statususe used">
            <p className="status_dot"></p>
            <p className="status_text">
              Đã sử dụng
            </p>
          </div>)
        case 'notuse':
          return (<div className="statususe notuse">
            <p className="status_dot"></p>
            <p className="status_text">
              Chưa sử dụng
            </p>
          </div>)
        case 'expires':
          return (<div className="statususe expires">
            <p className="status_dot"></p>
            <p className="status_text">
              Hết hạn
            </p>
          </div>)
      }
   }
  },
  {
    title: 'Ngày sử dụng',
    dataIndex: 'dateuse',
    key: 'key'
  },
  {
    title: 'Ngày xuất vé',
    dataIndex: 'daterelease',
    key: 'key'
  },
  {
    title: 'Cổng check - in',
    dataIndex: 'portcheckin',
    key: 'key'
  },
]