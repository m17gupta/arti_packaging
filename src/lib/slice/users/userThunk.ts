import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/types';

const API_URL = '/api/users';

export const getAllUsers = createAsyncThunk(
  'user/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch users');
      return (await response.json()) as User[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/getOne',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch user');
      return (await response.json()) as User;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  'user/create',
  async (user: User, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error('Failed to create user');
      return (await response.json()) as User;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',
  async ({ id, data }: { id: string; data: Partial<User> }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update user');
      return (await response.json()) as User;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete user');
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
