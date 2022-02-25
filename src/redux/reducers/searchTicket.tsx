import { dataTicket } from "../../Component/Content/Content-table-data/ContentTableData";
import { dataEvents } from "src/Data/DataEvent";
import { dataFamilys } from "src/Data/DataFamily";
import { useSelector } from 'react-redux';

let Type: any = ()=>{
  let type = useSelector((state: any) => state.tab)
  return type;
}

const initialState = {
    // list: [...(Type == 'Gói gia đình'? dataFamilys: dataEvents)],
    list: [...dataFamilys],
    activeId: null,
}

const searchTicketReducer = (state: any = initialState, action: any) => {
  switch (action.type){
    case 'CLICK_SEARCH': {
        const newData = [...action.payload]
        return {
          ...state,
          list: newData
        }
    }

    default:
        return state;
  }
};

export default searchTicketReducer;
