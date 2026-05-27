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

  whoLayoutType: "table" | "cards";
  setWhoLayoutType: React.Dispatch<React.SetStateAction<"table" | "cards">>;

  whoTable: FlexibleTable;
  setWhoTable: React.Dispatch<React.SetStateAction<FlexibleTable>>;

  whoCards: GenericCard[];
  setWhoCards: React.Dispatch<React.SetStateAction<GenericCard[]>>;
}

export default function WhoNeedsItEditor({
  form,
  updateField,
  whoLayoutType,
  setWhoLayoutType,
  whoTable,
  setWhoTable,
  whoCards,
  setWhoCards,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Who Needs It Section</h2>

      <select
        value={whoLayoutType}
        onChange={(e) => setWhoLayoutType(e.target.value as "table" | "cards")}
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="table">Table Layout</option>
        <option value="cards">Cards Layout</option>
      </select>

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

      {whoLayoutType === "table" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Table Columns</h3>

          {whoTable.columns.map((column, colIndex) => (
            <div key={colIndex} className="flex gap-3">
              <input
                value={column}
                onChange={(e) => {
                  const updatedColumns = [...whoTable.columns];
                  updatedColumns[colIndex] = e.target.value;

                  const updatedRows = whoTable.rows.map((row) => {
                    const newRow = [...row];
                    while (newRow.length < updatedColumns.length)
                      newRow.push("");
                    return newRow.slice(0, updatedColumns.length);
                  });

                  setWhoTable({
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
                  const updatedColumns = whoTable.columns.filter(
                    (_, i) => i !== colIndex,
                  );

                  const updatedRows = whoTable.rows.map((row) =>
                    row.filter((_, i) => i !== colIndex),
                  );

                  setWhoTable({
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
              setWhoTable({
                columns: [...whoTable.columns, ""],
                rows: whoTable.rows.map((row) => [...row, ""]),
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Column
          </button>

          <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

          {whoTable.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              {whoTable.columns.map((column, colIndex) => (
                <textarea
                  key={colIndex}
                  value={row[colIndex] || ""}
                  onChange={(e) => {
                    const updatedRows = [...whoTable.rows];
                    const updatedRow = [...updatedRows[rowIndex]];
                    updatedRow[colIndex] = e.target.value;
                    updatedRows[rowIndex] = updatedRow;

                    setWhoTable({
                      ...whoTable,
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
                  setWhoTable({
                    ...whoTable,
                    rows: whoTable.rows.filter((_, i) => i !== rowIndex),
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
              setWhoTable({
                ...whoTable,
                rows: [...whoTable.rows, whoTable.columns.map(() => "")],
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Row
          </button>
        </>
      )}

      {whoLayoutType === "cards" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Cards</h3>

          {whoCards.map((card, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              <input
                value={card.img || ""}
                onChange={(e) => {
                  const updated = [...whoCards];
                  updated[index].img = e.target.value;
                  setWhoCards(updated);
                }}
                placeholder="Image URL optional"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                value={card.title}
                onChange={(e) => {
                  const updated = [...whoCards];
                  updated[index].title = e.target.value;
                  setWhoCards(updated);
                }}
                placeholder="Card title"
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                value={card.text}
                onChange={(e) => {
                  const updated = [...whoCards];
                  updated[index].text = e.target.value;
                  setWhoCards(updated);
                }}
                placeholder="Card text"
                rows={4}
                className="w-full border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() =>
                  setWhoCards(whoCards.filter((_, i) => i !== index))
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
              setWhoCards([...whoCards, { img: "", title: "", text: "" }])
            }
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Card
          </button>
        </>
      )}
    </>
  );
}
