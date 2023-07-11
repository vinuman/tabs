const CompanyDetails = ({ company, data }) => {
  if (data) {
    const filteredData = data.filter((item) => {
      return item.company === company.company;
    });
    console.log("filteredData is", filteredData);
    return (
      <>
        {filteredData.map((item) => (
          <div>
            <h1>{item.company}</h1>
            <h2>{item.title}</h2>
            <h3>{item.duties[0]}</h3>
          </div>
        ))}
      </>
    );
  }
};

export default CompanyDetails;
