


const tab = (state: any = 'Gói gia đình', action: any) => {
    switch (action.type){
      case 'CLICK_TAB': {
          return action.payload;
      }
  
      default:
          return state;
    }
  };
  
  export default tab;