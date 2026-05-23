import ImageUploadField from "../components/ImageUploadField";

interface WhyCard {
  img: string;
  text: string;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
  whyCards: WhyCard[];
  setWhyCards: React.Dispatch<React.SetStateAction<WhyCard[]>>;
}

export default function WhySectionEditor({
  form,
  updateField,
  whyCards,
  setWhyCards,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Why It Matters</h2>

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
            onClick={() => setWhyCards(whyCards.filter((_, i) => i !== index))}
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
  );
}
