interface CoverageGroup {
  title: string;
  covered: string[];
  excluded: string[];
  fullWidth?: boolean;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
  coverageGroups: CoverageGroup[];
  setCoverageGroups: React.Dispatch<React.SetStateAction<CoverageGroup[]>>;
}

export default function CoverageEditor({
  form,
  updateField,
  coverageGroups,
  setCoverageGroups,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Coverage Section</h2>

      <input
        value={form.coverageSectionLabel}
        onChange={(e) => updateField("coverageSectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.coverageHeading}
        onChange={(e) => updateField("coverageHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.coverageSubheading}
        onChange={(e) => updateField("coverageSubheading", e.target.value)}
        placeholder="Subheading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.coverageIntro1}
        onChange={(e) => updateField("coverageIntro1", e.target.value)}
        placeholder="Intro 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.coverageIntro2}
        onChange={(e) => updateField("coverageIntro2", e.target.value)}
        placeholder="Intro 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <h3 className="text-lg font-bold text-[#0F2240]">Coverage Groups</h3>

      {coverageGroups.map((group, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <input
            value={group.title}
            onChange={(e) => {
              const updated = [...coverageGroups];
              updated[index].title = e.target.value;
              setCoverageGroups(updated);
            }}
            placeholder="Coverage title"
            className="w-full border rounded-xl px-4 py-3"
          />

          <label className="flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={group.fullWidth || false}
              onChange={(e) => {
                const updated = [...coverageGroups];
                updated[index].fullWidth = e.target.checked;
                setCoverageGroups(updated);
              }}
            />
            Full width card
          </label>

          <h4 className="font-semibold text-emerald-700">Covered Items</h4>

          {group.covered.map((item, coveredIndex) => (
            <div key={coveredIndex} className="flex gap-3">
              <input
                value={item}
                onChange={(e) => {
                  const updated = [...coverageGroups];
                  updated[index].covered[coveredIndex] = e.target.value;
                  setCoverageGroups(updated);
                }}
                placeholder="Covered item"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() => {
                  const updated = [...coverageGroups];
                  updated[index].covered = updated[index].covered.filter(
                    (_, i) => i !== coveredIndex,
                  );
                  setCoverageGroups(updated);
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
              const updated = [...coverageGroups];
              updated[index].covered = [...updated[index].covered, ""];
              setCoverageGroups(updated);
            }}
            className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
          >
            + Add Covered Item
          </button>

          <h4 className="font-semibold text-red-700">Excluded Items</h4>

          {group.excluded.map((item, excludedIndex) => (
            <div key={excludedIndex} className="flex gap-3">
              <input
                value={item}
                onChange={(e) => {
                  const updated = [...coverageGroups];
                  updated[index].excluded[excludedIndex] = e.target.value;
                  setCoverageGroups(updated);
                }}
                placeholder="Excluded item"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() => {
                  const updated = [...coverageGroups];
                  updated[index].excluded = updated[index].excluded.filter(
                    (_, i) => i !== excludedIndex,
                  );
                  setCoverageGroups(updated);
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
              const updated = [...coverageGroups];
              updated[index].excluded = [...updated[index].excluded, ""];
              setCoverageGroups(updated);
            }}
            className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
          >
            + Add Excluded Item
          </button>

          <button
            type="button"
            onClick={() =>
              setCoverageGroups(coverageGroups.filter((_, i) => i !== index))
            }
            className="text-red-600 text-sm font-semibold"
          >
            Remove Coverage Group
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setCoverageGroups([
            ...coverageGroups,
            {
              title: "",
              covered: [],
              excluded: [],
              fullWidth: false,
            },
          ])
        }
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add Coverage Group
      </button>

      <textarea
        value={form.coverageNote1}
        onChange={(e) => updateField("coverageNote1", e.target.value)}
        placeholder="Note 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.coverageNote2}
        onChange={(e) => updateField("coverageNote2", e.target.value)}
        placeholder="Note 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
