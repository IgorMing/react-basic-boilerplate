import React, {Component, PropTypes} from 'react';

export default class ProfileContent extends Component {
    render() {
        const {
            isOk, onChange, title, toggleBoolean
        } = this.props;

        return (
            <div className="profile-content">
                <h1>{title} ({`It's ${isOk}`})</h1>
                <input onChange={onChange} value={title}/>
                <button onClick={toggleBoolean}>Toggle</button>
            </div>
        );
    }
}

ProfileContent.propTypes = {
    isOk: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    toggleBoolean: PropTypes.func.isRequired
};

ProfileContent.defaultProps = {isOk: false};
