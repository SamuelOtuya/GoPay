import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import {
  PageHero,
  WhyItMatters,
  WhatIsIt,
  RiskMap,
  CoverageTable,
  HowClaims,
  RiskAssessmentForm,
  FAQ,
  FinalCTA,
  WhoNeedsIt,
} from "../components/insurance/InsurancePageComponents";

export default function InsuranceProductPage() {
  const { slug } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchProduct();
  }, [slug]);

  const fetchProduct = async () => {
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("insurance_products")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    setLoading(false);

    if (error) {
      console.error(error);
      setErrorMessage(error.message);
      return;
    }

    if (!data) {
      setErrorMessage("Product not found or not published.");
      return;
    }

    setProduct(data);
  };

  if (loading) return <p className="p-10">Loading...</p>;

  if (errorMessage) {
    return <p className="p-10 text-red-600">{errorMessage}</p>;
  }

  const content = product.page_content || {};

  return (
    <div className="min-h-screen bg-white">
      {content.hero && <PageHero {...content.hero} />}

      {content.whySection && <WhyItMatters {...content.whySection} />}

      {content.whatSection && <WhatIsIt {...content.whatSection} />}

      {content.riskMap && <RiskMap {...content.riskMap} />}

      {content.whoNeedsIt && <WhoNeedsIt {...content.whoNeedsIt} />}

      {content.coverage && <CoverageTable {...content.coverage} />}

      {content.claims && <HowClaims {...content.claims} />}

      <RiskAssessmentForm
        productLabel={product.title.replace(" Insurance", "")}
      />

      {content.faq && <FAQ {...content.faq} />}

      {content.finalCta && <FinalCTA {...content.finalCta} />}
    </div>
  );
}
