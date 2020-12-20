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
  Card,
  Typography,
    Chip,
} from '@material-ui/core';

// Импорт иконок Material-UI
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { grey } from '@material-ui/core/colors';

// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  card: {
    margin: theme.spacing (2),
    padding: theme.spacing(1),
      }
}));

/* Входящие данные */
const data = [
  {
    name: 'Название первой задачи',
    subject: 'Тема первой задачи',
    tags: ['Задача', 'Срочная'],
  },
  {
    name: 'Вторая задача',
    subject: 'Тема второй задачи',
    tags: ['Сделать завтра', 'Срочная'],
  },
  {
    name: 'Еще задача',
    subject: 'Тема задачи',
    tags: ['Задача', 'Важная'],
  },
];


// Функция-компонент
function BlockTwo({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Задачи
      </Typography>
      {data.map(key => {
        return (
        <Card className={classes.card}>
          <Typography variant='h4' color='primary'>{key.name}</Typography>
          <Typography variant='inherit' color='textPrimary'>{key.subject}</Typography>
          <Typography></Typography>
          {key.tags.map(tag => <Chip label={tag} color="secondary"/>)}
          </Card>)               
      })}
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
)(BlockTwo);