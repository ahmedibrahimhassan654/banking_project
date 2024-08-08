import MobileNav from "@/components/ui/MobileNav";
import Sidbar from "@/components/ui/Sidbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logedIn = { firstName: "Ahmed", lastName: "Hema" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidbar user={logedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={logedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
