import { useState, useEffect } from 'react'
import { Task } from '../page'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TimerProps {
  activeTask: Task | null
}

export default function Timer({ activeTask }: TimerProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTime(0)
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Timer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-4">{formatTime(time)}</div>
        <div className="font-medium mb-4">
          {activeTask ? `Current Task: ${activeTask.title}` : 'No active task'}
        </div>
        <div className="flex space-x-2">
          <Button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Start'}</Button>
          <Button variant="outline" onClick={resetTimer}>Reset</Button>
        </div>
      </CardContent>
    </Card>
  )
}

