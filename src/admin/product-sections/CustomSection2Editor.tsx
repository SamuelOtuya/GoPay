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

  custom2Enabled: boolean;
  setCustom2Enabled: React.Dispatch<React.SetStateAction<boolean>>;

  custom2LayoutType: "cards" | "table";
  setCustom2LayoutType: React.Dispatch<React.SetStateAction<"cards" | "table">>;

  custom2CardDisplay: "grid" | "horizontal" | "auto";
  setCustom2CardDisplay: React.Dispatch<
    React.SetStateAction<"grid" | "horizontal" | "auto">
  >;

  custom2Table: FlexibleTable;
  setCustom2Table: React.Dispatch<React.SetStateAction<FlexibleTable>>;

  custom2Cards: GenericCard[];
  setCustom2Cards: React.Dispatch<React.SetStateAction<GenericCard[]>>;
}

export default function Custom2SectionEditor({
  form,
  updateField,
  custom2Enabled,
  setCustom2Enabled,
  custom2LayoutType,
  setCustom2LayoutType,
  custom2CardDisplay,
  setCustom2CardDisplay,
  custom2Table,
  setCustom2Table,
  custom2Cards,
  setCustom2Cards,
}: Props) {
  return (
    <>
      <hr />

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#0F2240]">Custom Section 2</h2>

        <label className="flex items-center gap-2 text-sm font-semibold">
          <input
            type="checkbox"
            checked={custom2Enabled}
            onChange={(e) => setCustom2Enabled(e.target.checked)}
          />
          Enable Section
        </label>
      </div>

      {custom2Enabled && (
        <>
          <select
            value={custom2LayoutType}
            onChange={(e) =>
              setCustom2LayoutType(e.target.value as "cards" | "table")
            }
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="cards">Cards Layout</option>
            <option value="table">Table Layout</option>
          </select>

          <input
            value={form.custom2SectionLabel}
            onChange={(e) => updateField("custom2SectionLabel", e.target.value)}
            placeholder="Section label"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={form.custom2Heading}
            onChange={(e) => updateField("custom2Heading", e.target.value)}
            placeholder="Heading"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={form.custom2Intro}
            onChange={(e) => updateField("custom2Intro", e.target.value)}
            placeholder="Intro"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          {custom2LayoutType === "cards" && (
            <>
              <h3 className="text-lg font-bold text-[#0F2240]">Cards</h3>

              <select
                value={custom2CardDisplay}
                onChange={(e) =>
                  setCustom2CardDisplay(
                    e.target.value as "grid" | "horizontal" | "auto",
                  )
                }
                className="w-full border rounded-xl px-4 py-3"
              >
                <option value="grid">Grid Cards</option>
                <option value="horizontal">Horizontal Cards</option>
                <option value="auto">Auto</option>
              </select>

              {custom2Cards.map((card, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
                >
                  <input
                    value={card.img || ""}
                    onChange={(e) => {
                      const updated = [...custom2Cards];
                      updated[index].img = e.target.value;
                      setCustom2Cards(updated);
                    }}
                    placeholder="Image URL optional"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    value={card.title}
                    onChange={(e) => {
                      const updated = [...custom2Cards];
                      updated[index].title = e.target.value;
                      setCustom2Cards(updated);
                    }}
                    placeholder="Card title"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <textarea
                    value={card.text}
                    onChange={(e) => {
                      const updated = [...custom2Cards];
                      updated[index].text = e.target.value;
                      setCustom2Cards(updated);
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
                          const updated = [...custom2Cards];
                          const bullets = [...(updated[index].bullets || [])];
                          bullets[bulletIndex] = e.target.value;
                          updated[index].bullets = bullets;
                          setCustom2Cards(updated);
                        }}
                        placeholder="Bullet item"
                        className="flex-1 border rounded-xl px-4 py-3"
                      />

                      <button
                        type="button"
                        onClick={() => {
                          const updated = [...custom2Cards];
                          updated[index].bullets = (
                            updated[index].bullets || []
                          ).filter((_, i) => i !== bulletIndex);
                          setCustom2Cards(updated);
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
                      const updated = [...custom2Cards];
                      updated[index].bullets = [
                        ...(updated[index].bullets || []),
                        "",
                      ];
                      setCustom2Cards(updated);
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
                        const updated = [...custom2Cards];
                        updated[index].secondaryHeading = e.target.value;
                        setCustom2Cards(updated);
                      }}
                      placeholder="Its Use / Benefits / Requirements"
                      className="w-full border rounded-xl px-4 py-3"
                    />

                    {(card.secondaryBullets || []).map(
                      (bullet, bulletIndex) => (
                        <div key={bulletIndex} className="flex gap-3">
                          <input
                            value={bullet}
                            onChange={(e) => {
                              const updated = [...custom2Cards];

                              const bullets = [
                                ...(updated[index].secondaryBullets || []),
                              ];

                              bullets[bulletIndex] = e.target.value;
                              updated[index].secondaryBullets = bullets;

                              setCustom2Cards(updated);
                            }}
                            placeholder="Secondary bullet"
                            className="flex-1 border rounded-xl px-4 py-3"
                          />

                          <button
                            type="button"
                            onClick={() => {
                              const updated = [...custom2Cards];

                              updated[index].secondaryBullets = (
                                updated[index].secondaryBullets || []
                              ).filter((_, i) => i !== bulletIndex);

                              setCustom2Cards(updated);
                            }}
                            className="text-red-600 text-sm font-semibold"
                          >
                            Remove
                          </button>
                        </div>
                      ),
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        const updated = [...custom2Cards];

                        updated[index].secondaryBullets = [
                          ...(updated[index].secondaryBullets || []),
                          "",
                        ];

                        setCustom2Cards(updated);
                      }}
                      className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
                    >
                      + Add Secondary Bullet
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setCustom2Cards(
                        custom2Cards.filter((_, i) => i !== index),
                      )
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
                  setCustom2Cards([
                    ...custom2Cards,
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

          {custom2LayoutType === "table" && (
            <>
              <h3 className="text-lg font-bold text-[#0F2240]">
                Table Columns
              </h3>

              {custom2Table.columns.map((column, colIndex) => (
                <div key={colIndex} className="flex gap-3">
                  <input
                    value={column}
                    onChange={(e) => {
                      const updatedColumns = [...custom2Table.columns];
                      updatedColumns[colIndex] = e.target.value;

                      const updatedRows = custom2Table.rows.map((row) => {
                        const newRow = [...row];

                        while (newRow.length < updatedColumns.length)
                          newRow.push("");

                        return newRow.slice(0, updatedColumns.length);
                      });

                      setCustom2Table({
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
                      const updatedColumns = custom2Table.columns.filter(
                        (_, i) => i !== colIndex,
                      );

                      const updatedRows = custom2Table.rows.map((row) =>
                        row.filter((_, i) => i !== colIndex),
                      );

                      setCustom2Table({
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
                  setCustom2Table({
                    columns: [...custom2Table.columns, ""],
                    rows: custom2Table.rows.map((row) => [...row, ""]),
                  });
                }}
                className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
              >
                + Add Column
              </button>

              <h3 className="text-lg font-bold text-[#0F2240]">Table Rows</h3>

              {custom2Table.rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
                >
                  {custom2Table.columns.map((column, colIndex) => (
                    <textarea
                      key={colIndex}
                      value={row[colIndex] || ""}
                      onChange={(e) => {
                        const updatedRows = [...custom2Table.rows];
                        const updatedRow = [...updatedRows[rowIndex]];

                        updatedRow[colIndex] = e.target.value;
                        updatedRows[rowIndex] = updatedRow;

                        setCustom2Table({
                          ...custom2Table,
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
                      setCustom2Table({
                        ...custom2Table,
                        rows: custom2Table.rows.filter(
                          (_, i) => i !== rowIndex,
                        ),
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
                  setCustom2Table({
                    ...custom2Table,
                    rows: [
                      ...custom2Table.rows,
                      custom2Table.columns.map(() => ""),
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
