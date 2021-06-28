import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';



const useStyles = makeStyles({
    root: {
      backgroundColor: '#F1984E',
      color: '#000000',
      height: '200px'
    },
    fonts: {
        fontFamily: "'Rammetto One', cursive"
    },
    card2:{
        backgroundColor: '#6AC0F9',
        fontFamily: "'Rammetto One', cursive",
        color: '#fff',
        height: '200px',
        textAlign: 'center'
    },
    card3:{
        backgroundColor: '#EF8BAE',
        color: '#fff',
        height: '200px',
        textAlign: 'center'
    },
    card4:{
        backgroundColor: '#6AC25A',
        color: '#fff',
        height: '200px'
    },
    card5: {
        backgroundColor: '#EE7460',
        color: "#fff",
        height: '200px',
        textAlign: 'center'
    },
    card6: {
        backgroundColor: '#F7C466',
        color: "#fff",
        height: '200px'
    }
  });

  
//   axios.get(`${URL}`)
//     .then((res) => {
//         console.log(res.data.weather[0].description)
//         return res.data
//     })
//     .catch((err) => {
//         console.error(err)
//     })

    

function Homepage(){

    const classes = useStyles()

    // useEffect(() => {
    //     fweather()
    // }, [])
    const API_KEY = 'ed39889f2eb5e8cef466fa4b5de0a4ce';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=${API_KEY}`
  
    // const lat = '-6.2146'
    // const lon = '106.8451'

    // const AQI = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    // const [aqi, setAqi] = useState("")
    // axios.get(`${AQI}`)
    // .then((res) => {
    //     // console.log(res.data)
    //     setAqi(res.data)
    // })

    const [weather, setWeather] = useState('')
    const [celcius, setCelcius] = useState("")
    const [icon, setIcon] = useState("")
        axios.get(`${URL}`)
        .then((response) => {
        // console.log(response.data)
        setWeather(response.data.weather[0].description)
        setCelcius(response.data.main.temp)
        setIcon(response.data.weather[0].icon)
        })
        .catch((err) => {
            console.error(err)
        })
    

    return(
        <> 
            <Grid container spacing={2}>
                <Grid item xs={12} lg={7} md={6}>
                    <Card className={classes.root}>
                        <CardContent >
                            <Typography className={classes.fonts} variant="h5" component="h2">
                            Hello There!
                            </Typography>
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                            Let’s Check The Bike Sharing Information
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
        
                <Grid item xs={12} lg={3} md={6}>
                    <Card className={classes.card2}>
                        <CardContent >
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather} />
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                                {weather}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            
                <Grid item xs={12} lg={2} md={6}>
                    <Card className={classes.card3}>
                        <CardContent >
                            <Typography className={classes.fonts} variant="h2" component="h2">

                                {Math.round(celcius - 273,15)}&deg;
                            
                            </Typography>
                            <Typography className={classes.fonts} variant='h4' component='h2'>

                                Celcius

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            

            
                <Grid item xs={12} lg={5} md={6}>
                    <Card className={classes.card4}>
                        <CardContent >
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                            Bike Station
                            </Typography>
                            <CardActions>
                                <Button size="medium" variant="contained" color="primary">
                                See bike station list
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            

            
                <Grid item xs={12} lg={2} md={6}>
                    <Card className={classes.card5}>
                        <CardContent >
                            <Typography className={classes.fonts} variant="h5" component="h2">
                                AQI
                            </Typography>
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                                ICON
                            </Typography>
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                                Good
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            

            
                <Grid item xs={12} lg={5} md={6}>
                    <Card className={classes.card6}>
                        <CardContent >
                            <Typography className={classes.fonts} variant='h4' component='h2'>
                                Download App
                            </Typography>
                            <CardActions>
                                <Button size="medium" variant="contained" color="primary">
                                Download
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>        
        </>
    )
}

export default Homepage;