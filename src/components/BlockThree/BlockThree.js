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
import Avatar from '@material-ui/core/Avatar';

// Импорт иконок Material-UI
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  }, 
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  }, 
  card: {
    margin: theme.spacing (3),
    padding: theme.spacing(3),
  }, 
 
}));

/* Входящие данные */
const data = [
  {
    username: 'Иванов Петр Константинович',
    position: 'Директор всея конторы',
    telephone: 89271234567,
    url: 'http://addressbook.sbrf.ru/123',
    avatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg'
  },
  {
    username: 'Петров Сергей Васильевич',
    position: 'Заместитель всех',
    telephone: 89271231122,
    url: 'http://addressbook.sbrf.ru/234',
    avatar: 'https://i.pinimg.com/736x/62/8f/49/628f49798bba23a996bbb0fe8aad174e--avatar-james-cameron-avatar-fan-art.jpg'
  },
  {
    username: 'Мухамедов Махмуд Изгил Оглы',
    position: 'Водитель звездалета',
    telephone: 89271234234,
    url: 'http://addressbook.sbrf.ru/221',
    avatar: 'https://img1.goodfon.ru/original/2988x1771/3/33/avatar-neytiri-zoe-saldana.jpg'
  },
];

// Функция-компонент
function BlockThree({

}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <Typography variant='h6'>
      Блок Сереги
      </Typography> 
      <Typography variant='h5' color='primary'>
      Ключевые сотрудники: 
      </Typography>
      {data.map(key => {
        return ( 
          <Card className={classes.card}> 
            <Typography variant='h4' color='black'>{key.username}  </Typography> 
            <Chip avatar={<Avatar src={key.avatar} className={classes.small} />} />
            <Typography variant='body2' color='textPrimary'>{key.position}</Typography> 
            <Typography variant='subtitle1'>{key.telephone}</Typography> 
            <Typography variant='subtitle2' display='inline' >{key.url}</Typography> 
            <Typography></Typography> 
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
)(BlockThree); 


