import Form from "./Form";

class MyPage extends React.Component {
  handleSubmit(event, formData) {
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
