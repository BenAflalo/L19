import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//* מצב התחלתי של הסלייס, מתאר את מצב הרישום הראשוני
const initialState = {
  count: 0,
}

//* יצירת סלייס עבור מונה, עם מצב התחלתי ורדיוסרים
const counterSlice = createSlice({
  name: "counter", //? שם הסלייס, משמש לזיהוי
  initialState, //? המצב ההתחלתי שהגדרנו למעלה
  //? רדיוסרים (פונקציות שמעדכנות את המצב)
  reducers: {
    increment(state, action) {
      //! רדוסרס לא משנים את הסטייט ישירות אפילו שככה זה נראה!
      //! במקום לשנות את הסטייט באופן ישיר, רידקס טולקיט יוצרת העתק של כל הסטייט ומעדכנת אותו מאחורי הקלעים.
      state.count += 1
    },
    decrement(state, action) {
      state.count -= 1
    },
    incrementByAmount(state, action) {
      state.count += action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(incrementAsync.pending, (state) => {
        console.log("incrementAsync.pending")
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        console.log("incrementAsync.rejected", action.error)
      })
  },
})

//* דוגמא לפעולה אסינכרונית
//? נצטרך לייבא את הפונקציה createAsyncThunk
//? מקבלת 2 פרמטרים - הראשון הוא סוג הפעולה
//? רידקס טולקיט מייצרת את הסוג באופן דיפולטיבי למעלה
//? example: counter/increment
//? כשעובדים אסינכרונית, נצטרך להגדיר את סוג הפעולה בעצמנו

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount) => {
    // throw new Error("My error!")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
