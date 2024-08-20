import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
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
    // Add any other required properties...
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
    // Add any other required property values...
  };

  type Bank = {
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
    // Add any other required properties...
  };

  const banks: Bank[] = [
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
    },
    {
      $id: "2",
      accountId: "acc456",
      bankId: "bank456",
      accessToken: "token456",
      fundingSourceUrl: "url456",
      userId: "userId2",
      sharableId: "sharableId2",
      name: "Bank B",
      currentBalance: 3000,
      mask: "5678",
    },
  ];

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
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedin} transactions={[]} banks={banks} />
    </section>
  );
};

export default Home;
