'use strict';

var RepoList = React.createClass({
  displayName: 'RepoList',

  getInitialState: function getInitialState() {
    return { loading: true, error: null, data: null };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    this.props.promise.then(function (value) {
      return _this.setState({ loading: false, data: value });
    }, function (error) {
      return _this.setState({ loading: false, error: error });
    });
  },


  render: function render() {
    if (this.state.loading) {
      return React.createElement(
        'span',
        null,
        'Loading...'
      );
    } else if (this.state.error !== null) {
      return React.createElement(
        'span',
        null,
        'Error: ',
        this.state.error.message
      );
    } else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { href: repo.html_url },
            repo.name
          ),
          ' (',
          repo.stargazers_count,
          ' stars) ',
          React.createElement('br', null),
          ' ',
          repo.description
        );
      });
      return React.createElement(
        'main',
        null,
        React.createElement(
          'h1',
          null,
          'Most Popular JavaScript Projects in Github'
        ),
        React.createElement(
          'ol',
          null,
          repoList
        )
      );
    }
  }
});

ReactDOM.render(React.createElement(RepoList, {
  promise: $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')
}), document.body);
