import ImageUploadField from "../components/ImageUploadField";

interface Props {
  form: any;
  updateField: (field: string, value: string) => void;
}

export default function HeroSectionEditor({ form, updateField }: Props) {
  return (
    <>
      <hr />

      <h2 className="text-xl font-bold text-[#0F2240]">Hero Section</h2>

      <input
        value={form.heroTitle}
        onChange={(e) => updateField("heroTitle", e.target.value)}
        placeholder="Hero title"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        value={form.heroTagline}
        onChange={(e) => updateField("heroTagline", e.target.value)}
        placeholder="Hero tagline"
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.heroBody1}
        onChange={(e) => updateField("heroBody1", e.target.value)}
        placeholder="Hero body 1"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <textarea
        value={form.heroBody2}
        onChange={(e) => updateField("heroBody2", e.target.value)}
        placeholder="Hero body 2"
        rows={3}
        className="w-full border rounded-xl px-4 py-3"
      />

      <ImageUploadField
        value={form.heroImage}
        onChange={(url) => updateField("heroImage", url)}
      />

      <input
        value={form.heroBadge}
        onChange={(e) => updateField("heroBadge", e.target.value)}
        placeholder="Personal Insurance"
        className="w-full border rounded-xl px-4 py-3"
      />
    </>
  );
}
