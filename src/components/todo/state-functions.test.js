import { toggleDone, addTodo } from './state-functions';

describe('Tests toggleDone', () => {
    describe('when given an incomplete todo', () => {
       it('marks the todo as complete', () => {
           const startState = {
               todos: [{id: 1, done: false, name: 'write some code'}]
           };
           const finishedState = toggleDone(startState, 1);

           expect(finishedState.todos).toEqual([{id: 1, done: true, name: 'write some code'}])
       });

       it('add a todo', () => {
        const startState = {
               todos: []
            };
        const newTodo = {name: 'write some code2'};
        const finishedState = addTodo(startState, newTodo);
        expect(finishedState.todos).toHaveLength(1);
        expect(finishedState.todos[0]).toHaveProperty('id');

    }) 

    });
});

describe('Test addTodo', () => {
    describe('when given a new todo', () => {
       it('add a new todo to the list', () => {
            const startState = {
                todos: []
                };
            const newTodo = {name: 'write some code2'};
            const finishedState = addTodo(startState, newTodo);
            expect(finishedState.todos).toHaveLength(1);
            expect(finishedState.todos[0]).toHaveProperty('id');
            expect(finishedState.todos[0].name).toEqual('write some code2');
            expect(finishedState.todos[0].done).toBeFalsy();
        }) 
    });
});