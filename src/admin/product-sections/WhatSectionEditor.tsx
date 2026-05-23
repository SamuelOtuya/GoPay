import ImageUploadField from "../components/ImageUploadField";

interface WhatBullet {
  label: string;
  desc: string;
}

interface WhatCard {
  img: string;
  title: string;
  text: string;
  bullets?: WhatBullet[];
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
  whatCards: WhatCard[];
  setWhatCards: React.Dispatch<React.SetStateAction<WhatCard[]>>;
}

export default function WhatSectionEditor({
  form,
  updateField,
  whatCards,
  setWhatCards,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">What Is It Section</h2>

      <input
        value={form.whatSectionLabel}
        onChange={(e) => updateField("whatSectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whatHeading}
        onChange={(e) => updateField("whatHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.whatSubheading}
        onChange={(e) => updateField("whatSubheading", e.target.value)}
        placeholder="Subheading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whatIntro1}
        onChange={(e) => updateField("whatIntro1", e.target.value)}
        placeholder="Intro 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whatIntro2}
        onChange={(e) => updateField("whatIntro2", e.target.value)}
        placeholder="Intro 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <h3 className="text-lg font-bold text-[#0F2240]">What Cards</h3>

      {whatCards.map((card, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <ImageUploadField
            value={card.img}
            onChange={(url) => {
              const updated = [...whatCards];
              updated[index].img = url;
              setWhatCards(updated);
            }}
            folder="what-images"
          />

          <input
            value={card.title}
            onChange={(e) => {
              const updated = [...whatCards];
              updated[index].title = e.target.value;
              setWhatCards(updated);
            }}
            placeholder="Card title"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={card.text}
            onChange={(e) => {
              const updated = [...whatCards];
              updated[index].text = e.target.value;
              setWhatCards(updated);
            }}
            placeholder="Card text"
            rows={4}
            className="w-full border rounded-xl px-4 py-3"
          />

          <div className="space-y-3">
            <h4 className="font-semibold text-[#0F2240]">Bullets</h4>

            {(card.bullets || []).map((bullet, bulletIndex) => (
              <div
                key={bulletIndex}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                <input
                  value={bullet.label}
                  onChange={(e) => {
                    const updated = [...whatCards];
                    const bullets = [...(updated[index].bullets || [])];
                    bullets[bulletIndex].label = e.target.value;
                    updated[index].bullets = bullets;
                    setWhatCards(updated);
                  }}
                  placeholder="Bullet label"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <input
                  value={bullet.desc}
                  onChange={(e) => {
                    const updated = [...whatCards];
                    const bullets = [...(updated[index].bullets || [])];
                    bullets[bulletIndex].desc = e.target.value;
                    updated[index].bullets = bullets;
                    setWhatCards(updated);
                  }}
                  placeholder="Bullet description"
                  className="w-full border rounded-xl px-4 py-3"
                />

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...whatCards];
                    updated[index].bullets = (
                      updated[index].bullets || []
                    ).filter((_, i) => i !== bulletIndex);
                    setWhatCards(updated);
                  }}
                  className="text-red-600 text-sm font-semibold md:col-span-2 text-left"
                >
                  Remove Bullet
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                const updated = [...whatCards];
                updated[index].bullets = [
                  ...(updated[index].bullets || []),
                  { label: "", desc: "" },
                ];
                setWhatCards(updated);
              }}
              className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
            >
              + Add Bullet
            </button>
          </div>

          <button
            type="button"
            onClick={() =>
              setWhatCards(whatCards.filter((_, i) => i !== index))
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
          setWhatCards([
            ...whatCards,
            {
              img: "",
              title: "",
              text: "",
              bullets: [],
            },
          ])
        }
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add What Card
      </button>

      <textarea
        value={form.whatClosing1}
        onChange={(e) => updateField("whatClosing1", e.target.value)}
        placeholder="Closing paragraph 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.whatClosing2}
        onChange={(e) => updateField("whatClosing2", e.target.value)}
        placeholder="Closing paragraph 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
