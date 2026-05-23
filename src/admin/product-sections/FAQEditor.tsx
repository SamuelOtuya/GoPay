interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  faqItems: FaqItem[];
  setFaqItems: React.Dispatch<React.SetStateAction<FaqItem[]>>;
}

export default function FAQEditor({ faqItems, setFaqItems }: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">FAQ Section</h2>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <input
            value={item.q}
            onChange={(e) => {
              const updated = [...faqItems];
              updated[index].q = e.target.value;
              setFaqItems(updated);
            }}
            placeholder="Question"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={item.a}
            onChange={(e) => {
              const updated = [...faqItems];
              updated[index].a = e.target.value;
              setFaqItems(updated);
            }}
            placeholder="Answer"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() => setFaqItems(faqItems.filter((_, i) => i !== index))}
            className="text-red-600 text-sm font-semibold"
          >
            Remove FAQ
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setFaqItems([...faqItems, { q: "", a: "" }])}
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add FAQ
      </button>
    </>
  );
}
