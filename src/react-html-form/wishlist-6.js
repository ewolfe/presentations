import Form from "./Form";

class MyPage extends React.Component {
  handleSubmit(event, formData) {
    // formData = {
    //   values: {
    //     name: "ewolfe"
    //   },
    //   errors: {
    //     name: "Please Fill Out this Field"
    //   },
    //   dirty: {
    //     name: true // the value is different from the default value
    //   },
    //   touched: {
    //     name: true // the input has been focused at least once
    //   },
    //   blurred: {
    //     name: true // the input has been blurred at least once
    //   },
    //   isDirty: true, // at least one field in the form is dirty
    //   isValid: true, // the entire form is valid
    //   isValidating: false, // we’ll need this for async validations
    //   submitCount: 1 // attempts the user took before they entered valid data
    // };
    http.post("api.example.com", { formData });
  }

  render() {
    return (
      <Form onSubmitWithData={this.handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" />
        <button type="submit">Submit</button>
      </Form>
    );
  }
}
