import { createSlice } from "@reduxjs/toolkit";

type task =  {
  id:Number,
  text : String
}

const initialState = {
  tasks: <task[]>[{
    id:2,
    text:"Asd"
  }] ,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;