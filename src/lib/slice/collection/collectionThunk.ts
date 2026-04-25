import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICollection } from './CollectionType';

const API_URL = '/api/collections';

export const getAllCollection = createAsyncThunk(
  'collection/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch collections');
      return (await response.json()) as ICollection[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCollectionById = createAsyncThunk(
  'collection/fetchById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch collection');
      return (await response.json()) as ICollection;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createCollection = createAsyncThunk(
  'collection/create',
  async (collection: ICollection, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collection),
      });
      if (!response.ok) throw new Error('Failed to create collection');
      return (await response.json()) as ICollection;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCollection = createAsyncThunk(
  'collection/update',
  async ({ id, data }: { id: string; data: Partial<ICollection> }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to update collection');
      return (await response.json()) as ICollection;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCollection = createAsyncThunk(
  'collection/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete collection');
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
