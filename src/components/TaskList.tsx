import { useState } from 'react'
import { Task } from '../page'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { X } from 'lucide-react'

interface TaskListProps {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
  setActiveTask: (task: Task) => void
}

export default function TaskList({ tasks, addTask, toggleTask, removeTask, setActiveTask }: TaskListProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle.trim())
      setNewTaskTitle('')
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <form onSubmit={handleAddTask} className="flex mb-4">
        <Input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task"
          className="mr-2"
        />
        <Button type="submit">Add</Button>
      </form>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            <div className="flex items-center">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
                className="mr-2"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
            </div>
            <div>
              <Button variant="ghost" size="sm" onClick={() => setActiveTask(task)} className="mr-2">
                Start
              </Button>
              <Button variant="ghost" size="icon" onClick={() => removeTask(task.id)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

