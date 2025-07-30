import "./styles.css";

function SimpsonsCard() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  return (
    <div className="card">
      <img className="avatar" src={homerSimpson.avatarURL} alt="User Avatar" />
      <p className="card_info">
        <span className="info_title">Fullname:</span>
        {`${homerSimpson.firstName} ${homerSimpson.lastName}`}
      </p>
      <p className="card_info">
        <span className="info_title">Job:</span>
        {homerSimpson.job}
      </p>
      <p className="card_info">
        <span className="info_title">Hobby:</span>
        {homerSimpson.hobby}
      </p>
    </div>
  );
}

export default SimpsonsCard;
