import { notFound } from "next/navigation";
import Image from "next/image";

import "../../../globals.css";
import { Container } from "@/components";
import { RecipeDetails } from "@/utils/types";
import ImageContainer from "@/components/ImageContainer/ImageContainer";

interface DetailLayoutProps {
  params: Promise<{
    id: string;
  }>;
  children: React.ReactNode;
}

export default async function DetailLayout({
  params,
  children
}: DetailLayoutProps) {
  const { id } = await params;

  const detailRecipe: RecipeDetails = await fetch(
    "https://dummyjson.com/recipes/1" + id
  ).then(res => res.json());

  if (!id) return notFound();

  const src = detailRecipe ? detailRecipe.image : "";

  return (
    <Container>
      <ImageContainer>
        <Image src={src} width={1400} height={550} alt="Backdrop" />
      </ImageContainer>
      <div>
        {children}
      </div>
    </Container>
  );
}
