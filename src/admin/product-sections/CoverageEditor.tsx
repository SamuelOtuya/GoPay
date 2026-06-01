interface CoverageGroup {
  title: string;
  covered: string[];
  excluded: string[];
  fullWidth?: boolean;
}

interface FlexibleTable {
  columns: string[];
  rows: string[][];
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;

  coverageLayoutType: "cards" | "table";
  setCoverageLayoutType: React.Dispatch<
    React.SetStateAction<"cards" | "table">
  >;

  coverageTable: FlexibleTable;
  setCoverageTable: React.Dispatch<React.SetStateAction<FlexibleTable>>;

  coverageGroups: CoverageGroup[];
  setCoverageGroups: React.Dispatch<React.SetStateAction<CoverageGroup[]>>;
}

export default function CoverageEditor({
  form,
  updateField,
  coverageLayoutType,
  setCoverageLayoutType,
  coverageTable,
  setCoverageTable,
  coverageGroups,
  setCoverageGroups,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Coverage Section</h2>

      <select
        value={coverageLayoutType}
        onChange={(e) =>
          setCoverageLayoutType(e.target.value as "cards" | "table")
        }
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="cards">Coverage Cards</option>
        <option value="table">Coverage Table</option>
      </select>

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

      {coverageLayoutType === "cards" && (
        <>
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
                  setCoverageGroups(
                    coverageGroups.filter((_, i) => i !== index),
                  )
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
        </>
      )}

      {coverageLayoutType === "table" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Table Columns</h3>

          {coverageTable.columns.map((column, colIndex) => (
            <div key={colIndex} className="flex gap-3">
              <input
                value={column}
                onChange={(e) => {
                  const updatedColumns = [...coverageTable.columns];
                  updatedColumns[colIndex] = e.target.value;

                  const updatedRows = coverageTable.rows.map((row) => {
                    const newRow = [...row];

                    while (newRow.length < updatedColumns.length)
                      newRow.push("");

                    return newRow.slice(0, updatedColumns.length);
                  });

                  setCoverageTable({
                    columns: updatedColumns,
                    rows: updatedRows,
                  });
                }}
                placeholder="Column name"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() => {
                  const updatedColumns = coverageTable.columns.filter(
                    (_, i) => i !== colIndex,
                  );

                  const updatedRows = coverageTable.rows.map((row) =>
                    row.filter((_, i) => i !== colIndex),
                  );

                  setCoverageTable({
                    columns: updatedColumns,
                    rows: updatedRows,
                  });
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
              setCoverageTable({
                columns: [...coverageTable.columns, ""],
                rows: coverageTable.rows.map((row) => [...row, ""]),
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Column
          </button>

          <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

          {coverageTable.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              {coverageTable.columns.map((column, colIndex) => (
                <textarea
                  key={colIndex}
                  value={row[colIndex] || ""}
                  onChange={(e) => {
                    const updatedRows = [...coverageTable.rows];
                    const updatedRow = [...updatedRows[rowIndex]];
                    updatedRow[colIndex] = e.target.value;
                    updatedRows[rowIndex] = updatedRow;

                    setCoverageTable({
                      ...coverageTable,
                      rows: updatedRows,
                    });
                  }}
                  placeholder={column || `Column ${colIndex + 1}`}
                  rows={2}
                  className="w-full border rounded-xl px-4 py-3"
                />
              ))}

              <button
                type="button"
                onClick={() => {
                  setCoverageTable({
                    ...coverageTable,
                    rows: coverageTable.rows.filter((_, i) => i !== rowIndex),
                  });
                }}
                className="text-red-600 text-sm font-semibold"
              >
                Remove Row
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              setCoverageTable({
                ...coverageTable,
                rows: [
                  ...coverageTable.rows,
                  coverageTable.columns.map(() => ""),
                ],
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Row
          </button>
        </>
      )}

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
