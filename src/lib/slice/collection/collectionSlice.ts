import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  getAllCollection,
  fetchCollectionById,
  createCollection,
  updateCollection,
  deleteCollection,
} from './collectionThunk';
import { ICollection } from './CollectionType';

interface CollectionState {
  allCollection: ICollection[];
  currentCollection: ICollection | null;
  isFetchedCollection: boolean;
  isLoading: boolean;
  isError: string | null;
  isAdding: boolean;
  editingId: string | null;
}

const initialState: CollectionState = {
  allCollection: [],
  currentCollection: null,
  isFetchedCollection: false,
  isLoading: false,
  isError: null,
  isAdding: false,
  editingId: null,
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    clearCurrentCollection: (state) => {
      state.currentCollection = null;
    },
    clearError: (state) => {
      state.isError = null;
    },
    setAdding: (state, action: PayloadAction<boolean>) => {
      state.isAdding = action.payload;
    },
    setCurrentCollection: (state, action: PayloadAction<ICollection|null>) => {
      state.currentCollection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All Collections
      .addCase(getAllCollection.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getAllCollection.fulfilled, (state, action: PayloadAction<ICollection[]>) => {
        state.isLoading = false;
        state.allCollection = action.payload;
        state.isFetchedCollection = true;
      })
      .addCase(getAllCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Get Single Collection
      .addCase(fetchCollectionById.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCollectionById.fulfilled, (state, action: PayloadAction<ICollection>) => {
        state.isLoading = false;
        state.currentCollection = action.payload;
      })
      .addCase(fetchCollectionById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Create Collection
      .addCase(createCollection.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createCollection.fulfilled, (state, action: PayloadAction<ICollection>) => {
        state.isLoading = false;
        state.allCollection.push(action.payload);
      })
      .addCase(createCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Update Collection
      .addCase(updateCollection.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateCollection.fulfilled, (state, action: PayloadAction< ICollection>) => {
        state.isLoading = false;
        const index = state.allCollection.findIndex((c) => c._id === action.payload._id);
        if (index !== -1) {
          state.allCollection[index] = action.payload;
        }
        if (state.currentCollection?._id === action.payload._id) {
          state.currentCollection = action.payload;
        }
      })
      .addCase(updateCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Delete Collection
      .addCase(deleteCollection.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteCollection.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.allCollection = state.allCollection.filter((c) => c._id !== action.payload);
        if (state.currentCollection?._id === action.payload) {
          state.currentCollection = null;
        }
      })
      .addCase(deleteCollection.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export const { clearCurrentCollection, clearError ,setAdding,setCurrentCollection} = collectionSlice.actions;
export default collectionSlice.reducer;
