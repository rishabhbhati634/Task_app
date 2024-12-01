'use client'

import { useState } from 'react'
import TaskList from '../components/TaskList'
import Timer from '../components/Timer'
import NoteArea from '../components/NoteArea'

export interface Task {
  id: string
  title: string
  completed: boolean
}

export default function ProductivityApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [note, setNote] = useState('')

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Productivity App</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <TaskList 
                tasks={tasks} 
                addTask={addTask} 
                toggleTask={toggleTask} 
                removeTask={removeTask}
                setActiveTask={setActiveTask}
              />
            </div>
            <div>
              <Timer activeTask={activeTask} />
              <NoteArea note={note} setNote={setNote} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

