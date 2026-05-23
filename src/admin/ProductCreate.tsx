import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ProductCreate() {
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    short_description: "",
    status: "draft",

    heroTitle: "",
    heroTagline: "",
    heroBody1: "",
    heroBody2: "",
    heroImage: "",
    heroBadge: "",
  });

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const createProduct = async () => {
    setSaving(true);

    const pageContent = {
      hero: {
        title: form.heroTitle,
        tagline: form.heroTagline,
        body1: form.heroBody1,
        body2: form.heroBody2,
        heroImage: form.heroImage,
        badge: form.heroBadge,
      },

      whySection: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        cards: [],
        pullQuote: {
          eyebrow: "",
          headline: "",
          body1: "",
          body2: "",
        },
      },

      whatSection: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        intro1: "",
        intro2: "",
        cards: [],
        closing1: "",
        closing2: "",
      },

      riskMap: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        intro1: "",
        intro2: "",
        rows: [],
        closing1: "",
        closing2: "",
      },

      whoNeedsIt: {
        sectionLabel: "",
        heading: "",
        intro: "",
        rows: [],
      },

      coverage: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        intro1: "",
        intro2: "",
        groups: [],
        note1: "",
        note2: "",
      },

      claims: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        intro1: "",
        intro2: "",
        intro3: "",
        steps: [],
        gopayBullets: [],
        closing: "",
      },

      faq: {
        sectionLabel: "",
        heading: "",
        subheading: "",
        items: [],
      },

      finalCta: {
        heading: "",
        body: "",
        primaryLabel: "",
        secondaryLabel: "",
      },
    };

    const { data, error } = await supabase
      .from("insurance_products")
      .insert({
        title: form.title,
        slug: form.slug,
        short_description: form.short_description,
        status: form.status,
        sort_order: 999,
        page_content: pageContent,
      })
      .select()
      .single();

    setSaving(false);

    if (error) {
      console.error(error);
      alert("Failed to create product");
      return;
    }

    alert("Product created successfully");

    navigate(`/admin/products/${data.id}/edit`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-[#0F2240] mb-2">
          Create Product
        </h1>

        <p className="text-slate-500 mb-8">Create a new insurance product.</p>

        <div className="space-y-6">
          <input
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Product title"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={form.slug}
            onChange={(e) => updateField("slug", e.target.value)}
            placeholder="Slug e.g travel-insurance"
            className="w-full border rounded-xl px-4 py-3"
          />

          <textarea
            value={form.short_description}
            onChange={(e) => updateField("short_description", e.target.value)}
            placeholder="Short description"
            rows={3}
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            value={form.status}
            onChange={(e) => updateField("status", e.target.value)}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

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

          <input
            value={form.heroImage}
            onChange={(e) => updateField("heroImage", e.target.value)}
            placeholder="/images/travel-hero.jpg"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            value={form.heroBadge}
            onChange={(e) => updateField("heroBadge", e.target.value)}
            placeholder="Insurance Category"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            onClick={createProduct}
            disabled={saving}
            className="w-full bg-[#0F2240] text-white py-4 rounded-xl font-bold"
          >
            {saving ? "Creating..." : "Create Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
