interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
}

export default function FinalCTAEditor({ form, updateField }: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Final CTA Section</h2>

      <input
        value={form.finalHeading}
        onChange={(e) => updateField("finalHeading", e.target.value)}
        placeholder="CTA heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.finalBody}
        onChange={(e) => updateField("finalBody", e.target.value)}
        placeholder="CTA body"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.finalPrimaryLabel}
        onChange={(e) => updateField("finalPrimaryLabel", e.target.value)}
        placeholder="Primary button label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.finalSecondaryLabel}
        onChange={(e) => updateField("finalSecondaryLabel", e.target.value)}
        placeholder="Secondary button label"
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
