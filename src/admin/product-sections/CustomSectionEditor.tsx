interface GenericCard {
  img?: string;
  title: string;
  text: string;
}

interface FlexibleTable {
  columns: string[];
  rows: string[][];
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;

  customEnabled: boolean;
  setCustomEnabled: React.Dispatch<React.SetStateAction<boolean>>;

  customLayoutType: "cards" | "table";
  setCustomLayoutType: React.Dispatch<React.SetStateAction<"cards" | "table">>;

  customTable: FlexibleTable;
  setCustomTable: React.Dispatch<React.SetStateAction<FlexibleTable>>;

  customCards: GenericCard[];
  setCustomCards: React.Dispatch<React.SetStateAction<GenericCard[]>>;
}

export default function CustomSectionEditor({
  form,
  updateField,
  customEnabled,
  setCustomEnabled,
  customLayoutType,
  setCustomLayoutType,
  customTable,
  setCustomTable,
  customCards,
  setCustomCards,
}: Props) {
  return (
    <>
      <hr />

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#0F2240]">Custom Section</h2>

        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            checked={customEnabled}
            onChange={(e) => setCustomEnabled(e.target.checked)}
          />
          Enable Section
        </label>
      </div>

      {customEnabled && (
        <>
          <select
            value={customLayoutType}
            onChange={(e) =>
              setCustomLayoutType(e.target.value as "cards" | "table")
            }
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="cards">Cards Layout</option>
            <option value="table">Table Layout</option>
          </select>

          <input
            value={form.customSectionLabel}
            onChange={(e) => updateField("customSectionLabel", e.target.value)}
            placeholder="Section label"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={form.customHeading}
            onChange={(e) => updateField("customHeading", e.target.value)}
            placeholder="Heading"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={form.customIntro}
            onChange={(e) => updateField("customIntro", e.target.value)}
            placeholder="Intro"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          {customLayoutType === "cards" && (
            <>
              <h3 className="text-lg font-bold text-[#0F2240]">Cards</h3>

              {customCards.map((card, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
                >
                  <input
                    value={card.img || ""}
                    onChange={(e) => {
                      const updated = [...customCards];
                      updated[index].img = e.target.value;
                      setCustomCards(updated);
                    }}
                    placeholder="Image URL optional"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    value={card.title}
                    onChange={(e) => {
                      const updated = [...customCards];
                      updated[index].title = e.target.value;
                      setCustomCards(updated);
                    }}
                    placeholder="Card title"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <textarea
                    value={card.text}
                    onChange={(e) => {
                      const updated = [...customCards];
                      updated[index].text = e.target.value;
                      setCustomCards(updated);
                    }}
                    placeholder="Card text"
                    rows={4}
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setCustomCards(customCards.filter((_, i) => i !== index))
                    }
                    className="text-red-600 text-sm font-semibold"
                  >
                    Remove Card
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCustomCards([
                    ...customCards,
                    { img: "", title: "", text: "" },
                  ])
                }
                className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
              >
                + Add Card
              </button>
            </>
          )}

          {customLayoutType === "table" && (
            <>
              <h3 className="text-lg font-bold text-[#0F2240]">
                Table Columns
              </h3>

              {customTable.columns.map((column, colIndex) => (
                <div key={colIndex} className="flex gap-3">
                  <input
                    value={column}
                    onChange={(e) => {
                      const updatedColumns = [...customTable.columns];
                      updatedColumns[colIndex] = e.target.value;

                      const updatedRows = customTable.rows.map((row) => {
                        const newRow = [...row];
                        while (newRow.length < updatedColumns.length)
                          newRow.push("");
                        return newRow.slice(0, updatedColumns.length);
                      });

                      setCustomTable({
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
                      const updatedColumns = customTable.columns.filter(
                        (_, i) => i !== colIndex,
                      );

                      const updatedRows = customTable.rows.map((row) =>
                        row.filter((_, i) => i !== colIndex),
                      );

                      setCustomTable({
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
                  setCustomTable({
                    columns: [...customTable.columns, ""],
                    rows: customTable.rows.map((row) => [...row, ""]),
                  });
                }}
                className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
              >
                + Add Column
              </button>

              <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

              {customTable.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
                >
                  {customTable.columns.map((column, colIndex) => (
                    <textarea
                      key={colIndex}
                      value={row[colIndex] || ""}
                      onChange={(e) => {
                        const updatedRows = [...customTable.rows];
                        const updatedRow = [...updatedRows[rowIndex]];
                        updatedRow[colIndex] = e.target.value;
                        updatedRows[rowIndex] = updatedRow;

                        setCustomTable({
                          ...customTable,
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
                      setCustomTable({
                        ...customTable,
                        rows: customTable.rows.filter((_, i) => i !== rowIndex),
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
                  setCustomTable({
                    ...customTable,
                    rows: [
                      ...customTable.rows,
                      customTable.columns.map(() => ""),
                    ],
                  });
                }}
                className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
              >
                + Add Row
              </button>
            </>
          )}
        </>
      )}
    </>
  );
}
