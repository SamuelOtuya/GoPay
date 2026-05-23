interface SegmentRow {
  segment: string;
  who: string;
  why: string;
  risk: string;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
  segments: SegmentRow[];
  setSegments: React.Dispatch<React.SetStateAction<SegmentRow[]>>;
}

export default function WhoNeedsItEditor({
  form,
  updateField,
  segments,
  setSegments,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Who Needs It Section</h2>

      <input
        value={form.whoSectionLabel}
        onChange={(e) => updateField("whoSectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whoHeading}
        onChange={(e) => updateField("whoHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whoIntro}
        onChange={(e) => updateField("whoIntro", e.target.value)}
        placeholder="Intro"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <h3 className="text-lg font-bold text-[#0F2240]">Customer Segments</h3>

      {segments.map((row, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <input
            value={row.segment}
            onChange={(e) => {
              const updated = [...segments];
              updated[index].segment = e.target.value;
              setSegments(updated);
            }}
            placeholder="Customer segment"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={row.who}
            onChange={(e) => {
              const updated = [...segments];
              updated[index].who = e.target.value;
              setSegments(updated);
            }}
            placeholder="Who they are"
            rows={2}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={row.why}
            onChange={(e) => {
              const updated = [...segments];
              updated[index].why = e.target.value;
              setSegments(updated);
            }}
            placeholder="Why they need it"
            rows={2}
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={row.risk}
            onChange={(e) => {
              const updated = [...segments];
              updated[index].risk = e.target.value;
              setSegments(updated);
            }}
            placeholder="Key risk exposure"
            rows={2}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() => setSegments(segments.filter((_, i) => i !== index))}
            className="text-red-600 text-sm font-semibold"
          >
            Remove Segment
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setSegments([
            ...segments,
            {
              segment: "",
              who: "",
              why: "",
              risk: "",
            },
          ])
        }
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add Segment
      </button>
    </>
  );
}
