import { notFound } from "next/navigation";
import Image from "next/image";

import "../../../globals.css";
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
    "https://dummyjson.com/recipes/" + id
  ).then(res => res.json());

  if (!id) return notFound();

  const src = detailRecipe ? detailRecipe.image : "";

  return (
    <div>
      <ImageContainer>
        <Image
          src={src}
          width={1800}
          height={1800}
          priority
          alt="Backdrop"
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      <div>
        {children}
      </div>
    </div>
  );
}
