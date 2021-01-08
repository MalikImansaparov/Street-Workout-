import React, {Component} from 'react';


class Redirect extends Component {
    constructor(props) {
        super(props);
        this.state = {...props};
    }
    componentWillMount() {
        window.location = this.state.href='https://wswcf.org/competitions_archive/world-freestyle-championship-2019'
    }

    render() {
        return (
            <div>
                Redirecting...
            </div>
        );
    }
}

export default Redirect;