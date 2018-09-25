class Form extends React.Component {
  handleChange() {
    let values = {};
    for (let i = 0; i < this.form.elements.length; i += 1) {
      const element = this.form.elements[i];
      values[element.name] = element.value;
    }
    // do something with `values`
  }

  render() {
    return (
      <form
        onChange={this.handleChange}
        ref={element => {
          this.form = element;
        }}
      >
        {this.props.children}
      </form>
    );
  }
}
