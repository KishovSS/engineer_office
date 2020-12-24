// Импорт библиотек
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// Импорт действий Redux
import {
  openDialogSignIn,
} from '../../ducks/head';

// Импорт компонентов Material-UI
import {
  Button,
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

/* Входящие данные */
const data = [
  {
    startTime: '9:00',
    endTime: '10:45',
    name: 'Теория вероятностей',
    address: 'Корпус 2, кабинет 211',
    teacherName: 'Иванов Петр Васильевич',
    type: 'Лекция',
  },
  {
    startTime: '11:00',
    endTime: '12:45',
    name: 'Информатика',
    address: 'Корпус 2, кабинет 311',
    teacherName: 'Сурков Иван Гаврилович',
    type: 'Лекция',
  },
  {
    startTime: '13:30',
    endTime: '15:45',
    name: 'Информатика',
    address: 'Корпус 2, кабинет 231',
    teacherName: 'Сурков Иван Гаврилович',
    type: 'Практика',
  },
];

function reverseArr(arr) {
    return arr.reverse()
  }
  
function viewTask(task) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Typography variant="body1">
          {task.startTime}
        </Typography>
        <Typography variant="body1">
          {task.endTime}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6">
          {task.name}
        </Typography>
        <Typography variant="h6">
          {task.teacherName}
        </Typography>
        <Typography variant="h6">
          {task.address}
        </Typography>
        <Typography variant="h6">
          {task.type}
        </Typography>
      </Grid>
    </Grid>
  )
}



// Функция-компонент
function BlockFour({


}) {
  const classes = useStyles();

const [arr, setArr] = useState(data);

  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Рассписание занятий
      </Typography>
      {data.map(element => {
        return viewTask(element)
      })}
    <Button onClick={() => setArr(reverseArr(data))}>Reverse</Button>
     
    </Card>
  );
}


// Redux (не удалять!!!)
const mapStateToProps = state => ({});

// Redux (не удалять!!!)
const mapDispatchToProps = {};

// Redux (не удалять!!!)
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockFour);