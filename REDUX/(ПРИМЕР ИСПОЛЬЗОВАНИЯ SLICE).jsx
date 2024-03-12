//* file: exampleSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    user: 'will track changes',
    ignoredPath: 'single level',
    ignoredNested: {
      one: 'one',
      two: 'two',
    },
  },
  reducers: {},
});

export default exampleSlice.reducer;

//* file: store.ts
import { configureStore, Tuple } from '@reduxjs/toolkit';
import exampleSliceReducer from './exampleSlice';

const store = configureStore({
  reducer: exampleSliceReducer,
});
