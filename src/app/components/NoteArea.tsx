interface NoteAreaProps {
  note: string;
  setNote: (note: string) => void;
}

export default function NoteArea({ note, setNote }: NoteAreaProps) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-40 p-3 border rounded-lg"
        placeholder="Take notes here..."
      />
    </div>
  );
} 