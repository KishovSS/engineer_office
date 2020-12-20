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


// Функция-компонент
function BlockFour({



}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Рассписание занятий
      </Typography>
      <Container>
      <Grid container spacing={3}>
       <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
              {data[0].startTime}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[0].endTime}
              </Typography>
              </Box>
         </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
            {data[0].name}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[0].teacherName}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[0].address}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[0].type}
              </Typography>
              </Box>
        </Grid>
        </Grid>
      </Container>
    
      <Container>
      <Grid container spacing={3}>
       <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
              {data[1].startTime}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[1].endTime}
              </Typography>
              </Box>
         </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
            {data[1].name}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[1].teacherName}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[1].address}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[1].type}
              </Typography>
              </Box>
        </Grid>
        </Grid>
      </Container>

      <Container>
      <Grid container spacing={3}>
       <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
              {data[2].startTime}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[2].endTime}
              </Typography>
              </Box>
         </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography variant='body1'>
            {data[2].name}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[2].teacherName}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[2].address}
              </Typography>
              </Box>
          <Box>
            <Typography variant='body1'>
            {data[2].type}
              </Typography>
              </Box>
        </Grid>
        </Grid>
      </Container>
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