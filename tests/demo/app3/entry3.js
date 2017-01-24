var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

var data = 123;

ReactDOM.render(
  <MyTitle title={data} />,
  document.body
);

// 组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
