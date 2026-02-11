import { Toaster } from "@/components/ui/sonner";

export default function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      {children}
      <Toaster/>
    </>
  );
}
