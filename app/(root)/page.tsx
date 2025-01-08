import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

type User = {
  $id: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth?: string; // Optional
};

type BankAndAccount = {
  // Merge Bank and Account properties
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  sharableId: string;
  name: string;
  currentBalance: number;
  mask: string;
  id: string;
  availableBalance: number;
  officialName: string;
  institutionId: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
};

const loggedin: User = {
  $id: "someId",
  userId: "userId",
  dwollaCustomerUrl: "url",
  dwollaCustomerId: "customerId",
  firstName: "Ahmed Ibrahim",
  lastName: "Hassan Mohamed",
  email: "ahmed_email@gmail.com",
  address1: "123 Main St",
  city: "Cairo",
  state: "Cairo Governorate",
  postalCode: "12345",
};

const banks: BankAndAccount[] = [
  {
    $id: "1",
    accountId: "acc123",
    bankId: "bank123",
    accessToken: "token123",
    fundingSourceUrl: "url123",
    userId: "userId1",
    sharableId: "sharableId1",
    name: "Bank A",
    currentBalance: 5000,
    mask: "1234",
    id: "id1",
    availableBalance: 4000,
    officialName: "Bank A Official",
    institutionId: "inst123",
    type: "checking",
    subtype: "personal",
    appwriteItemId: "appwriteId1",
  },
];

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedin?.firstName || "guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={banks.length}
            totalCurrentBalance={banks.reduce(
              (sum, bank) => sum + bank.currentBalance,
              0
            )}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedin} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
