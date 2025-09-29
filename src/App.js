import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "700px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ color: "#FF6600" }}>Delete Your Tangerine Account</h1>

      <p>
        If you would like to delete your Tangerine account and associated data, you have two options:
      </p>

      <h2>1. Delete directly in the app</h2>
      <ul>
        <li>Open the <strong>Tangerine</strong> app</li>
        <li>Go to <strong>Me &gt; Account Settings &gt; Delete Account</strong></li>
        <li>Confirm deletion. Your account and associated data will be permanently deleted.</li>
      </ul>

      <h2>2. Request by email</h2>
      <p>
        If you cannot access your account, send an email to{" "}
        <a href="mailto:support@tangerineshopper.com">support@tangerineshopper.com</a>{" "}
        from the email address linked to your account with the subject line{" "}
        <strong>“Delete My Account”</strong>.
      </p>

      <h2>What happens when you delete your account</h2>
      <ul>
        <li>Your personal information (name, email, phone, saved addresses, preferences) will be permanently deleted.</li>
        <li>
          Your order history and payment records may be retained for up to <strong>90 days</strong> for legal,
          regulatory, or tax purposes. After this period, they are permanently removed.
        </li>
      </ul>

      <p>For questions, contact <a href="mailto:support@tangerineshopper.com">support@tangerineshopper.com</a>.</p>
    </div>
  );
}

export default App;
