import { Navbar, Welcome, Footer, Services, Transactions } from ".";

const TransactionTable = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-services">
      <Navbar />
    </div>
    <Transactions />
    <Footer />
  </div>
);

export default TransactionTable;