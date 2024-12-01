import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface NoteAreaProps {
  note: string
  setNote: (note: string) => void
}

export default function NoteArea({ note, setNote }: NoteAreaProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notes</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your notes here..."
          className="min-h-[200px]"
        />
      </CardContent>
    </Card>
  )
}

