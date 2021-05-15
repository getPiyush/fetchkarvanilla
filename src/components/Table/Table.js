import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Title from '../Title';
function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const Table = (props) => {
    const classes = useStyles();
    const { title, content, linkText, date } = props;
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <Typography component="p" variant="h4">
                {content}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                {date.toString()}
                Angular Material Grid is a component which is used to structure the layout in a distributed way for
                multiple platforms are like for Web, Mobile, Desktop, and other platforms are as well. Most of the
                developer may use bootstrap or any other front-end libraries already, the same way the angular material
                grid is used to manage cells into grid layout to make it more responsive elements into multiple devices.
                We can have multiple options to adjust our web content into a grid that fits into our project
                functionality
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    {linkText}
                </Link>
            </div>
        </React.Fragment>
    );
};

Table.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    linkText: PropTypes.string,
    date: PropTypes.date,
};

Table.defaultProps = {
    title: 'Card title',
    content: 'Highlighting content',
    linkText: 'click me',
    date: new Date(),
};
export default Table;
