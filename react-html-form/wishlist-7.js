import Form from "./Form";

class MyPage extends React.Component {
  handleData(formData) {
    this.setState(formData); // formData has an `errors` object
  }

  handleSubmit(event, formData) {
    http.post("api.example.com", { formData });
  }

  render() {
    return (
      <Form
        domValidation={false} // false by default
        onData={this.handleData}
        onSubmitWithData={this.handleSubmit}
      >
        <label>Name</label>
        <input
          required
          data-errormessage="Would you kindly enter your name?"
          name="name"
          type="text"
        />
        {this.state.errors.name && <p>Error: {this.state.errors.name}</p>}

        <button type="submit">Submit</button>
      </Form>
    );
  }
}
