interface RiskRow {
  img: string;
  stage: string;
  scenario: string;
  impact: string[];
  response: string;
}

interface GenericCard {
  img?: string;
  title: string;
  text: string;
  bullets?: string[];

  secondaryHeading?: string;
  secondaryBullets?: string[];
}

interface FlexibleTable {
  columns: string[];
  rows: string[][];
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;

  riskLayoutType: "riskmap" | "table" | "cards";
  setRiskLayoutType: React.Dispatch<
    React.SetStateAction<"riskmap" | "table" | "cards">
  >;

  riskCardDisplay: "grid" | "horizontal" | "auto";
  setRiskCardDisplay: React.Dispatch<
    React.SetStateAction<"grid" | "horizontal" | "auto">
  >;

  riskRows: RiskRow[];
  setRiskRows: React.Dispatch<React.SetStateAction<RiskRow[]>>;

  riskTable: FlexibleTable;
  setRiskTable: React.Dispatch<React.SetStateAction<FlexibleTable>>;

  riskCards: GenericCard[];
  setRiskCards: React.Dispatch<React.SetStateAction<GenericCard[]>>;
}

export default function RiskMapEditor({
  form,
  updateField,
  riskLayoutType,
  setRiskLayoutType,
  riskCardDisplay,
  setRiskCardDisplay,
  riskRows,
  setRiskRows,
  riskTable,
  setRiskTable,
  riskCards,
  setRiskCards,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Risk Map Section</h2>

      <select
        value={riskLayoutType}
        onChange={(e) =>
          setRiskLayoutType(e.target.value as "riskmap" | "table" | "cards")
        }
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="riskmap">Risk Map Layout</option>
        <option value="table">Table Layout</option>
        <option value="cards">Cards Layout</option>
      </select>

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

      {riskLayoutType === "riskmap" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Risk Rows</h3>

          {riskRows.map((row, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              <input
                value={row.img}
                onChange={(e) => {
                  const updated = [...riskRows];
                  updated[index].img = e.target.value;
                  setRiskRows(updated);
                }}
                placeholder="Image URL"
                className="w-full border rounded-xl px-4 py-3"
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
                onClick={() =>
                  setRiskRows(riskRows.filter((_, i) => i !== index))
                }
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
        </>
      )}

      {riskLayoutType === "table" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Table Columns</h3>

          {riskTable.columns.map((column, colIndex) => (
            <div key={colIndex} className="flex gap-3">
              <input
                value={column}
                onChange={(e) => {
                  const updatedColumns = [...riskTable.columns];
                  updatedColumns[colIndex] = e.target.value;

                  const updatedRows = riskTable.rows.map((row) => {
                    const newRow = [...row];
                    while (newRow.length < updatedColumns.length)
                      newRow.push("");
                    return newRow.slice(0, updatedColumns.length);
                  });

                  setRiskTable({
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
                  const updatedColumns = riskTable.columns.filter(
                    (_, i) => i !== colIndex,
                  );

                  const updatedRows = riskTable.rows.map((row) =>
                    row.filter((_, i) => i !== colIndex),
                  );

                  setRiskTable({
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
              setRiskTable({
                columns: [...riskTable.columns, ""],
                rows: riskTable.rows.map((row) => [...row, ""]),
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Column
          </button>

          <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

          {riskTable.rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              {riskTable.columns.map((column, colIndex) => (
                <textarea
                  key={colIndex}
                  value={row[colIndex] || ""}
                  onChange={(e) => {
                    const updatedRows = [...riskTable.rows];
                    const updatedRow = [...updatedRows[rowIndex]];
                    updatedRow[colIndex] = e.target.value;
                    updatedRows[rowIndex] = updatedRow;

                    setRiskTable({
                      ...riskTable,
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
                  setRiskTable({
                    ...riskTable,
                    rows: riskTable.rows.filter((_, i) => i !== rowIndex),
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
              setRiskTable({
                ...riskTable,
                rows: [...riskTable.rows, riskTable.columns.map(() => "")],
              });
            }}
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Row
          </button>
        </>
      )}

      {riskLayoutType === "cards" && (
        <>
          <h3 className="text-lg font-bold text-[#0F2240]">Cards</h3>

          <select
            value={riskCardDisplay}
            onChange={(e) =>
              setRiskCardDisplay(
                e.target.value as "grid" | "horizontal" | "auto",
              )
            }
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="grid">Grid Cards</option>
            <option value="horizontal">Horizontal Cards</option>
            <option value="auto">Auto</option>
          </select>

          {riskCards.map((card, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
            >
              <input
                value={card.img || ""}
                onChange={(e) => {
                  const updated = [...riskCards];
                  updated[index].img = e.target.value;
                  setRiskCards(updated);
                }}
                placeholder="Image URL optional"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                value={card.title}
                onChange={(e) => {
                  const updated = [...riskCards];
                  updated[index].title = e.target.value;
                  setRiskCards(updated);
                }}
                placeholder="Card title"
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                value={card.text}
                onChange={(e) => {
                  const updated = [...riskCards];
                  updated[index].text = e.target.value;
                  setRiskCards(updated);
                }}
                placeholder="Card text"
                rows={4}
                className="w-full border rounded-xl px-4 py-3"
              />

              <h4 className="font-semibold text-[#0F2240]">Bullets</h4>

              {(card.bullets || []).map((bullet, bulletIndex) => (
                <div key={bulletIndex} className="flex gap-3">
                  <input
                    value={bullet}
                    onChange={(e) => {
                      const updated = [...riskCards];
                      const bullets = [...(updated[index].bullets || [])];
                      bullets[bulletIndex] = e.target.value;
                      updated[index].bullets = bullets;
                      setRiskCards(updated);
                    }}
                    placeholder="Bullet item"
                    className="flex-1 border rounded-xl px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      const updated = [...riskCards];
                      updated[index].bullets = (
                        updated[index].bullets || []
                      ).filter((_, i) => i !== bulletIndex);
                      setRiskCards(updated);
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
                  const updated = [...riskCards];
                  updated[index].bullets = [
                    ...(updated[index].bullets || []),
                    "",
                  ];
                  setRiskCards(updated);
                }}
                className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
              >
                + Add Bullet
              </button>

              <div className="border-t border-slate-200 pt-4 space-y-3">
                <h4 className="font-semibold text-[#0F2240]">
                  Secondary Section
                </h4>

                <input
                  value={card.secondaryHeading || ""}
                  onChange={(e) => {
                    const updated = [...riskCards];
                    updated[index].secondaryHeading = e.target.value;
                    setRiskCards(updated);
                  }}
                  placeholder="Its Use / Benefits / Requirements"
                  className="w-full border rounded-xl px-4 py-3"
                />

                {(card.secondaryBullets || []).map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex gap-3">
                    <input
                      value={bullet}
                      onChange={(e) => {
                        const updated = [...riskCards];
                        const bullets = [
                          ...(updated[index].secondaryBullets || []),
                        ];
                        bullets[bulletIndex] = e.target.value;
                        updated[index].secondaryBullets = bullets;
                        setRiskCards(updated);
                      }}
                      placeholder="Secondary bullet"
                      className="flex-1 border rounded-xl px-4 py-3"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...riskCards];
                        updated[index].secondaryBullets = (
                          updated[index].secondaryBullets || []
                        ).filter((_, i) => i !== bulletIndex);
                        setRiskCards(updated);
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
                    const updated = [...riskCards];
                    updated[index].secondaryBullets = [
                      ...(updated[index].secondaryBullets || []),
                      "",
                    ];
                    setRiskCards(updated);
                  }}
                  className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
                >
                  + Add Secondary Bullet
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  setRiskCards(riskCards.filter((_, i) => i !== index))
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
              setRiskCards([
                ...riskCards,
                {
                  img: "",
                  title: "",
                  text: "",
                  bullets: [],
                  secondaryHeading: "",
                  secondaryBullets: [],
                },
              ])
            }
            className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
          >
            + Add Card
          </button>
        </>
      )}

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
