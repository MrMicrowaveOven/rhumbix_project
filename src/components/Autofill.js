import AutofillOption  from './AutofillOption.js'

function Autofill(props) {
  const {value} = props

  const autofills = ['about', 'above', 'across', 'app', 'apple', 'appreciate', 'bad', 'ball', 'balloon', 'bell', 'cat']

  const validAutofills = autofills.filter(word => word.indexOf(value) === 0)

  return (
    <div className="autofill">
      {value && validAutofills.map(autofillOption => {
        return <AutofillOption key={autofillOption} value={autofillOption} />
      })}
    </div>
  );
}

export default Autofill;
