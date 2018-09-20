import Form from "./Form";

class MyPage extends React.Component {
  handleData(formData) {
    this.setState(formData);
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
        handleOnBlur={{
          name: value => {
            return value === "Jack"
              ? undefined // undefined means no error
              : "Jack, please enter your name"; // a string means there as an error
          }
        }}
      >
        <label>Name</label>
        <input
          required
          // pattern="..." // works as expected
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
