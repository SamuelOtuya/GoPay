import ImageUploadField from "../components/ImageUploadField";

interface RiskRow {
  img: string;
  stage: string;
  scenario: string;
  impact: string[];
  response: string;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
  riskRows: RiskRow[];
  setRiskRows: React.Dispatch<React.SetStateAction<RiskRow[]>>;
}

export default function RiskMapEditor({
  form,
  updateField,
  riskRows,
  setRiskRows,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Risk Map Section</h2>

      <input
        value={form.riskSectionLabel}
        onChange={(e) => updateField("riskSectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.riskHeading}
        onChange={(e) => updateField("riskHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.riskSubheading}
        onChange={(e) => updateField("riskSubheading", e.target.value)}
        placeholder="Subheading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.riskIntro1}
        onChange={(e) => updateField("riskIntro1", e.target.value)}
        placeholder="Intro 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.riskIntro2}
        onChange={(e) => updateField("riskIntro2", e.target.value)}
        placeholder="Intro 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <h3 className="text-lg font-bold text-[#0F2240]">Risk Rows</h3>

      {riskRows.map((row, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <ImageUploadField
            value={row.img}
            onChange={(url) => {
              const updated = [...riskRows];
              updated[index].img = url;
              setRiskRows(updated);
            }}
            folder="risk-images"
          />

          <input
            value={row.stage}
            onChange={(e) => {
              const updated = [...riskRows];
              updated[index].stage = e.target.value;
              setRiskRows(updated);
            }}
            placeholder="Risk stage"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={row.scenario}
            onChange={(e) => {
              const updated = [...riskRows];
              updated[index].scenario = e.target.value;
              setRiskRows(updated);
            }}
            placeholder="Scenario"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <h4 className="font-semibold text-[#0F2240]">Impact Items</h4>

          {row.impact.map((item, impactIndex) => (
            <div key={impactIndex} className="flex gap-3">
              <input
                value={item}
                onChange={(e) => {
                  const updated = [...riskRows];
                  updated[index].impact[impactIndex] = e.target.value;
                  setRiskRows(updated);
                }}
                placeholder="Impact item"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() => {
                  const updated = [...riskRows];
                  updated[index].impact = updated[index].impact.filter(
                    (_, i) => i !== impactIndex,
                  );
                  setRiskRows(updated);
                }}
                className="text-red-600 text-sm font-semibold"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              const updated = [...riskRows];
              updated[index].impact = [...updated[index].impact, ""];
              setRiskRows(updated);
            }}
            className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
          >
            + Add Impact
          </button>

          <textarea
            value={row.response}
            onChange={(e) => {
              const updated = [...riskRows];
              updated[index].response = e.target.value;
              setRiskRows(updated);
            }}
            placeholder="How insurance responds"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() => setRiskRows(riskRows.filter((_, i) => i !== index))}
            className="text-red-600 text-sm font-semibold"
          >
            Remove Risk Row
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setRiskRows([
            ...riskRows,
            {
              img: "",
              stage: "",
              scenario: "",
              impact: [],
              response: "",
            },
          ])
        }
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add Risk Row
      </button>

      <textarea
        value={form.riskClosing1}
        onChange={(e) => updateField("riskClosing1", e.target.value)}
        placeholder="Closing paragraph 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.riskClosing2}
        onChange={(e) => updateField("riskClosing2", e.target.value)}
        placeholder="Closing paragraph 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
