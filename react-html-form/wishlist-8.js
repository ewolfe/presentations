import Form from "./Form";

class MyPage extends React.Component {
  handleSubmit(event, formData) {
    http.post("api.example.com", { formData });
  }

  render() {
    return (
      <Form
        onData={this.onData}
        onChangeWithData={this.handleSubmit}
        onSubmitWithData={this.handleSubmit}
      >
        <label>Name</label>
        <input
          value={this.state.someControlledState}
          defaultValue="Jack"
          required
          data-errormessage="Would you kindly enter your name?"
          name="name"
          type="text"
        />

        <button type="submit">Submit</button>
      </Form>
    );
  }
}
