const Company = ({ data, handleCompanyTabs }) => {
  if (data) {
    return (
      <>
        <h3>Company list</h3>
        {data.map((item) => (
          <div key={item.id}>
            <button onClick={() => handleCompanyTabs(item)}>
              {item.company}
            </button>
          </div>
        ))}
      </>
    );
  }
};

export default Company;
