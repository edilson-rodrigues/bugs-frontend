import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBugs } from '../store/bugs';


class Bugs extends Component {

    state = { bugs: [] };

    componentDidMount() {
        this.props.loadBugs();
    }

    render() {
        return (
            <ul>
                { this.props.bugs.map((bug) => (
                    <li key={ bug.id }>
                        { bug.description }
                    </li>
                )) }
            </ul>
        );
    }
}

// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
    bugs: state.entities.bugs.list,
});

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs()),
});

// Container
// Presentation (Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs);

