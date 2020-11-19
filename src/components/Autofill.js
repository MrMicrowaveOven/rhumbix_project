import AutofillOption  from './AutofillOption.js'

function Autofill(props) {
  const setValue = (selectedValue) => {
    props.setValue(selectedValue)
  }

  const {options, value} = props

  const validAutofills = options.filter(word => word.indexOf(value) === 0)

  return (
    <div className="autofill">
      {value && validAutofills.indexOf(value) === -1 && validAutofills.map(autofillOption => {
        return <AutofillOption numFilled={value.length} key={autofillOption} value={autofillOption} setValue={setValue}/>
      })}
    </div>
  );
}

export default Autofill;
