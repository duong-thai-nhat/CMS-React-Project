import { TableData } from '../Content-table-data/ContentTableData';
import { FilterTicket } from '../../FilterTicket/FilterTicket';

function createData(
    stt: number,
    numberticket: string,
    dateuse: string,
    nametypeticket: string,
    portcheckin: string,
    statusticket: string,
  ) {
    return {
        stt,
        numberticket,
        dateuse,
        nametypeticket,
        portcheckin,
        statusticket,
     };
  }
  
  const data = [
    createData(1, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(2, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(3, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(4, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(5, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'notchecked' ),
    createData(6, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(7, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(8, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(9, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(10, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'notchecked' ),
    createData(11, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(12, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(13, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(14, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'notchecked' ),
    createData(15, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(16, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    createData(17, 'ATL20210501', '14/04/2021', 'Vé cổng', 'Cổng 1', 'checked' ),
    
  ];
  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'key'
    },
    {
      title: 'Số vé',
      dataIndex: 'numberticket',
      key: 'key'
    },
    {
      title: 'Ngày sử dụng',
      dataIndex: 'dateuse',
      key: 'key'
    },
    {
      title: 'Tên vé',
      dataIndex: 'nametypeticket',
      key: 'key',
      
    },
    {
      title: 'Cổng check - in',
      dataIndex: 'portcheckin',
      key: 'key'
    },
    {
      dataIndex: 'statusticket',
      key: 'key',
      render: (text: any) =>{
        switch (text) {
          case 'checked':
            return (<i>Đã đổi soát</i>)
          case 'notchecked':
            return (<i>Chưa đổi soát</i>)
        }
     }
    }
  ]

const CheckTicket = () => {
  return <div style={{display: 'flex'}}>
      <TableData dataprop={data} columnprop={columns}></TableData>
      <div className="modal-filter" style={{
          position: 'unset',
          transform: 'unset',
          width: '320px',
      }}>
            <h2 className="content-modal-filter-heading" style={{
                textAlign: 'left',
            }}>Lọc vé</h2>
            <div className="modal-filter-content">
                <div className="modal-filter-status" style={{display: 'flex'}}>
                    <h2 className="modal-filter-status-heading" style={{flex: 1}}>Tình trạng đối soát</h2>
                    <div className="modal-filter-status-radio-select" style={{display: 'block', flex: 1}}>
                        <div className="modal-filter-status-radio-container">
                            <input type="radio" name="radio" id="all" className="modal-filter-status-radio" />
                            <label className='modal-filter-status-label' htmlFor="all">Tất cả</label>
                        </div>
                        <div className="modal-filter-status-radio-container">
                            <input type="radio" name="radio" id="used" className="modal-filter-status-radio" />
                            <label className='modal-filter-status-label' htmlFor="used">Đã đối soát</label>
                        </div>
                        <div className="modal-filter-status-radio-container">
                            <input type="radio" name="radio" id="notuse" className="modal-filter-status-radio" />
                            <label className='modal-filter-status-label' htmlFor="notuse">Chưa đối soát</label>
                        </div>
                    </div>
                </div>
                <div className="" style={{display: 'flex', textAlign: 'left'}}><h3 style={{flex: 1}}>Loại vé</h3><p style={{flex: 1}}>Vé cổng</p></div>
                <div className="modal-filter-date" style={{display: 'block'}}>
                    <div className="modal-filter-date-from" style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                        <h2 className="modal-filter-date-from-text" style={{flex: 1, textAlign: 'left'}}>Từ ngày</h2>
                        <div className="modal-filter-date-from-select" style={{flex: 1}}>
                            <input className='modal-filter-date-from-input' type="text" value={'12/12/2022'} disabled/>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
                            </svg>
                        </div>
                    </div>
                    <div className="modal-filter-date-to" style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                        <h2 className="modal-filter-date-to-text" style={{flex: 1, textAlign: 'left'}}>Đến ngày</h2>
                        <div className="modal-filter-date-to-select" style={{flex: 1}}>
                            <input className='modal-filter-date-to-input' type="text" value={'12/12/2022'} disabled/>
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="#FF993C"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <button className="modal-filter-button">Lọc</button>
            </div>
      </div>
  </div>;
};

export default CheckTicket;
