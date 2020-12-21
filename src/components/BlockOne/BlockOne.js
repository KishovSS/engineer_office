// Импорт библиотек
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Bar} from 'react-chartjs-2';

// Импорт действий Redux
import {
  openDialogSignIn,
} from '../../ducks/head';

// Импорт компонентов Material-UI
import {
  Button,
  Card, 
  IconButton, 
  Typography,
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
//Диаграмма 

/* Входящие данные */
const dataBig = [
  {
    'Месяц' : 'Январь',
    'Всего обращений': '750',
    'Нарешен КС': '43',
    'Возвратов': '33',
  },
  { 'Месяц' :'Февраль',
    'Всего обращений': '654',
    'Нарешен КС': '76',
    'Возвратов': '33',
  },
  { 'Месяц' :'Март',
    'Всего обращений': '720',
    'Нарешен КС': '83',
    'Возвратов': '13',
  }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max-min))+min
}

// Функция-компонент
function BlockOne({

}) {

  const classes = useStyles();
  

  const allTask = () => {
    return [getRandomInt(100, 1000),getRandomInt(100, 1000),getRandomInt(100, 1000)]
    }
  const naruKS = () => {
    return [getRandomInt(20, 50),getRandomInt(20, 50),getRandomInt(20, 50)]
    }
  const vozrat = () => {
    return [getRandomInt(20, 50),getRandomInt(20, 50),getRandomInt(20, 50)]
    }
  const [chartData, setChartData] = useState(allTask())
  const [chartData1, setChartData1] = useState(naruKS())
  const [chartData2, setChartData2] = useState(vozrat())

   const chart ={    
      labels: dataBig.map(month =>{
        return month['Месяц']
      }),
      datasets: [
        {
          label: 'Всего обращений',     
          data: chartData,              
          backgroundColor: '#1e3d59',
          
          borderColor: '#1e88e5',
          
        }, {
          label: 'Нарешен КС',
          data: chartData1,              
          backgroundColor: '#ff6e40',
          borderColor: '#c2185b',
        }, {
          label: 'Возвратов',
          data: chartData2,            
          backgroundColor: '#ffc13b',
          borderColor: '#00796b',
        }],
    
    }
  
    
  const optiBar = {
    title: {text:'enginer diagram', display:true},
    animation: {animateScale: true},
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
  },

  } 


 
  return (
    <Card className={classes.root}>
      <Typography variant='h5'>
        Блок - Фадин Алексей
      </Typography>
      
      
        <Bar data={chart} options={optiBar} />
        <Button onClick={()=>{
          setChartData(allTask());
          setChartData1(naruKS());
          setChartData2(vozrat());
        }} >Fast clic ME!</Button>
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
)(BlockOne);