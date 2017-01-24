// 组件的生命周期分成三个状态:
// Mounting：已插入真实 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真实 DOM

// React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用
// 三种状态共计五种处理函数:
// componentWillMount()
// componentDidMount()
// componentWillUpdate(object nextProps, object nextState)
// componentDidUpdate(object prevProps, object prevState)
// componentWillUnmount()

// 此外，React 还提供两种特殊状态的处理函数
// componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
// shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

var Hello = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    };
  },

  componentDidMount: function () {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  },

  render: function () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Hello name="world"/>,
  document.getElementById('root')
);

// hello组件加载以后, 通过 componentDidMount 方法设置一个定时器，每隔100毫秒，就重新设置组件的透明度，从而引发重新渲染
// style={{opacity: this.state.opacity}} not style="opacity:{this.state.opacity};"
