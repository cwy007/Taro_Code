import   { Component } from 'react'

import { Provider } from 'react-redux'

import configStore from './store'

import './app.less'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可


const store = configStore()

class App extends Component {


  componentDidMount() { }

  componentDidShow() {

  }

  componentDidHide() { }

  componentCatchError() { }

  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
export default App


