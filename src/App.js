import React from 'react'
import { Form } from 'antd'
import "antd/dist/antd.css";
import { withTheme } from '@rjsf/core'
import { Theme as AntDTheme } from '@rjsf/antd'
const JsonForm = withTheme(AntDTheme)
class App extends React.Component {
  componentDidMount() {
    this.init()
  }

  init = () => {
    new Promise((resolve, reject) => {
      resolve(10)
    }).then((data) => {
      this.setState({ a: data })
    })
  }
  render() {
    return (
      <JsonForm
        className='ant-form ant-form-inline'
        ObjectFieldTemplate={(props) => {
          return (
            <div className='ant-form ant-form-inline'>
              {props.properties.map((element) => element.content)}
            </div>
          )
        }}
        FieldTemplate={(props) => {
          const { label, required, children } = props
          return (
            <Form.Item label={label} required={required}>
              {children}
            </Form.Item>
          )
        }}
        schema={{
          type: 'object',
          properties: {
            firstName: { type: 'string', title: 'First Name' },
            lastName: { type: 'string', title: 'Last Name' }
          }
        }}
      />
    )
  }
}

export default App
