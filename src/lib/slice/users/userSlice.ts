import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from './userThunk';
import { IUser } from './userType';

interface UserState {
  allUsers: IUser[];
  currentUser: IUser | null;
  isFetchedUsers: boolean;
  isLoading: boolean;
  isError: string | null;
}

const initialState: UserState = {
  allUsers: [],
  currentUser: null,
  isFetchedUsers: false,
  isLoading: false,
  isError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearCurrentUser: (state) => {
      state.currentUser = null;
    },
    clearUserError: (state) => {
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get All Users
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.allUsers = action.payload;
        state.isFetchedUsers = true;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Get Single User
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Create User
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.allUsers.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Update User
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        const index = state.allUsers.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.allUsers[index] = action.payload;
        }
        if (state.currentUser?.id === action.payload.id) {
          state.currentUser = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      })

      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.allUsers = state.allUsers.filter((u) => u.id !== action.payload);
        if (state.currentUser?.id === action.payload) {
          state.currentUser = null;
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export const { clearCurrentUser, clearUserError } = userSlice.actions;
export default userSlice.reducer;
