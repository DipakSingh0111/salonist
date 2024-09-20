// const baseUrl = "https://salonistforcustomer.portfolioshowcase.in"
const BASE_URL = "https://salonist.io"

const MARKET_PLACE_URL = "/marketplaceapi";

const APIS_Links :any = {
    home: `${MARKET_PLACE_URL}/home`,
    signup: `${MARKET_PLACE_URL}/signup`,
    login: `${MARKET_PLACE_URL}/login`,
    salonDetail: `${MARKET_PLACE_URL}/detail_api`,
    getListing: `${MARKET_PLACE_URL}/getListing`,
    getServiceChild: `${MARKET_PLACE_URL}/getServiceChild`,
    bookingPageApi: `${MARKET_PLACE_URL}/bookingPageApi`,
    getRelatedSalons: `${MARKET_PLACE_URL}/getRelatedSalons`,
    getServiceStaff: `${MARKET_PLACE_URL}/getServiceStaff`,
    get_staff_time_availaibility: `${MARKET_PLACE_URL}/get_staff_time_availaibility_v2`,
    save_booking: `${MARKET_PLACE_URL}/save_booking`,
    
}

export default BASE_URL;
export const APIS = APIS_Links;
