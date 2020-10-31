import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

class ColoredLinearProgress extends React.Component {
    render() {
        const { classes } = this.props;
        return <LinearProgress {...this.props} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}/>;
    }
}

const styles = props => ({
    colorPrimary: {
        backgroundColor: '#c6c2c2',
    },
    barColorPrimary: {
        backgroundColor: '#71DCA0',
    }
});
  
export default  withStyles(styles)(ColoredLinearProgress);