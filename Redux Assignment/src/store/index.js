import { configureStore, createSlice } from '@reduxjs/toolkit';

// Counter Slice
const counterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter += 5;
    },
    decrement(state) {
      state.counter -= 5;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// Auth Slice
const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

// Configure Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;