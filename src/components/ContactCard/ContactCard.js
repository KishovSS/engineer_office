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
  Card,
  Typography,
  Grid,
  Button,
  Divider,
} from '@material-ui/core'; 
import Avatar from '@material-ui/core/Avatar';

// Импорт иконок Material-UI


// Локальная таблица стилей
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  moreButton: {
    marginTop: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  moreData: {
    marginTop: theme.spacing(2),
  },
}));

/* Входящие данные */
const data = {
  username: 'Иванов Петр Константинович',
  position: 'Старший инженер',
  telephone: 89271234567,
  phone: 857751520,
  avatar: 'https://million-wallpapers.ru/wallpapers/5/51/505015039754505/avatar.jpg',
  tabNum: 4849408594,
  ud: 1,
  dayOff: 0,
  boss: {
    name: 'Петров Петр Петрович',
    position: 'Руководитель направления',
    phone: 857751500,
  },
};

// Функция-компонент
function ContactCard() {
  const classes = useStyles();
  
  const [isMore, setIsMore] = useState(false);

  function isMoreForName(isMore) {
    isMore ? setIsMore(false) : setIsMore(true)
  };

  return (
    <Card className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar
            className={classes.avatar}
            src={data.avatar}
            onClick={() => isMoreForName(isMore)}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h5" onClick={() => isMoreForName(isMore)}>{data.username}</Typography>
          {isMore === false && <Typography variant="body1" color="textSecondary" display="inline">
            Должность: <Typography variant="body1" color="textPrimary" display="inline">{data.position}</Typography>
          </Typography>}
          {isMore && <Divider className={classes.divider}/>}
          {isMore &&
            <Grid className={classes.moreData} container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" color="textSecondary" display="inline">
                  Должность: <Typography variant="body1" color="textPrimary" display="inline">{data.position}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Мобильный телефон: <Typography variant="body1" color="textPrimary" display="inline">{data.telephone}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Внутренний телефон: <Typography variant="body1" color="textPrimary" display="inline">{data.phone}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Табельный номер: <Typography variant="body1" color="textPrimary" display="inline">{data.tabNum}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Работает удаленно: <Typography variant="body1" color="textPrimary" display="inline">{data.ud === 1 ? 'Да' : 'Нет'}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Выходной: <Typography variant="body1" color="textPrimary" display="inline">{data.dayOff === 1 ? 'Да' : 'Нет'}</Typography>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="body1" color="textSecondary" display="inline">
                  Руководитель: <Typography variant="body1" color="textPrimary" display="inline">{data.boss.name}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Телефон руководителя: <Typography variant="body1" color="textPrimary" display="inline">{data.boss.phone}</Typography>
                </Typography>
                <br />
                <Typography variant="body1" color="textSecondary" display="inline">
                  Должность руководителя: <Typography variant="body1" color="textPrimary" display="inline">{data.boss.position}</Typography>
                </Typography>
              </Grid>
            </Grid>
          }
          <br />
          <Button
            className={classes.moreButton}
            variant="text"
            onClick={() => isMoreForName(isMore)}
          >
            {isMore ? 'Скрыть подробную информацию' : 'Подробная информация'}
          </Button>
        </Grid>
      </Grid>
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
)(ContactCard);