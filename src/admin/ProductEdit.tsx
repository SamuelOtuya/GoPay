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
import CustomSection2Editor from "./product-sections/CustomSection2Editor";

type CardDisplay = "grid" | "horizontal" | "auto";

interface FaqItem {
  q: string;
  a: string;
}

interface WhyCard {
  img: string;
  title: string;
  text: string;
  bullets?: string[];
  secondaryHeading?: string;
  secondaryBullets?: string[];
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
  secondaryHeading?: string;
  secondaryBullets?: string[];
}

interface GenericCard {
  img?: string;
  title: string;
  text: string;
  bullets?: string[];
  secondaryHeading?: string;
  secondaryBullets?: string[];
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
  img?: string;
  bullets?: string[];
  gopayRole?: string;
}

interface CoverageGroup {
  title: string;
  covered: string[];
  excluded: string[];
  fullWidth?: boolean;
}

interface FlexibleTable {
  columns: string[];
  rows: string[][];
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

  const [whyLayoutType, setWhyLayoutType] = useState<"cards" | "table">(
    "cards",
  );
  const [whatLayoutType, setWhatLayoutType] = useState<"cards" | "table">(
    "cards",
  );
  const [riskLayoutType, setRiskLayoutType] = useState<
    "riskmap" | "table" | "cards"
  >("riskmap");
  const [whoLayoutType, setWhoLayoutType] = useState<"table" | "cards">(
    "table",
  );
  const [customLayoutType, setCustomLayoutType] = useState<"cards" | "table">(
    "cards",
  );

  const [whyCardDisplay, setWhyCardDisplay] = useState<CardDisplay>("grid");
  const [whatCardDisplay, setWhatCardDisplay] = useState<CardDisplay>("grid");
  const [riskCardDisplay, setRiskCardDisplay] = useState<CardDisplay>("grid");
  const [whoCardDisplay, setWhoCardDisplay] = useState<CardDisplay>("grid");
  const [customCardDisplay, setCustomCardDisplay] =
    useState<CardDisplay>("grid");

  const [whyTable, setWhyTable] = useState<FlexibleTable>({
    columns: [],
    rows: [],
  });
  const [whatTable, setWhatTable] = useState<FlexibleTable>({
    columns: [],
    rows: [],
  });
  const [riskTable, setRiskTable] = useState<FlexibleTable>({
    columns: [],
    rows: [],
  });
  const [customTable, setCustomTable] = useState<FlexibleTable>({
    columns: [],
    rows: [],
  });

  const [whoTable, setWhoTable] = useState<FlexibleTable>({
    columns: [
      "Customer Segment",
      "Who They Are",
      "Why They Need It",
      "Key Risk Exposure",
    ],
    rows: [],
  });
  const [coverageLayoutType, setCoverageLayoutType] = useState<
    "cards" | "table"
  >("cards");

  const [coverageTable, setCoverageTable] = useState<{
    columns: string[];
    rows: string[][];
  }>({
    columns: [],
    rows: [],
  });

  const [riskCards, setRiskCards] = useState<GenericCard[]>([]);
  const [whoCards, setWhoCards] = useState<GenericCard[]>([]);
  const [customCards, setCustomCards] = useState<GenericCard[]>([]);

  const [customEnabled, setCustomEnabled] = useState(false);
  const [custom2Enabled, setCustom2Enabled] = useState(false);

  const [custom2LayoutType, setCustom2LayoutType] = useState<"cards" | "table">(
    "cards",
  );

  const [custom2CardDisplay, setCustom2CardDisplay] =
    useState<CardDisplay>("grid");

  const [custom2Table, setCustom2Table] = useState<FlexibleTable>({
    columns: [],
    rows: [],
  });

  const [custom2Cards, setCustom2Cards] = useState<GenericCard[]>([]);

  const [claimsCardDisplay, setClaimsCardDisplay] = useState<
    "grid" | "horizontal" | "auto"
  >("grid");

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

    custom2SectionLabel: "",
    custom2Heading: "",
    custom2Intro: "",

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
    const whatSection = content.whatSection || {};
    const riskMap = content.riskMap || {};
    const whoNeedsIt = content.whoNeedsIt || {};
    const customSection = content.customSection || {};
    const customSection2 = content.customSection2 || {};
    const coverage = content.coverage || {};
    setCoverageLayoutType(coverage.layoutType || "cards");

    setCoverageTable(
      coverage.table || {
        columns: [],
        rows: [],
      },
    );
    const claims = content.claims || {};
    const finalCta = content.finalCta || {};
    const pullQuote = whySection.pullQuote || {};
    const faq = content.faq || {};

    setPageContent(content);

    setWhyLayoutType(whySection.layoutType || "cards");
    setWhatLayoutType(whatSection.layoutType || "cards");
    setRiskLayoutType(riskMap.layoutType || "riskmap");
    setWhoLayoutType(whoNeedsIt.layoutType || "table");
    setCustomLayoutType(customSection.layoutType || "cards");

    setWhyCardDisplay(whySection.cardDisplay || "grid");
    setWhatCardDisplay(whatSection.cardDisplay || "grid");
    setRiskCardDisplay(riskMap.cardDisplay || "grid");
    setWhoCardDisplay(whoNeedsIt.cardDisplay || "grid");
    setCustomCardDisplay(customSection.cardDisplay || "grid");

    setWhyTable(whySection.table || { columns: [], rows: [] });
    setWhatTable(whatSection.table || { columns: [], rows: [] });
    setRiskTable(riskMap.table || { columns: [], rows: [] });
    setCustomTable(customSection.table || { columns: [], rows: [] });

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

    setWhyCards(whySection.cards || []);
    setWhatCards(whatSection.cards || []);
    setRiskRows(riskMap.rows || []);
    setRiskCards(riskMap.cards || []);
    setWhoCards(whoNeedsIt.cards || []);
    setCustomCards(customSection.cards || []);
    setCustom2LayoutType(customSection2.layoutType || "cards");

    setCustom2CardDisplay(customSection2.cardDisplay || "grid");

    setCustom2Table(
      customSection2.table || {
        columns: [],
        rows: [],
      },
    );

    setCustom2Cards(customSection2.cards || []);

    setCustom2Enabled(customSection2.enabled || false);
    setCustomEnabled(customSection.enabled || false);

    setCoverageGroups(coverage.groups || []);
    setClaimSteps(claims.steps || []);
    setClaimsCardDisplay(content.claims?.cardDisplay || "grid");
    setGopayBullets(claims.gopayBullets || []);
    setFaqItems(faq.items || []);

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

      custom2SectionLabel: customSection2.sectionLabel || "",

      custom2Heading: customSection2.heading || "",

      custom2Intro: customSection2.intro || "",

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
        cardDisplay: whyCardDisplay,
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
        cardDisplay: whatCardDisplay,
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
        cardDisplay: riskCardDisplay,
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

      whoNeedsIt: {
        ...pageContent.whoNeedsIt,
        layoutType: whoLayoutType,
        cardDisplay: whoCardDisplay,
        sectionLabel: form.whoSectionLabel,
        heading: form.whoHeading,
        intro: form.whoIntro,
        table: whoTable,
        cards: whoCards,
      },

      customSection: {
        enabled: customEnabled,
        layoutType: customLayoutType,
        cardDisplay: customCardDisplay,
        sectionLabel: form.customSectionLabel,
        heading: form.customHeading,
        intro: form.customIntro,
        table: customTable,
        cards: customCards,
      },

      customSection2: {
        enabled: custom2Enabled,

        layoutType: custom2LayoutType,

        cardDisplay: custom2CardDisplay,

        sectionLabel: form.custom2SectionLabel,

        heading: form.custom2Heading,

        intro: form.custom2Intro,

        table: custom2Table,

        cards: custom2Cards,
      },

      coverage: {
        ...pageContent.coverage,
        layoutType: coverageLayoutType,
        sectionLabel: form.coverageSectionLabel,
        heading: form.coverageHeading,
        subheading: form.coverageSubheading,
        intro1: form.coverageIntro1,
        intro2: form.coverageIntro2,
        groups: coverageGroups,
        table: coverageTable,
        note1: form.coverageNote1,
        note2: form.coverageNote2,
      },

      claims: {
        ...pageContent.claims,
        sectionLabel: form.claimsSectionLabel,
        heading: form.claimsHeading,
        subheading: form.claimsSubheading,
        intro1: form.claimsIntro1,
        intro2: form.claimsIntro2,
        intro3: form.claimsIntro3,
        cardDisplay: claimsCardDisplay,
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
            whyCardDisplay={whyCardDisplay}
            setWhyCardDisplay={setWhyCardDisplay}
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
            whatCardDisplay={whatCardDisplay}
            setWhatCardDisplay={setWhatCardDisplay}
            whatTable={whatTable}
            setWhatTable={setWhatTable}
          />

          <RiskMapEditor
            form={form}
            updateField={updateField}
            riskLayoutType={riskLayoutType}
            setRiskLayoutType={setRiskLayoutType}
            riskCardDisplay={riskCardDisplay}
            setRiskCardDisplay={setRiskCardDisplay}
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
            whoCardDisplay={whoCardDisplay}
            setWhoCardDisplay={setWhoCardDisplay}
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
            customCardDisplay={customCardDisplay}
            setCustomCardDisplay={setCustomCardDisplay}
            customTable={customTable}
            setCustomTable={setCustomTable}
            customCards={customCards}
            setCustomCards={setCustomCards}
          />

          <CoverageEditor
            form={form}
            updateField={updateField}
            coverageLayoutType={coverageLayoutType}
            setCoverageLayoutType={setCoverageLayoutType}
            coverageTable={coverageTable}
            setCoverageTable={setCoverageTable}
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
            claimsCardDisplay={claimsCardDisplay}
            setClaimsCardDisplay={setClaimsCardDisplay}
          />

          <CustomSection2Editor
            form={form}
            updateField={updateField}
            custom2Enabled={custom2Enabled}
            setCustom2Enabled={setCustom2Enabled}
            custom2LayoutType={custom2LayoutType}
            setCustom2LayoutType={setCustom2LayoutType}
            custom2CardDisplay={custom2CardDisplay}
            setCustom2CardDisplay={setCustom2CardDisplay}
            custom2Table={custom2Table}
            setCustom2Table={setCustom2Table}
            custom2Cards={custom2Cards}
            setCustom2Cards={setCustom2Cards}
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
