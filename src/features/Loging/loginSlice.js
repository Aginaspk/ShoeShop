import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import api from "../../../api/api";

const currentUser = JSON.parse(localStorage.getItem('useer')) || null;

const INITIAL_STATE = {
    selectLog: 'login',
    isAuthenticated: currentUser ? true : false,
    user: currentUser,
    users: [],
    status: 'idle',
    error: null,

}


export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        
        try {
            const response = await api.get('/users');
            const users = response.data;

            const matchedUser = users.find(
                user => user.email === email && user.password === password
            );
            console.log(matchedUser);
            

            if (matchedUser) {
                return {
                    id: matchedUser.id,
                    email: matchedUser.email,
                    role:matchedUser.role
                };
            } else {
                return rejectWithValue('Invalid username or password');
            }
        } catch (error) {
            return rejectWithValue('Failed to fetch users');
        }
    }
);





export const addUser = createAsyncThunk('loging/addUser',
    async (newUser, { rejectedWithValue }) => {
        try {

            const existingProducts = await api.get('/users');
            const nextId = existingProducts.data.length > 0
                ? Math.max(...existingProducts.data.map(p => p.id)) + 1
                : 1;


            const response = await api.post('/users', { ...newUser, id: nextId, role: 'user' });
            return response.data;
        } catch (error) {
            return rejectedWithValue(error.response.data)
        }
    }
);


const loginSlice = createSlice({
    name: 'loging',
    initialState: INITIAL_STATE,
    reducers: {
        setSelectLog: (state, action) => {
            state.selectLog = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('user'); 
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = 'fullfilled';
                state.users.push(action.payload);
            })
            .addCase(addUser.rejected, (state, action) => {
                state.status = "Rejected"
                state.error = action.payload;
            }).addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
                state.status = 'succeeded';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'failed';
            })
    }
})

export default loginSlice.reducer;
export const { setSelectLog,logout } = loginSlice.actions;