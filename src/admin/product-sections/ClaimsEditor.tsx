interface ClaimStep {
  num: number;
  title: string;
  color: string;
  text: string;

  img?: string;
  bullets?: string[];

  gopayRole?: string;
}

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;

  claimsCardDisplay: "grid" | "horizontal" | "auto";
  setClaimsCardDisplay: React.Dispatch<
    React.SetStateAction<"grid" | "horizontal" | "auto">
  >;

  claimSteps: ClaimStep[];
  setClaimSteps: React.Dispatch<React.SetStateAction<ClaimStep[]>>;

  gopayBullets: string[];
  setGopayBullets: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ClaimsEditor({
  form,
  updateField,
  claimsCardDisplay,
  setClaimsCardDisplay,
  claimSteps,
  setClaimSteps,
  gopayBullets,
  setGopayBullets,
}: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Claims Section</h2>

      <select
        value={claimsCardDisplay}
        onChange={(e) =>
          setClaimsCardDisplay(e.target.value as "grid" | "horizontal" | "auto")
        }
        className="w-full border rounded-xl px-4 py-3"
      >
        <option value="grid">Grid Cards</option>
        <option value="horizontal">Horizontal Cards</option>
        <option value="auto">Auto</option>
      </select>

      <input
        value={form.claimsSectionLabel}
        onChange={(e) => updateField("claimsSectionLabel", e.target.value)}
        placeholder="Section label"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.claimsHeading}
        onChange={(e) => updateField("claimsHeading", e.target.value)}
        placeholder="Heading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.claimsSubheading}
        onChange={(e) => updateField("claimsSubheading", e.target.value)}
        placeholder="Subheading"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.claimsIntro1}
        onChange={(e) => updateField("claimsIntro1", e.target.value)}
        placeholder="Intro 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.claimsIntro2}
        onChange={(e) => updateField("claimsIntro2", e.target.value)}
        placeholder="Intro 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.claimsIntro3}
        onChange={(e) => updateField("claimsIntro3", e.target.value)}
        placeholder="Intro 3"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <h3 className="text-lg font-bold text-[#0F2240]">Claim Steps</h3>

      {claimSteps.map((step, index) => (
        <div
          key={index}
          className="border border-slate-200 rounded-xl p-4 space-y-3 bg-slate-50"
        >
          <input
            type="number"
            value={step.num}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].num = Number(e.target.value);
              setClaimSteps(updated);
            }}
            placeholder="Step number"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={step.title}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].title = e.target.value;
              setClaimSteps(updated);
            }}
            placeholder="Step title"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={step.img || ""}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].img = e.target.value;
              setClaimSteps(updated);
            }}
            placeholder="Image URL optional"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={step.color}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].color = e.target.value;
              setClaimSteps(updated);
            }}
            placeholder="Tailwind color e.g. bg-blue-600"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={step.text}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].text = e.target.value;
              setClaimSteps(updated);
            }}
            placeholder="Step text"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <h4 className="font-semibold text-[#0F2240]">Step Bullets</h4>

          {(step.bullets || []).map((bullet, bulletIndex) => (
            <div key={bulletIndex} className="flex gap-3">
              <input
                value={bullet}
                onChange={(e) => {
                  const updated = [...claimSteps];
                  const bullets = [...(updated[index].bullets || [])];
                  bullets[bulletIndex] = e.target.value;
                  updated[index].bullets = bullets;
                  setClaimSteps(updated);
                }}
                placeholder="Step bullet"
                className="flex-1 border rounded-xl px-4 py-3"
              />

              <button
                type="button"
                onClick={() => {
                  const updated = [...claimSteps];
                  updated[index].bullets = (
                    updated[index].bullets || []
                  ).filter((_, i) => i !== bulletIndex);
                  setClaimSteps(updated);
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
              const updated = [...claimSteps];
              updated[index].bullets = [...(updated[index].bullets || []), ""];
              setClaimSteps(updated);
            }}
            className="w-full border-2 border-dashed border-slate-300 py-2 rounded-xl font-semibold text-slate-600"
          >
            + Add Step Bullet
          </button>

          <textarea
            value={step.gopayRole || ""}
            onChange={(e) => {
              const updated = [...claimSteps];
              updated[index].gopayRole = e.target.value;
              setClaimSteps(updated);
            }}
            placeholder="GoPay role optional"
            rows={2}
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() =>
              setClaimSteps(claimSteps.filter((_, i) => i !== index))
            }
            className="text-red-600 text-sm font-semibold"
          >
            Remove Step
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setClaimSteps([
            ...claimSteps,
            {
              num: claimSteps.length + 1,
              title: "",
              img: "",
              color: "bg-[#0F2240]",
              text: "",
              bullets: [],
              gopayRole: "",
            },
          ])
        }
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add Claim Step
      </button>

      <h3 className="text-lg font-bold text-[#0F2240]">
        GoPay Support Bullets
      </h3>

      {gopayBullets.map((bullet, index) => (
        <div key={index} className="flex gap-3">
          <input
            value={bullet}
            onChange={(e) => {
              const updated = [...gopayBullets];
              updated[index] = e.target.value;
              setGopayBullets(updated);
            }}
            placeholder="Support bullet"
            className="flex-1 border rounded-xl px-4 py-3"
          />

          <button
            type="button"
            onClick={() =>
              setGopayBullets(gopayBullets.filter((_, i) => i !== index))
            }
            className="text-red-600 text-sm font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setGopayBullets([...gopayBullets, ""])}
        className="w-full border-2 border-dashed border-slate-300 py-3 rounded-xl font-semibold text-slate-600"
      >
        + Add Support Bullet
      </button>

      <textarea
        value={form.claimsClosing}
        onChange={(e) => updateField("claimsClosing", e.target.value)}
        placeholder="Closing text"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
