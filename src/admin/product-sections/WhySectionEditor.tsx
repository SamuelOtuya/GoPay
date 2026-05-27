import ImageUploadField from "../components/ImageUploadField";

interface FlexibleTable {
  columns: string[];
  rows: string[][];
}

interface WhyCard {
  img: string;
  text: string;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;

  whyCards: WhyCard[];
  setWhyCards: React.Dispatch<React.SetStateAction<WhyCard[]>>;

  whyLayoutType: "cards" | "table";
  setWhyLayoutType: React.Dispatch<React.SetStateAction<"cards" | "table">>;

  whyTable: FlexibleTable;
  setWhyTable: React.Dispatch<React.SetStateAction<FlexibleTable>>;
}

export default function WhySectionEditor({
  form,
  updateField,
  whyCards,
  setWhyCards,
  whyLayoutType,
  setWhyLayoutType,
  whyTable,
  setWhyTable,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Why It Matters</h2>

      <select
        value={whyLayoutType}
        onChange={(e) => setWhyLayoutType(e.target.value as "cards" | "table")}
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="cards">Cards Layout</option>
        <option value="table">Table Layout</option>
      </select>

      <input
        value={form.whySectionLabel}
        onChange={(e) => updateField("whySectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whyHeading}
        onChange={(e) => updateField("whyHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whySubheading}
        onChange={(e) => updateField("whySubheading", e.target.value)}
        placeholder="Subheading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whyPullEyebrow}
        onChange={(e) => updateField("whyPullEyebrow", e.target.value)}
        placeholder="Pull quote eyebrow"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whyPullHeadline}
        onChange={(e) => updateField("whyPullHeadline", e.target.value)}
        placeholder="Pull quote headline"
        rows={2}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whyPullBody1}
        onChange={(e) => updateField("whyPullBody1", e.target.value)}
        placeholder="Pull quote body 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whyPullBody2}
        onChange={(e) => updateField("whyPullBody2", e.target.value)}
        placeholder="Pull quote body 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      {whyLayoutType === "cards" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Why Cards</h3>

          {whyCards.map((card, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              <ImageUploadField
                value={card.img}
                onChange={(url) => {
                  const updated = [...whyCards];
                  updated[index].img = url;
                  setWhyCards(updated);
                }}
                folder="why-images"
              />

              <textarea
                value={card.text}
                onChange={(e) => {
                  const updated = [...whyCards];
                  updated[index].text = e.target.value;
                  setWhyCards(updated);
                }}
                placeholder="Card text"
                rows={4}
                className="w-full border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() =>
                  setWhyCards(whyCards.filter((_, i) => i !== index))
                }
                className="text-red-600 text-sm font-semibold"
              >
                Remove Card
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setWhyCards([...whyCards, { img: "", text: "" }])}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Why Card
          </button>
        </>
      )}

      {whyLayoutType === "table" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Table Columns</h3>

          {whyTable.columns.map((column, colIndex) => (
            <div key={colIndex} className="flex gap-3">
              <input
                value={column}
                onChange={(e) => {
                  const updatedColumns = [...whyTable.columns];
                  updatedColumns[colIndex] = e.target.value;

                  const updatedRows = whyTable.rows.map((row) => {
                    const newRow = [...row];
                    while (newRow.length < updatedColumns.length)
                      newRow.push("");
                    return newRow.slice(0, updatedColumns.length);
                  });

                  setWhyTable({
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
                  const updatedColumns = whyTable.columns.filter(
                    (_, i) => i !== colIndex,
                  );

                  const updatedRows = whyTable.rows.map((row) =>
                    row.filter((_, i) => i !== colIndex),
                  );

                  setWhyTable({
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
              setWhyTable({
                columns: [...whyTable.columns, ""],
                rows: whyTable.rows.map((row) => [...row, ""]),
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Column
          </button>

          <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

          {whyTable.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              {whyTable.columns.map((column, colIndex) => (
                <textarea
                  key={colIndex}
                  value={row[colIndex] || ""}
                  onChange={(e) => {
                    const updatedRows = [...whyTable.rows];
                    const updatedRow = [...updatedRows[rowIndex]];
                    updatedRow[colIndex] = e.target.value;
                    updatedRows[rowIndex] = updatedRow;

                    setWhyTable({
                      ...whyTable,
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
                  setWhyTable({
                    ...whyTable,
                    rows: whyTable.rows.filter((_, i) => i !== rowIndex),
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
              setWhyTable({
                ...whyTable,
                rows: [...whyTable.rows, whyTable.columns.map(() => "")],
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Row
          </button>
        </>
      )}
    </>
  );
}
