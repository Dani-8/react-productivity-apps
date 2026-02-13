import TodoItem from './TodoItem';
import EmptyState from './EmptyState';

export default function TodoList({
    todos, editingId, editText, setEditText,
    onToggle, onDelete, onStartEdit, onSaveEdit, onCancelEdit }) {


    if (todos.length === 0) return <EmptyState />

    return (
        <div className="space-y-3">
            {todos.map(todo => (
                <TodoItem
                    key= {todo.id}
                    todo= {todo}
                    isEditing={editingId === todo.id}
                    editText={editText}
                    setEditText={setEditText}

                    onToggle={() => onToggle(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onStartEdit={() => onStartEdit(todo)}
                    onSaveEdit={() => onSaveEdit(todo.id)}
                    onCancelEdit={onCancelEdit}
                />
            ))}
        </div>
    )
}