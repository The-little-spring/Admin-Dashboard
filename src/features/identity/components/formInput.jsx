const FormInput = (props) => {
  const { name, placeholder, type } = props;

  return (
    <div className="mb-3">
      <input
        name={name}
        className="form-control form-control-lg mb-2"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
