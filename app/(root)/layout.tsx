import MobileNav from "@/components/MobileNav";
import Sidbar from "@/components/Sidbar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logedIn: User = {
    $id: "someId",
    email: "ahmed_email@gmail.com",
    userId: "userId",
    dwollaCustomerUrl: "url",
    dwollaCustomerId: "customerId",
    firstName: "Ahmed",
    lastName: "Hema",
    address1: "123 Main St",
    city: "Cairo",
    state: "Cairo Governorate",
    postalCode: "12345",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789",
  };

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
