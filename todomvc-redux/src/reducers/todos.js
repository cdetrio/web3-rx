import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED, SET_STATE } from '../constants/ActionTypes'


const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]


export default function todos(state = initialState, action) {
  switch (action.type) {

    case SET_STATE:
      console.log('SET_STATE action:', action);
      console.log('SET_STATE state:', state);
      //return state;
      return action.state;

    case ADD_TODO:
      window.TodosInstance.addTask(action.text,
        {value: 0, gas: 2000000},
        function(err, result) {
          console.log('ADD_TODO TodosInstance.addTask err:', err);
          console.log('ADD_TODO TodosInstance.addTask result:', result);
      });
      /*
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
      */
      return state;

    case DELETE_TODO:
      window.TodosInstance.deleteTask(action.id,
        {value: 0, gas: 2000000},
        function(err, result) {
          console.log('DELETE_TODO TodosInstance.deleteTask err:', err);
          console.log('DELETE_TODO TodosInstance.deleteTask result:', result);
      });
      /*
      return state.filter(todo =>
        todo.id !== action.id
      )
      */
      return state;

    case EDIT_TODO:
      console.log('EDIT_TODO action:', action);
      /*
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )
      */
      window.TodosInstance.editTaskTitle(action.id, action.text,
        {value: 0, gas: 2000000},
        function(err, result) {
          console.log('EDIT_TODO TodosInstance.editTaskTitle err:', err);
          console.log('EDIT_TODO TodosInstance.editTaskTitle result:', result);
      });
      return state;

    case COMPLETE_TODO:
      console.log('COMPLETE_TODO action:', action);
      window.TodosInstance.setTaskCompleted(action.id, action.completed,
        {value: 0, gas: 2000000},
        function(err, result) {
          console.log('COMPLETE_TODO TodosInstance.setTaskCompleted err:', err);
          console.log('COMPLETE_TODO TodosInstance.setTaskCompleted result:', result);
      });
      /*
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )
      */
      return state;

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    case CLEAR_COMPLETED:
      console.log('CLEAR_COMPLETED');
      //return state.filter(todo => todo.completed === false)
      state.filter(todo => todo.completed === true).forEach(todo => {
        console.log('clearCompleted todo:', todo);
        window.TodosInstance.deleteTask(todo.id,
          {value: 0, gas: 2000000},
          function(err, result) {
            console.log('CLEAR_COMPLETED TodosInstance.deleteTask err:', err);
            console.log('CLEAR_COMPLETED TodosInstance.deleteTask result:', result);
        });
      });
      //const completed_todos = state.filter(todo => todo.completed === true);
      //completed_todos

      return state;

    default:
      return state
  }
}
