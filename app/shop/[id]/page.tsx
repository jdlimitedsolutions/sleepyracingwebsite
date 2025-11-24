import ProductCustomizer from "@/components/ProductCustomizer";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  return <ProductCustomizer productId={id} />;
}
