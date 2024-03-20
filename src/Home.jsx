import profile from "./assets/profile.webp";

function Home() {
  return (
    <div className="App-header">
      <div className="bodycontent-left">
        <img src={profile} className="app-profile" alt="app-profile"/>
      </div>
      <div className="bodycontent-right">
        <h2>Muhammad Alif Darmamulia, S.Si</h2>
        <p>Associate IoT Application Developer @CAD-IT Consultant Asia</p>
        <p>Bachelor's Degree, Mathematics ITB (Currently Freshgraduate)</p>
        <p>Bandung, West Java, Indonesia 40195</p>
      </div>
    </div>
  );
}

export default Home;
