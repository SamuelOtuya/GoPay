import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

import HeroSectionEditor from "./product-sections/HeroSectionEditor";
import WhySectionEditor from "./product-sections/WhySectionEditor";
import FAQEditor from "./product-sections/FAQEditor";
import WhatSectionEditor from "./product-sections/WhatSectionEditor";
import RiskMapEditor from "./product-sections/RiskMapEditor";
import WhoNeedsItEditor from "./product-sections/WhoNeedsItEditor";
import ClaimsEditor from "./product-sections/ClaimsEditor";
import FinalCTAEditor from "./product-sections/FinalCTAEditor";
import CoverageEditor from "./product-sections/CoverageEditor";
import CustomSectionEditor from "./product-sections/CustomSectionEditor";

interface FaqItem {
  q: string;
  a: string;
}

interface WhyCard {
  img: string;
  text: string;
}

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

interface RiskRow {
  img: string;
  stage: string;
  scenario: string;
  impact: string[];
  response: string;
}

interface ClaimStep {
  num: number;
  title: string;
  color: string;
  text: string;
  gopayRole?: string;
}

interface CoverageGroup {
  title: string;
  covered: string[];
  excluded: string[];
  fullWidth?: boolean;
}

export default function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [pageContent, setPageContent] = useState<any>({});
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [whyCards, setWhyCards] = useState<WhyCard[]>([]);
  const [whatCards, setWhatCards] = useState<WhatCard[]>([]);
  const [riskRows, setRiskRows] = useState<RiskRow[]>([]);
  const [coverageGroups, setCoverageGroups] = useState<CoverageGroup[]>([]);
  const [claimSteps, setClaimSteps] = useState<ClaimStep[]>([]);
  const [gopayBullets, setGopayBullets] = useState<string[]>([]);
  const [whoLayoutType, setWhoLayoutType] = useState<"table" | "cards">(
    "table",
  );

  const [whyLayoutType, setWhyLayoutType] = useState<"cards" | "table">(
    "cards",
  );

  const [whyTable, setWhyTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [],
    rows: [],
  });

  const [whatLayoutType, setWhatLayoutType] = useState<"cards" | "table">(
    "cards",
  );

  const [whatTable, setWhatTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [],
    rows: [],
  });

  const [whoTable, setWhoTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [
      "Customer Segment",
      "Who They Are",
      "Why They Need It",
      "Key Risk Exposure",
    ],
    rows: [],
  });

  const [whoCards, setWhoCards] = useState<
    { img?: string; title: string; text: string }[]
  >([]);

  const [riskLayoutType, setRiskLayoutType] = useState<
    "riskmap" | "table" | "cards"
  >("riskmap");

  const [customEnabled, setCustomEnabled] = useState(false);

  const [customLayoutType, setCustomLayoutType] = useState<"cards" | "table">(
    "cards",
  );

  const [customTable, setCustomTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [],
    rows: [],
  });

  const [customCards, setCustomCards] = useState<
    { img?: string; title: string; text: string }[]
  >([]);

  const [riskTable, setRiskTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [],
    rows: [],
  });

  const [riskCards, setRiskCards] = useState<
    { img?: string; title: string; text: string }[]
  >([]);
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

    whySectionLabel: "",
    whyHeading: "",
    whySubheading: "",
    whyPullEyebrow: "",
    whyPullHeadline: "",
    whyPullBody1: "",
    whyPullBody2: "",

    whatSectionLabel: "",
    whatHeading: "",
    whatSubheading: "",
    whatIntro1: "",
    whatIntro2: "",
    whatClosing1: "",
    whatClosing2: "",

    riskSectionLabel: "",
    riskHeading: "",
    riskSubheading: "",
    riskIntro1: "",
    riskIntro2: "",
    riskClosing1: "",
    riskClosing2: "",

    whoSectionLabel: "",
    whoHeading: "",
    whoIntro: "",

    customSectionLabel: "",
    customHeading: "",
    customIntro: "",

    claimsSectionLabel: "",
    claimsHeading: "",
    claimsSubheading: "",
    claimsIntro1: "",
    claimsIntro2: "",
    claimsIntro3: "",
    claimsClosing: "",

    finalHeading: "",
    finalBody: "",
    finalPrimaryLabel: "",
    finalSecondaryLabel: "",

    coverageSectionLabel: "",
    coverageHeading: "",
    coverageSubheading: "",
    coverageIntro1: "",
    coverageIntro2: "",
    coverageNote1: "",
    coverageNote2: "",
  });

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from("insurance_products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const content = data.page_content || {};
    const hero = content.hero || {};
    const whySection = content.whySection || {};
    setWhyLayoutType(whySection.layoutType || "cards");

    setWhyTable(
      whySection.table || {
        columns: [],
        rows: [],
      },
    );

    const whatSection = content.whatSection || {};
    setWhatLayoutType(whatSection.layoutType || "cards");

    setWhatTable(
      whatSection.table || {
        columns: [],
        rows: [],
      },
    );

    const coverage = content.coverage || {};

    const claims = content.claims || {};
    const finalCta = content.finalCta || {};
    const pullQuote = whySection.pullQuote || {};
    const faq = content.faq || {};

    const whoNeedsIt = content.whoNeedsIt || {};

    setWhoLayoutType(whoNeedsIt.layoutType || "table");

    setWhoTable(
      whoNeedsIt.table || {
        columns: [
          "Customer Segment",
          "Who They Are",
          "Why They Need It",
          "Key Risk Exposure",
        ],
        rows: whoNeedsIt.rows
          ? whoNeedsIt.rows.map((row: any) => [
              row.segment,
              row.who,
              row.why,
              row.risk,
            ])
          : [],
      },
    );

    const customSection = content.customSection || {};
    setCustomEnabled(customSection.enabled || false);

    setCustomLayoutType(customSection.layoutType || "cards");

    setCustomTable(
      customSection.table || {
        columns: [],
        rows: [],
      },
    );

    setCustomCards(customSection.cards || []);

    const riskMap = content.riskMap || {};

    setRiskLayoutType(riskMap.layoutType || "riskmap");

    setRiskTable(
      riskMap.table || {
        columns: [],
        rows: [],
      },
    );

    setRiskCards(riskMap.cards || []);

    setWhoCards(whoNeedsIt.cards || []);

    setPageContent(content);
    setFaqItems(faq.items || []);
    setWhyCards(whySection.cards || []);
    setWhatCards(whatSection.cards || []);
    setRiskRows(riskMap.rows || []);
    setCoverageGroups(coverage.groups || []);
    setClaimSteps(claims.steps || []);
    setGopayBullets(claims.gopayBullets || []);
    setForm({
      title: data.title || "",
      slug: data.slug || "",
      short_description: data.short_description || "",
      status: data.status || "draft",

      heroTitle: hero.title || "",
      heroTagline: hero.tagline || "",
      heroBody1: hero.body1 || "",
      heroBody2: hero.body2 || "",
      heroImage: hero.heroImage || "",
      heroBadge: hero.badge || "",

      whySectionLabel: whySection.sectionLabel || "",
      whyHeading: whySection.heading || "",
      whySubheading: whySection.subheading || "",
      whyPullEyebrow: pullQuote.eyebrow || "",
      whyPullHeadline: pullQuote.headline || "",
      whyPullBody1: pullQuote.body1 || "",
      whyPullBody2: pullQuote.body2 || "",

      whatSectionLabel: whatSection.sectionLabel || "",
      whatHeading: whatSection.heading || "",
      whatSubheading: whatSection.subheading || "",
      whatIntro1: whatSection.intro1 || "",
      whatIntro2: whatSection.intro2 || "",
      whatClosing1: whatSection.closing1 || "",
      whatClosing2: whatSection.closing2 || "",

      riskSectionLabel: riskMap.sectionLabel || "",
      riskHeading: riskMap.heading || "",
      riskSubheading: riskMap.subheading || "",
      riskIntro1: riskMap.intro1 || "",
      riskIntro2: riskMap.intro2 || "",
      riskClosing1: riskMap.closing1 || "",
      riskClosing2: riskMap.closing2 || "",

      whoSectionLabel: whoNeedsIt.sectionLabel || "",
      whoHeading: whoNeedsIt.heading || "",
      whoIntro: whoNeedsIt.intro || "",

      customSectionLabel: customSection.sectionLabel || "",
      customHeading: customSection.heading || "",
      customIntro: customSection.intro || "",

      claimsSectionLabel: claims.sectionLabel || "",
      claimsHeading: claims.heading || "",
      claimsSubheading: claims.subheading || "",
      claimsIntro1: claims.intro1 || "",
      claimsIntro2: claims.intro2 || "",
      claimsIntro3: claims.intro3 || "",
      claimsClosing: claims.closing || "",

      finalHeading: finalCta.heading || "",
      finalBody: finalCta.body || "",
      finalPrimaryLabel: finalCta.primaryLabel || "",
      finalSecondaryLabel: finalCta.secondaryLabel || "",

      coverageSectionLabel: coverage.sectionLabel || "",
      coverageHeading: coverage.heading || "",
      coverageSubheading: coverage.subheading || "",
      coverageIntro1: coverage.intro1 || "",
      coverageIntro2: coverage.intro2 || "",
      coverageNote1: coverage.note1 || "",
      coverageNote2: coverage.note2 || "",
    });

    setLoading(false);
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const saveProduct = async () => {
    setSaving(true);

    const newPageContent = {
      ...pageContent,

      hero: {
        ...pageContent.hero,
        title: form.heroTitle,
        tagline: form.heroTagline,
        body1: form.heroBody1,
        body2: form.heroBody2,
        heroImage: form.heroImage,
        badge: form.heroBadge,
      },

      whySection: {
        ...pageContent.whySection,
        layoutType: whyLayoutType,
        sectionLabel: form.whySectionLabel,
        heading: form.whyHeading,
        subheading: form.whySubheading,

        cards: whyCards,

        table: whyTable,

        pullQuote: {
          ...pageContent.whySection?.pullQuote,
          eyebrow: form.whyPullEyebrow,
          headline: form.whyPullHeadline,
          body1: form.whyPullBody1,
          body2: form.whyPullBody2,
        },
      },

      whatSection: {
        ...pageContent.whatSection,
        layoutType: whatLayoutType,
        sectionLabel: form.whatSectionLabel,
        heading: form.whatHeading,
        subheading: form.whatSubheading,
        intro1: form.whatIntro1,
        intro2: form.whatIntro2,
        cards: whatCards,
        table: whatTable,
        closing1: form.whatClosing1,
        closing2: form.whatClosing2,
      },

      riskMap: {
        ...pageContent.riskMap,

        layoutType: riskLayoutType,

        sectionLabel: form.riskSectionLabel,
        heading: form.riskHeading,
        subheading: form.riskSubheading,
        intro1: form.riskIntro1,
        intro2: form.riskIntro2,

        rows: riskRows,

        table: riskTable,

        cards: riskCards,

        closing1: form.riskClosing1,
        closing2: form.riskClosing2,
      },

      coverage: {
        ...pageContent.coverage,
        sectionLabel: form.coverageSectionLabel,
        heading: form.coverageHeading,
        subheading: form.coverageSubheading,
        intro1: form.coverageIntro1,
        intro2: form.coverageIntro2,
        groups: coverageGroups,
        note1: form.coverageNote1,
        note2: form.coverageNote2,
      },

      whoNeedsIt: {
        ...pageContent.whoNeedsIt,
        layoutType: whoLayoutType,
        sectionLabel: form.whoSectionLabel,
        heading: form.whoHeading,
        intro: form.whoIntro,
        table: whoTable,
        cards: whoCards,
      },

      customSection: {
        enabled: customEnabled,

        layoutType: customLayoutType,

        sectionLabel: form.customSectionLabel,
        heading: form.customHeading,
        intro: form.customIntro,

        table: customTable,

        cards: customCards,
      },

      claims: {
        ...pageContent.claims,
        sectionLabel: form.claimsSectionLabel,
        heading: form.claimsHeading,
        subheading: form.claimsSubheading,
        intro1: form.claimsIntro1,
        intro2: form.claimsIntro2,
        intro3: form.claimsIntro3,
        steps: claimSteps,
        gopayBullets,
        closing: form.claimsClosing,
      },

      finalCta: {
        ...pageContent.finalCta,
        heading: form.finalHeading,
        body: form.finalBody,
        primaryLabel: form.finalPrimaryLabel,
        secondaryLabel: form.finalSecondaryLabel,
      },

      faq: {
        ...pageContent.faq,
        items: faqItems,
      },
    };

    const { error } = await supabase
      .from("insurance_products")
      .update({
        title: form.title.trim(),
        slug: form.slug.trim().toLowerCase(),
        short_description: form.short_description.trim(),
        status: form.status.trim().toLowerCase(),
        page_content: newPageContent,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    setSaving(false);

    if (error) {
      console.error(error);
      alert("Failed to save product");
      return;
    }

    alert("Product saved successfully");
    navigate("/admin/products");
  };

  if (loading) return <div className="p-10">Loading product...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-[#0F2240] mb-2">Edit Product</h1>

        <p className="text-slate-500 mb-8">
          Edit product content. Changes update the live frontend after saving.
        </p>

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
            placeholder="Slug"
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

          <HeroSectionEditor form={form} updateField={updateField} />

          <WhySectionEditor
            form={form}
            updateField={updateField}
            whyCards={whyCards}
            setWhyCards={setWhyCards}
            whyLayoutType={whyLayoutType}
            setWhyLayoutType={setWhyLayoutType}
            whyTable={whyTable}
            setWhyTable={setWhyTable}
          />

          <WhatSectionEditor
            form={form}
            updateField={updateField}
            whatCards={whatCards}
            setWhatCards={setWhatCards}
            whatLayoutType={whatLayoutType}
            setWhatLayoutType={setWhatLayoutType}
            whatTable={whatTable}
            setWhatTable={setWhatTable}
          />

          <RiskMapEditor
            form={form}
            updateField={updateField}
            riskLayoutType={riskLayoutType}
            setRiskLayoutType={setRiskLayoutType}
            riskRows={riskRows}
            setRiskRows={setRiskRows}
            riskTable={riskTable}
            setRiskTable={setRiskTable}
            riskCards={riskCards}
            setRiskCards={setRiskCards}
          />

          <WhoNeedsItEditor
            form={form}
            updateField={updateField}
            whoLayoutType={whoLayoutType}
            setWhoLayoutType={setWhoLayoutType}
            whoTable={whoTable}
            setWhoTable={setWhoTable}
            whoCards={whoCards}
            setWhoCards={setWhoCards}
          />

          <CustomSectionEditor
            form={form}
            updateField={updateField}
            customEnabled={customEnabled}
            setCustomEnabled={setCustomEnabled}
            customLayoutType={customLayoutType}
            setCustomLayoutType={setCustomLayoutType}
            customTable={customTable}
            setCustomTable={setCustomTable}
            customCards={customCards}
            setCustomCards={setCustomCards}
          />

          <CoverageEditor
            form={form}
            updateField={updateField}
            coverageGroups={coverageGroups}
            setCoverageGroups={setCoverageGroups}
          />

          <ClaimsEditor
            form={form}
            updateField={updateField}
            claimSteps={claimSteps}
            setClaimSteps={setClaimSteps}
            gopayBullets={gopayBullets}
            setGopayBullets={setGopayBullets}
          />

          <FAQEditor faqItems={faqItems} setFaqItems={setFaqItems} />

          <FinalCTAEditor form={form} updateField={updateField} />

          <button
            onClick={saveProduct}
            disabled={saving}
            className="w-full bg-[#0F2240] text-white py-4 rounded-xl font-bold"
          >
            {saving ? "Saving..." : "Save Product"}
          </button>
        </div>
      </div>
    </div>
  );
}
