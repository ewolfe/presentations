class MyPage extends React.Component {
  handleSubmit(event) {
    http.post("api.example.com", { whereDoesTheDataComeFrom });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
