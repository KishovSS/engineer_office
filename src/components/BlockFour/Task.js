// Импорт библиотек
import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// Импорт действий Redux
import {
  openDialogSignIn,
} from '../../ducks/head';

// Импорт компонентов Material-UI
import {
  Box,
  Card,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

// Импорт иконок Material-UI
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));



function ViewTask({task}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography variant="body1">
          {task.startTime}
        </Typography>
        <Typography onClick={(event) => {
            console.log(event)
        }} variant="body1">
          {task.endTime}
        </Typography> 
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6">
          {task.name}
        </Typography>
        <Typography variant="body1">
          {task.teacherName}
        </Typography>
      </Grid>
    </Grid>
  )
}


// Redux (не удалять!!!)
const mapStateToProps = state => ({});

// Redux (не удалять!!!)
const mapDispatchToProps = {};

// Redux (не удалять!!!)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewTask);