import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resolveBug, getUnresolvedBugs, loadBugs } from '../store/bugs';

const BugsList = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(getUnresolvedBugs);

    useEffect(() => {
        dispatch(loadBugs());
    }, [dispatch]);

    return (
        <ul>
            { bugs.map((bug) => (
                <li key={ bug.id }>
                    { bug.description }
                    <button onClick={ () => dispatch(resolveBug(bug.id)) }>Resolve</button>
                </li>
            )) }
        </ul>
    );
};

export default BugsList;
