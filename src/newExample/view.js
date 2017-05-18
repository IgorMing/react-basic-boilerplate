import React, { Component } from 'react';

const fetch = (value) => {
    const array = [
        'blablabla' + value,
        'blabla1',
        'bçabça2',
    ];

    return array;
};

export default class NewExample extends Component {
    constructor() {
        super();

        this.state = {
            suggestions: [],
            text: '',
        };

        this.fetchInfo = this.fetchInfo.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    onChangeText(event) {
        const { target: { value } } = event;

        this.setState({ text: value });

        this.fetchInfo(value);
    }

    fetchInfo(value) {
        this.setState({ suggestions: fetch(value) });
    }

    renderFetch(suggestions) {
        return suggestions.map((suggestion, index) => {
            const time = new Date().getTime() + index;

            return <li key={time}>{suggestion}</li>;
        });
    }

    render () {
        const { state: { suggestions, text } } = this;

        return (
            <div>
                <input onChange={this.onChangeText} value={text} />
                <ul>
                    {this.renderFetch(suggestions)}
                </ul>
            </div>
        );
    }
}
