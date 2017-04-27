import React, { PropTypes } from 'react'
import {
  Modal,
} from 'antd'

import Form from './form'

export default class FormModal extends React.Component {

  render() {
    const {
      modalKey,
      visible,
      title,
      fields,
      onCancel,
      onOk,
      okText,
    } = this.props
    return (
      <Modal
        wrapClassName="form"
        key={modalKey}
        visible={visible}
        title={title}
        onCancel={onCancel}
        footer={null}
      >
        <Form
          fields={fields}
          onOk={onOk}
          onCancel={onCancel}
          showCancel
          okText={okText}
        />
      </Modal>
    )
  }
}

FormModal.propTypes = {
  modalKey: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(Object).isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  okText: PropTypes.string,
}
