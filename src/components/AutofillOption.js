function AutofillOption(props) {
  const {value} = props;

  const handleClick = (e) => {
    const text = e.target.innerText
  }

  return (
    <div className="autofill-option" key={value} onClick={handleClick}>
      {value}
    </div>
  );
}

export default AutofillOption;
