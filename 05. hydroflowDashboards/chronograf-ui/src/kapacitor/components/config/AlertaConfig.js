import React, {PropTypes} from 'react'

import RedactedInput from './RedactedInput'

const {bool, func, shape, string} = PropTypes

const AlertaConfig = React.createClass({
  propTypes: {
    config: shape({
      options: shape({
        environment: string,
        origin: string,
        token: bool,
        url: string,
      }).isRequired,
    }).isRequired,
    onSave: func.isRequired,
  },

  handleSaveAlert(e) {
    e.preventDefault()

    const properties = {
      environment: this.environment.value,
      origin: this.origin.value,
      token: this.token.value,
      url: this.url.value,
    }

    this.props.onSave(properties)
  },

  render() {
    const {environment, origin, token, url} = this.props.config.options

    return (
      <form onSubmit={this.handleSaveAlert}>
        <div className="form-group col-xs-12">
          <label htmlFor="environment">Environment</label>
          <input
            className="form-control"
            id="environment"
            type="text"
            ref={r => (this.environment = r)}
            defaultValue={environment || ''}
          />
        </div>

        <div className="form-group col-xs-12">
          <label htmlFor="origin">Origin</label>
          <input
            className="form-control"
            id="origin"
            type="text"
            ref={r => (this.origin = r)}
            defaultValue={origin || ''}
          />
        </div>

        <div className="form-group col-xs-12">
          <label htmlFor="token">Token</label>
          <RedactedInput
            defaultValue={token}
            id="token"
            refFunc={r => (this.token = r)}
          />
        </div>

        <div className="form-group col-xs-12">
          <label htmlFor="url">User</label>
          <input
            className="form-control"
            id="url"
            type="text"
            ref={r => (this.url = r)}
            defaultValue={url || ''}
          />
        </div>

        <div className="form-group-submit col-xs-12 text-center">
          <button className="btn btn-primary" type="submit">
            Update Alerta Config
          </button>
        </div>
      </form>
    )
  },
})

export default AlertaConfig
