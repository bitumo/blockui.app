import HeroCentered from "./blocks/hero/HeroCentered.astro";
import HeroMinimal from "./blocks/hero/HeroMinimal.astro";
import FeaturesBento from "./blocks/features/FeaturesBento.astro";
import FeaturesMinimal from "./blocks/features/FeaturesMinimal.astro";
import PricingCentered from "./blocks/pricing/PricingCentered.astro";
import PricingMinimal from "./blocks/pricing/PricingMinimal.astro";
import CtaCentered from "./blocks/cta/CtaCentered.astro";
import CtaSplit from "./blocks/cta/CtaSplit.astro";
import CtaBanner from "./blocks/cta/CtaBanner.astro";
import FooterCentered from "./blocks/footer/FooterCentered.astro";
import FooterColumns from "./blocks/footer/FooterColumns.astro";
import FooterDark from "./blocks/footer/FooterDark.astro";
import TestimonialsGrid from "./blocks/testimonials/TestimonialsGrid.astro";
import TestimonialsFeatured from "./blocks/testimonials/TestimonialsFeatured.astro";
import TestimonialsMinimal from "./blocks/testimonials/TestimonialsMinimal.astro";
import LogoCloudSimple from "./blocks/logocloud/LogoCloudSimple.astro";
import LogoCloudGrid from "./blocks/logocloud/LogoCloudGrid.astro";
import LogoCloudDark from "./blocks/logocloud/LogoCloudDark.astro";
import CodeDemoSplit from "./blocks/codedemo/CodeDemoSplit.astro";
import CodeDemoTerminal from "./blocks/codedemo/CodeDemoTerminal.astro";
import CodeDemoMinimal from "./blocks/codedemo/CodeDemoMinimal.astro";
import ContactSplit from "./blocks/contact/ContactSplit.astro";
import ContactCentered from "./blocks/contact/ContactCentered.astro";
import ContactMinimal from "./blocks/contact/ContactMinimal.astro";
import IntegrationsGrid from "./blocks/integrations/IntegrationsGrid.astro";
import IntegrationsBento from "./blocks/integrations/IntegrationsBento.astro";
import IntegrationsMinimal from "./blocks/integrations/IntegrationsMinimal.astro";
import FaqAccordion from "./blocks/faq/FaqAccordion.astro";
import FaqSplit from "./blocks/faq/FaqSplit.astro";
import FaqMinimal from "./blocks/faq/FaqMinimal.astro";

export type Block = {
  description: string;
  variants: BlockVariant[];
};

export type BlockVariant = {
  /** Top-level category, derived from the folder name. e.g. "hero", "cta", "pricing" */
  category: string;
  /** URL-safe identifier. e.g. "hero-centered" */
  slug: string;
  component: (_props: Record<string, never>) => unknown;
};

function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function defineVariant(component: any): BlockVariant {
  const { moduleId } = component;
  const [category, fileName] = moduleId.split("/").slice(-2);
  const slug = toKebabCase(fileName.replace(".astro", ""));
  return { category, slug, component };
}

const hero: Block = {
  description: "Full-width landing sections with headline, sub-copy, and calls to action.",
  variants: [defineVariant(HeroCentered), defineVariant(HeroMinimal)],
};

const features: Block = {
  description: "Highlight product capabilities with icons, descriptions, and visual layouts.",
  variants: [defineVariant(FeaturesBento), defineVariant(FeaturesMinimal)],
};

const pricing: Block = {
  description: "Pricing tables with tiered plans, feature lists, and clear calls to action.",
  variants: [defineVariant(PricingCentered), defineVariant(PricingMinimal)],
};

const cta: Block = {
  description: "Conversion-focused sections that prompt visitors to take action.",
  variants: [defineVariant(CtaCentered), defineVariant(CtaSplit), defineVariant(CtaBanner)],
};

const footer: Block = {
  description: "Site footers with navigation links, brand copy, and legal text.",
  variants: [defineVariant(FooterCentered), defineVariant(FooterColumns), defineVariant(FooterDark)],
};

const testimonials: Block = {
  description: "Social proof sections with quotes, author attribution, and star ratings.",
  variants: [defineVariant(TestimonialsGrid), defineVariant(TestimonialsFeatured), defineVariant(TestimonialsMinimal)],
};

const logocloud: Block = {
  description: "Brand trust strips showing partner or customer logos.",
  variants: [defineVariant(LogoCloudSimple), defineVariant(LogoCloudGrid), defineVariant(LogoCloudDark)],
};

const codedemo: Block = {
  description: "Code snippet displays and step-by-step technical walkthroughs.",
  variants: [defineVariant(CodeDemoSplit), defineVariant(CodeDemoTerminal), defineVariant(CodeDemoMinimal)],
};

const contact: Block = {
  description: "Contact forms with email fields, message inputs, and supporting contact details.",
  variants: [defineVariant(ContactSplit), defineVariant(ContactCentered), defineVariant(ContactMinimal)],
};

const integrations: Block = {
  description: "Showcase compatible tools, services, and platforms in your tech stack.",
  variants: [defineVariant(IntegrationsGrid), defineVariant(IntegrationsBento), defineVariant(IntegrationsMinimal)],
};

const faq: Block = {
  description: "Frequently asked questions with expandable answers or static layouts.",
  variants: [defineVariant(FaqAccordion), defineVariant(FaqSplit), defineVariant(FaqMinimal)],
};

export const blocks: Record<string, Block> = { hero, features, pricing, cta, footer, testimonials, logocloud, codedemo, contact, integrations, faq };
