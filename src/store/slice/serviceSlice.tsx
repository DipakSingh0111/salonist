import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Staff {
  id?: string;
  name?: string;
}

interface CartItem {
  cartType: string;
  id: string;
  name: string;
  qs_price: number;
  qs_qty: number;
  qs_total: number;
  staff?: Staff;
  staff_id?: string;
}

interface Tips {
  outsideLabel:string;
  insideLabel:string;
  tipsArray: [],
  tipsTotalAmount: 0,
  selectedPercentage: 0,
 selectedCustomTip: false
}

interface PaymentSources {
  allowPaymentDifferentSource:any,
  paymentSourcesArray: { amount: number }[];
}

interface TaxList {
  [key: string]: number;
}

interface State {
  isTouched: boolean;
  customer: { id: string; name: string; email: string; phone: string } | null;
  carts: CartItem[];
  selectedServiceIds: string[], // array  of service ids in carts store here also; instead of looping carts
  selectedStaffId:string, // update staff, after click on staff
  cartDiscount: number;
  tax_flat: TaxList;
  tax_per: TaxList;
  taxList: TaxList;
  tips: Tips;
  paymentSources: PaymentSources;
  saleNote:string |null;
  preTotalCal: number,  // total of all product, cart, service, membership
  subTotal: number,
  totalTax: number, // cummulative of taxList
  total: number,   ///  subTotal + tax
  tipAmount: number,
  paymentDifferentSource: number, // (pay from cash, card, up)
  payToAmount: number   

}

// Initial state
const initialState: State =  {
  isTouched:false,  // means if any data added/modify/delete means data is isTouched (true)
  customer: null,   // object -> id, name, email, phone

  /**
    array of object: 

   membership:
       cartType, id, name, qs_price, qs_qty , qs_total: price*qty, staff: {id, name}
   product:
       cartType, id, name, qs_price, qs_qty , qs_total: price*qty, staff: {id, name}
  

   */

  carts: [], 

  selectedServiceIds: [], // array  of service ids in carts store here also; instead of looping carts
  selectedStaffId: "", // update staff, after click on staff
  /**
    array of object: 
    
    staff: {id, name} , amount  

   */

  tips: {
        outsideLabel: "",
        insideLabel: "",
        tipsArray: [],
        tipsTotalAmount: 0,
        selectedPercentage: 0,
       selectedCustomTip: false
  },  
  saleNote: null,  // string or null
  preTotalCal: 0,  // total of all product, cart, service, membership
  cartDiscount:0,
  subTotal:0,  ///  preTotalCal - cartDiscount
  // tax:0,

  // add only flat tax here
  tax_flat: {
    // extraChargesTax: 0,
  },
  // add only per tax here
  tax_per:{
  // igst: 0,
  // cgst: 0,
  // sgst: 0,
  // service_tax: 0,
  // tax: 0
  },

  taxList: { //final tax with value (flat)
   
  },
  totalTax: 0, // cummulative of taxList
  total:0,   ///  subTotal + tax
  tipAmount:0,   // cumulate tip amount from tips array -> amount   

  /**
   * 
   * paymentSourcesArray: amount, paymentSourceName:
   * 
   */
  paymentSources: {
    allowPaymentDifferentSource: {},
    paymentSourcesArray: [],
},  
  paymentDifferentSource:0, // (pay from cash, card, up)
  payToAmount:0     // total + tips - paymentDifferentSource
};

// Function to calculate payment
function calculatePayment(state: State) {
  console.log("==calculatePayment:Start==");
  try {
    const preTotalCal = state.carts.reduce(
      (accumulator, currentValue) =>
        accumulator + parseFloat(currentValue.qs_total.toString() || "0"),
      0
    );

    const cartDiscount = state.cartDiscount;
    const subTotal = preTotalCal - cartDiscount;
    let totalTax = 0;
    const newTaxList: TaxList = {};

    // tax flat calculation
    for (const [taxField, taxValue] of Object.entries(state.tax_flat)) {
      let amt = parseFloat(taxValue?.toString() || "0");
      newTaxList[taxField] = amt;
      totalTax += amt;
    }

    // tax percentage calculation
    for (const [taxField, taxValue] of Object.entries(state.tax_per)) {
      const amt = parseFloat(taxValue?.toString() || "0");
      const fullAmount = parseFloat(((subTotal * amt) / 100).toFixed(2));
      newTaxList[taxField] = fullAmount;
      totalTax += fullAmount;
    }

    console.log(newTaxList);
    console.log("totalTax ======> ", totalTax);

    const total = subTotal + totalTax;

    const tipAmount = state.tips.tipsArray.reduce(
      (accumulator, currentValue:any) =>
        accumulator + parseFloat(currentValue.amount.toString() || "0"),
      0
    );
    const paymentDifferentSource =
      state.paymentSources.paymentSourcesArray.reduce(
        (accumulator, currentValue) =>
          accumulator + parseFloat(currentValue.amount.toString() || "0"),
        0
      );

    const payToAmount = total + tipAmount - paymentDifferentSource;

    // console.log("==calculatePayment:End==");

    return {
      preTotalCal,
      cartDiscount,
      subTotal,
      taxList: newTaxList,
      totalTax,
      total,
      tipAmount,
      paymentDifferentSource,
      payToAmount,
    };
  } catch (e: any) {
    console.error(e.message);
    return null;
  }
}

// Redux slice
const serviceSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    QS_ADD_ITEM_TO_CART: (
      state: State,
      action: PayloadAction<{ cart: CartItem }>
    ) => {
      console.log("=======QS_ADD_ITEM_TO_CART=======");
      let isNewRecord = true;
      const selectedServiceIds = [];
      // Find if the cart item already exists
      state.carts = state.carts.map((rec: any) => {
        if (
          rec.cartType === "PRODUCT" &&
          rec.cartType === action.payload.cart.cartType &&
          rec.id === action.payload.cart.id
        ) {
          isNewRecord = false;
          rec.qs_qty += 1;
          rec.qs_total = parseFloat((rec.qs_price * rec.qs_qty).toFixed(2));
        }

        selectedServiceIds.push(rec.id);

        if (rec.staff && rec.staff.id) {
          rec.staff_id = rec.staff.id;
        }

        return rec;
      });

      // If it's a new record, push it to the cart
      if (isNewRecord) {
        if (action.payload.cart?.staff && action.payload.cart?.staff.id) {
          action.payload.cart.staff_id = action.payload.cart.staff.id;
        }
        selectedServiceIds.push(action.payload.cart.id);
        state.carts.push(action.payload.cart);
      }

      console.log(action.payload.cart);
      console.log(state.carts);

      // Update state
      state.isTouched = true;
      state.selectedServiceIds = selectedServiceIds;

      console.log("newState");
      console.log(state);

      // Calculate payment
      const updatePayment = calculatePayment(state);
      if (updatePayment) {
        Object.assign(state, updatePayment);
      }

      console.log("state=========", state);

    },

    // DELETE ITEM TO CART
    QS_DELETE_ITEM_TO_CART: (state, action) => {

      // cartType, id
      console.log("=======QS_DELETE_ITEM_TO_CART=======", action);

      const updatedCarts = state.carts.filter((rec) => {
        return !(
          rec.cartType === action?.payload?.item?.cartType &&
          rec.id === action?.payload?.item?.id
        );
      });             

      const selectedServiceIds = updatedCarts.map(rec=>rec.id);
      console.log("selectedServiceIds");
      console.log(selectedServiceIds);
      console.log("selectedServiceIds");
      
      // state.selectedServiceIds = selectedServiceIds;

      const updatePayment = calculatePayment({
        ...state,
        carts: updatedCarts,
      });



      console.log("updatePayment=========", updatePayment);

      return {
        ...state,
        carts: updatedCarts,
        selectedServiceIds,
        isTouched: true,
        ...updatePayment,
      };
    },

    QS_UPDATE_STAFF_TO_CART: (state, action) => {

      // staffObj: {id:string, name:string }
      console.log("=======QS_UPDATE_STAFF_TO_CART=======", action);
      const {staffObj  } = action?.payload;
      const selectedStaffId_XXXX = staffObj?.id;
const {carts} = state;

      

      const updatedCarts = state.carts.map((rec) => {
         return {
          ...rec,                 // Spread the existing properties to maintain immutability
          staff: staffObj,        // Update the staff object
          staff_id: staffObj.id   // Update the staff ID
      };
      });    
      
      console.log("updatedCarts");
      console.log(updatedCarts);
      console.log("state");
      console.log(carts);
      console.log(state.carts);

      return {
        ...state,
        carts: updatedCarts,
        selectedStaffId: selectedStaffId_XXXX,
        isTouched: true
      };
    },
  },
});

export const { QS_ADD_ITEM_TO_CART, QS_DELETE_ITEM_TO_CART, QS_UPDATE_STAFF_TO_CART } =
  serviceSlice.actions;
export default serviceSlice.reducer;
