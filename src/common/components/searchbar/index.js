import React from 'react'
import {
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd'
import './index.less'

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      fields: {},
      disabled: {},
      warnings: {},
    }
  }

  setField(field, value) {
    const {
      fields,
      warnings,
    } = this.state
    let newValue = value
    if (Array.isArray(newValue) && newValue.length === 0) {
      newValue = undefined
    }
    if (field.validator) {
      try {
        newValue = field.validator(value)
        warnings[field.key] = ''
      } catch (e) {
        warnings[field.key] = e.message
      }
    }
    if (typeof field.key !== 'string') {
      fields[field.key[0]] = newValue && newValue[0]
      fields[field.key[1]] = newValue && newValue[1]
    } else {
      fields[field.key] = newValue
    }
    this.setState({
      fields: { ...fields }, // 这里配合 PureComponent 做的优化
      warnings: { ...warnings }
    })
  }

  generateInputs(fields) {
    const components = []
    let i = 0
    for (const field of fields) {
      let items = []
      if (field.items) {
        items = field.items()
      }

      let component = null
      switch (field.type) {
        case 'input':
        default:
          {
            component = (<Input
              value={this.state.fields[field.key]}
              onChange={e => this.setField(field, e.target.value)}
            />)
          }
          break
        case 'select':
          component = (<Select
            placeholder="请选择"
            value={this.state.fields[field.key] === undefined ? (field.defaultValue && field.defaultValue.toString()) : this.state.fields[field.key]}
            multiple={field.multiple}
            disabled={this.state.disabled[field.key]}
            onChange={(value) => {
              field.onChange && field.onChange(value)
              this.setField(field, value)
            }}
            style={{
              width: '100%',
            }}
          >
            {items && items.map(({ mean, value }) =>
              <Select.Option key={value.toString()} value={value.toString()}>{mean}</Select.Option>)}
          </Select>)
          break
        case 'rangePicker':
          component = (<DatePicker.RangePicker
            showTime
            format="YYYY-MM-DD"
            value={[this.state.fields[field.key[0]], this.state.fields[field.key[1]]]}
            disabled={this.state.disabled[field.key]}
            onChange={(value) => {
              this.setField(field, value)
            }}
            showToday={false}
          />)
          break
        case 'datetime':
          component = (<DatePicker
            showTime
            format="YYYY-MM-DD HH:mm"
            value={this.state.fields[field.key]}
            disabled={this.state.disabled[field.key]}
            onChange={value => this.setField(field, value)}
            placeholder="请选择时间"
            showToday={false}
          />)
          break
      }
      components.push(<div key={i++} className="field">
        <div className="input">
          <div className="title" style={{ width: field.labelWidth || 100 }}>{field.title}:</div>
          <div style={{ width: field.width || 130 }} className="input">{component}</div>
        </div>
        <div className="warning">{this.state.warnings[field.key]}</div>
      </div>)
    }
    return components
  }

  handleReset = () => {
    this.setState({
      fields: {},
    })
  }

  handleSubmit = () => {
    let { warnings } = this.state
    warnings = {}
    for (const field of this.props.fields) {
      if (field.validator) {
        try {
          field.validator(this.state.fields[field.key])
        } catch (e) {
          warnings[field.key] = e.message
        }
      }
    }
    if (Object.keys(warnings).length) {
      this.setState({
        warnings: {...warnings}
      })
      return
    }
    this.setState({ warnings: {} })
    if ('onSubmit' in this.props) {
      const fields = {}
      for (const key in this.state.fields) {
        let value = this.state.fields[key]
        if (value == undefined) {
          continue
        }
        if (Array.isArray(value)) {
          fields[key] = value
          continue
        }
        if (typeof value === 'string') {
          value = value.trim()
        }
        if (value !== '') {
          fields[key] = value
        }
      }
      this.props.onSubmit(fields)
    }
  }

  render() {
    return (
      <div className="searchbar">
        {this.generateInputs(this.props.fields)}
        <div className="buttonGroup">
          <Button onClick={this.handleReset} className="reset" icon="reload">重置</Button>
          <Button onClick={this.handleSubmit} className="search" icon="search">搜索</Button>
        </div>
      </div>
    )
  }
}

SearchBar.defaultProps = {
  hasReset: true,
}
