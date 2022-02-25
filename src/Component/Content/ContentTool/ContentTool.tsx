import './ContentTool.css'
import { FilterTicket } from "../../FilterTicket/FilterTicket";
import Popup from "reactjs-popup";
import { useRef } from 'react';
import { dataTicket } from '../Content-table-data/ContentTableData';
import { searchNumberTicket } from 'src/redux/actions/searchTicket';
import { useDispatch } from 'react-redux';

export let popupRef: any

export const ContentTool = () => {
    const inputRef: any = useRef();
    popupRef = useRef();
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        const dataTable: any=[];
        const inputSearch = inputRef.current.value;
        inputRef.current.value= '';
        
        dataTicket.map((item:any)=>{
            if(item.numberticket.indexOf(inputSearch) != -1){
                dataTable.push(item);
            }
        })

        const action = searchNumberTicket(dataTable);
        dispatch(action);


        return 
    }

    return (
        <div className="content-tool">
            <div className="content-input-search">
                <input ref={inputRef} type="text" placeholder="Tìm bằng số vé" className="content-search"/>
                <svg className="content-search-icon" onClick={handleSearchClick} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.7067 22.2937L16.8818 15.4688C18.2038 13.8358 18.9998 11.7608 18.9998 9.50089C18.9998 4.26295 14.7378 0.000976562 9.49986 0.000976562C4.26192 0.000976562 0 4.2629 0 9.50084C0 14.7388 4.26197 19.0008 9.49991 19.0008C11.7599 19.0008 13.8349 18.2048 15.4678 16.8828L22.2928 23.7077C22.4878 23.9027 22.7437 24.0007 22.9998 24.0007C23.2558 24.0007 23.5118 23.9027 23.7068 23.7077C24.0978 23.3167 24.0978 22.6847 23.7067 22.2937ZM9.49991 17.0008C5.36394 17.0008 1.99999 13.6368 1.99999 9.50084C1.99999 5.36487 5.36394 2.00092 9.49991 2.00092C13.6359 2.00092 16.9998 5.36487 16.9998 9.50084C16.9998 13.6368 13.6358 17.0008 9.49991 17.0008Z" fill="#1E0D03"/>
                </svg>
            </div>
            <div className="content-filter-export">
                <Popup ref={popupRef} modal trigger={
                    <div className="content-filter-export-item content-filter">
                        <svg width="16" height="15" className='content-filter-icon' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z" stroke="#FF993C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="content-filter-export-text">Lọc vé</p>
                    </div>
                }>
                    {/* <div className="content-modal-filter-container"></div> */}
                    <FilterTicket></FilterTicket>
                </Popup>
                <div className="content-filter-export-item content-export">
                    <p className="content-filter-export-text">Xuất file (.csv)</p>
                </div>
            </div>
        </div>
    )
}