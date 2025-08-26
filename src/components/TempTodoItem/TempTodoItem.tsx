import React from 'react';
import '../../styles/todo.scss';
import { Todo } from '../../types/Todo';
import cn from 'classnames';
import { TodoLoader } from '../Loader/TodoLoader';

type Props = {
  tempTodo: Omit<Todo, 'userId'>;
  isLoadingSpinner: boolean;
};

export const TempTodoItem: React.FC<Props> = ({
  tempTodo,
  isLoadingSpinner,
}) => {
  // const isNewTodo = lastNewTodoId === todo.id;
  const isNewTodo = true;

  return (
    <>
      <div
        data-cy="Todo"
        className={cn('todo', { completed: tempTodo.completed === true })}
      >
        <label htmlFor={`${tempTodo.id}`} className="todo__status-label">
          <input
            id={`${tempTodo.id}`}
            data-cy="TodoStatus"
            type="checkbox"
            className="todo__status"
            checked={tempTodo.completed}
            onChange={() => {}}
          />
        </label>

        <span data-cy="TodoTitle" className="todo__title">
          {tempTodo.title}
        </span>

        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          onClick={() => {}}
        >
          ×
        </button>

        <div
          data-cy="TodoLoader"
          className={cn('modal', 'overlay', {
            'is-active': isLoadingSpinner && tempTodo,
          })}
        >
          <div className="modal-background has-background-white-ter" />
          <div className="loader" />
        </div>
      </div>
    </>
  );
};
