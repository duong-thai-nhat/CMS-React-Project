export const searchNumberTicket = (numberTicket: any) => {
    return {
        type: 'CLICK_SEARCH',
        payload: numberTicket,
    }
}