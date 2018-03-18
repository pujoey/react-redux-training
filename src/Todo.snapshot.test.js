import Todo from './ToDo';
import renderer from 'react-test-renderer';
import React, { PureComponent } from 'react';

test('Todo component renders the todo correctly', () => {
    const todo = {id: 1, done: false, name: 'write more code'};
    const rendered = renderer.create(<Todo todo={todo} />);

    expect(rendered.toJSON()).toMatchSnapshot();
});