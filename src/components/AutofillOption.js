function AutofillOption(props) {
  const {numFilled, value} = props;

  const handleClick = (e) => {
    const text = e.target.innerText
    props.setValue(text)
  }

  return (
    <div className="autofill-option" key={value} onClick={handleClick}>
      <b>{value.slice(0,numFilled)}</b>{value.slice(numFilled)}
    </div>
  );
}

export default AutofillOption;
