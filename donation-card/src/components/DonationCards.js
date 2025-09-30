const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem",
        // gap: "1rem",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          width: "200px",
        }}
      >
        <h3>Education</h3>
        <p>
          <p>Support school programs and supplies books 📚</p>
        </p>
        <button>Donate Now</button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          width: "200px",
        }}
      >
        <h3>Health Care</h3>
        <p>
          <p>Privide medicines and care for families 🏥</p>
        </p>
        <button>Donate Now</button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          width: "200px",
        }}
      >
        <h3>Food Aid</h3>
        <p>
          <p>Provide meals to those in need 🥗</p>
        </p>
        <button>Donate Now</button>
      </div>
    </section>
  );
};
export default DonationCards;
