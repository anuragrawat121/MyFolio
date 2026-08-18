const SectionHeader = ({ index, kicker, title, italic }) => {
  return (
    <header className="section-header">
      <p className="section-kicker">
        <span>{index}</span>
        {kicker}
      </p>
      <h2 className="section-title">
        {title}
        {italic ? <em> {italic}</em> : null}
      </h2>
    </header>
  );
};

export default SectionHeader;
