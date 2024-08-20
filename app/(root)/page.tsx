import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  type User = {
    firstName: string;
    lastName: string;
    email: string;
    // other properties...
  };
  const loggedin: User = {
    firstName: "Ahmed Ibrahim",
    lastName: "Hassan Mohamed",
    email: "ahmed_email@gmail.com",
  };
  type Bank = {
    $id: string;
    name: string;
    currentBalance: number;
    mask: string;
    // other properties...
  };
  // Example bank data
  const banks: Bank[] = [
    {
      $id: "1",
      name: "Bank A",
      currentBalance: 5000,
      mask: "1234",
    },
    {
      $id: "2",
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
            subtext="Access and mange your account and transactions efficiently"
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
