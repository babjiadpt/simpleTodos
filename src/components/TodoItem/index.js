// Write your code here
import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {eachTodoItem, deleteTodoItem} = this.props
    const {title, id} = eachTodoItem

    const onDeleteTodo = () => {
      deleteTodoItem(id)
    }

    return (
      <li className="todo-item-container">
        <p className="todo-item-title">{title}</p>
        <div>
          <button
            type="button"
            className="todo-item-button"
            onClick={onDeleteTodo}
          >
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
