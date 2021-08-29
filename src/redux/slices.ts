import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Game {
  type: "game";
  customerChoice: string;
}

const initialState: Game = String(localStorage.getItem("game")).includes("type")
  ? JSON.parse(String(localStorage.getItem("game")))
  : {
      type: "game",
      customerChoice: "",
    };

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setCustomerChoice: (state, action: PayloadAction<{ value: string }>) => {
      state.customerChoice = action.payload.value;
    },
  },
});

export const { setCustomerChoice } = gameSlice.actions;
