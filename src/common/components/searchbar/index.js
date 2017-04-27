import React from 'react';
import ReactDOM from 'react-dom';
import {
    Input,
    Button,
    Select,
    DatePicker,
    Cascader,
} from 'antd';
import * as _ from 'lodash';
import styles from './index.less';

const { RangePicker } = DatePicker

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      autoComplete: {},
      disabled: {},
      warnings: {},
    };
  }


  setField(field, value) {
    const {
     fields,
     warnings
    } = this.state;
    let newValue = value;
    if (Array.isArray(newValue) && newValue.length === 0) {
      newValue = undefined;
    }
    if (field.validator) {
      try {
        newValue = field.validator(value);
        warnings[field.key] = '';
      } catch (e) {
        warnings[field.key] = e.message;
      }
    }
    for (const otherField of this.props.fields) {
      const dependency = _.find(otherField.dependency, { key: field.key });
      if (dependency) {
        fields[otherField.key] = '';
      }
    }
    if (typeof field.key !== 'string') {
      fields[field.key[0]] = newValue && newValue[0];
      fields[field.key[1]] = newValue && newValue[1];
    } else {
      fields[field.key] = newValue;
    }
    this.setState({
      fields,
      warnings
    })
  }

  componentDidMount() {
    // eslint-disable-next-line no-restricted-syntax
    for (const component of this.needToEmptyStyleComponents) {
      // eslint-disable-next-line react/no-find-dom-node
      const dom = ReactDOM.findDOMNode(component);
      dom.setAttribute('style', '');
    }
  }

  componentWillUpdate(props, state) {
    // state.warnings = {};
    // state.disabled = {};
    for (const field of (props.fields || [])) {
      if (field.dependency) {
        for (const dependency of (field.dependency || [])) {
          if (!dependency.condition(state.fields[dependency.key])) {
            state.warnings[dependency.key] = dependency.message;
            state.disabled[field.key] = true;
          } else {
            state.warnings[dependency.key] = null;
            state.disabled[field.key] = false;
          }
        }
      }
    }
  }

  generateInputs(fields) {
    const components = [];
    this.needToEmptyStyleComponents = [];
    let i = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const field of fields) {
      let items = [];
      if (field.items) {
        if (field.dependency) {
          const params = [];
          for (const dependency of field.dependency) {
            params.push(this.state.fields[dependency.key]);
          }
          items = field.items(...params);
        } else {
          items = field.items();
        }
      }

      let component = null;
      switch (field.type) {
      case 'input':
      default:
        if ('autoComplete' in field) {
          component = (<Select
            combobox
            value={this.state.fields[field.key]}
            showArrow={false}
            filterOption={false}
            disabled={this.state.disabled[field.key]}
            style={{
              width: '100%',
            }}
            notFoundContent="未找到"
            onChange={(value) => {
              this.setField(field, value);
              field
                  .autoComplete(value)
                  .then((result) => {
                    const { autoComplete } = this.state;
                    autoComplete[field.key] = result;
                    this.setState({ autoComplete });
                  })
            }}
          >
            {(this.state.autoComplete[field.key] || []).map((value, key) =>
              <Select.Option key={key} value={value}>{value}</Select.Option>)}
          </Select>)
        } else {
          component = (<Input
            value={this.state.fields[field.key]}
            onChange={e => this.setField(field, e.target.value)}
          />)
        }
        break;
      case 'cascader':
        component = (<Cascader
          options={items}
          placeholder="请选择"
          value={this.state.fields[field.key]}
          disabled={this.state.disabled[field.key]}
          onChange={value => this.setField(field, value)}
          showSearch
        />);
        break;
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
        </Select>);
        break;
      case 'date':
        component = (<DatePicker
          value={this.state.fields[field.key]}
          disabled={this.state.disabled[field.key]}
          onChange={value => this.setField(field, value)}
          placeholder="请选择日期"
          showToday={false}
        />)
        break
      case 'rangePicker':
        component = (<DatePicker.RangePicker
          showTime
          format="YYYY-MM-DD HH:mm"
          value={[this.state.fields[field.key[0]], this.state.fields[field.key[1]]]}
          disabled={this.state.disabled[field.key]}
          onChange={(value) => {
            this.setField(field, value)
          }}
          showToday={false}
        />)
        break;
      case 'datetime':
        component = (<DatePicker
          showTime
          format="YYYY-MM-DD HH:mm"
          value={this.state.fields[field.key]}
          disabled={this.state.disabled[field.key]}
          onChange={value => this.setField(field, value)}
          placeholder="请选择时间"
          ref={item => this.needToEmptyStyleComponents.push(item)}
          showToday={false}
        />)
        break;
      case 'rangePicker':
        component = (<RangePicker
          format="YYYY/MM/DD"
          value={this.state.fields[field.key]}
          onChange={value => this.setField(field, value)}
        />
        )
        break;
      }
      components.push(<div key={i++} styleName="field">
        <div styleName="input">
          <div styleName="title" style={{ width: field.labelWidth || 100 }}>{field.title}:</div>
          <div style={{ width: field.width || 130 }} styleName="input">{component}</div>
        </div>
        <div styleName="warning">{this.state.warnings[field.key]}</div>
      </div>);
    }
    return components;
  }

  handleReset = () => {
    if ('onReset' in this.props) {
      this.props.onReset();
    }
    this.setState({
      fields: {},
    });
  }

  handleSubmit = () => {
    let { warnings } = this.state;
    warnings = {};
    for (const field of this.props.fields) {
      if (field.validator) {
        try {
          field.validator(this.state.fields[field.key])
        } catch (e) {
          warnings[field.key] = e.message;
        }
      }
    }
    if (Object.keys(warnings).length) {
      this.setState({
        warnings
      })
      return
    }
    this.setState({ warnings: {} });
    if ('onSubmit' in this.props) {
      const fields = {};
      // eslint-disable-next-line
      for (const key in this.state.fields) {
        let value = this.state.fields[key];
        if (value === undefined || value === null) {
          // eslint-disable-next-line
          continue;
        }
        if (Array.isArray(value)) {
          fields[key] = value;
          // eslint-disable-next-line
          continue;
        }
        if (typeof value === 'string') {
          value = value.trim();
        }
        if (value !== '') {
          fields[key] = value;
        }
      }
      this.props.onSubmit(fields);
    }
  }

  render() {
    return (<div styleName="dwd-searchbar">
      {this.generateInputs(this.props.fields)}
      <div styleName="button-group">
        { this.props.hasReset ? <Button onClick={this.handleReset} styleName="reset">重置</Button> : ''}
        <Button
          onClick={this.handleSubmit}
          styleName="search"
          icon="search"
        >
          搜索
        </Button>
      </div>
    </div>);
  }
}

SearchBar.defaultProps = {
  hasReset: true,
}