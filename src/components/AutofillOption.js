function AutofillOption(props) {
  const {value} = props;
  return (
    <div className="autofill-option" key={value}>
      {value}
    </div>
  );
}

export default AutofillOption;
