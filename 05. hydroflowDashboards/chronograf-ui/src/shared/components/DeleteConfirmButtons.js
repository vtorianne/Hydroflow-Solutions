import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

import OnClickOutside from 'shared/components/OnClickOutside'
import ConfirmButtons from 'shared/components/ConfirmButtons'

const DeleteButton = ({onClickDelete, buttonSize}) =>
  <button
    className={classnames('btn btn-danger table--show-on-row-hover', {
      [buttonSize]: buttonSize,
    })}
    onClick={onClickDelete}
  >
    Delete
  </button>

class DeleteConfirmButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isConfirming: false,
    }
    this.handleClickDelete = ::this.handleClickDelete
    this.handleCancel = ::this.handleCancel
  }

  handleClickDelete() {
    this.setState({isConfirming: true})
  }

  handleCancel() {
    this.setState({isConfirming: false})
  }

  handleClickOutside() {
    this.setState({isConfirming: false})
  }

  render() {
    const {onDelete, item, buttonSize} = this.props
    const {isConfirming} = this.state

    return isConfirming
      ? <ConfirmButtons
          onConfirm={onDelete}
          item={item}
          onCancel={this.handleCancel}
          buttonSize={buttonSize}
        />
      : <DeleteButton
          onClickDelete={this.handleClickDelete}
          buttonSize={buttonSize}
        />
  }
}

const {func, oneOfType, shape, string} = PropTypes

DeleteButton.propTypes = {
  onClickDelete: func.isRequired,
  buttonSize: string,
}

DeleteConfirmButtons.propTypes = {
  item: oneOfType([(string, shape())]),
  onDelete: func.isRequired,
  buttonSize: string,
}

DeleteConfirmButtons.defaultProps = {
  buttonSize: 'btn-sm',
}

export default OnClickOutside(DeleteConfirmButtons)
