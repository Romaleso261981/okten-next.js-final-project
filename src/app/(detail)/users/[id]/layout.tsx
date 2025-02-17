import "../../../globals.css";

interface DetailLayoutProps {
  params: Promise<{
    id: string;
  }>;
  children: React.ReactNode;
}

export default async function DetailLayout({ children }: DetailLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}
