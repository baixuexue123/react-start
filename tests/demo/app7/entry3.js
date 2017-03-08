class SpringCloudNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, data: null};
  }

  componentDidMount() {
    this.props.promise.then(
      value => this.setState({data: value}),
      error => this.setState({error: error}));
  }

  render() {
    if (this.props.data.status) {
      return (
        <tr>
            <td><a href={ this.props.absolute_url }>{ this.props.name }</a></td>
            <td>{ this.props.server }</td>
            <td>{ this.props.cwd }</td>
            <td><span class="label label-success">active</span></td>
            <td>操作</td>
        </tr>
      );
    } else {
      return (
        <tr>
            <td><a href={ this.props.absolute_url }>{ this.props.name }</a></td>
            <td>{ this.props.server }</td>
            <td>{ this.props.cwd }</td>
            <td><span class="label label-danger">unactive</span></td>
            <td>操作</td>
        </tr>
      );
    }
  }
}

ReactDOM.render(
  <RepoList
    promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
  />,
  document.getElementById('sc-nodes')
);