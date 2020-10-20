import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    marginTop: 40, 
    
  },
  
}));

function valuetext(value) {
  return `Maksor`;
}

export function StitchesTensionSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 23]);

  const handleChange = (event, newValue) => {
    props.onStitchesSliderChange(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      &nbsp;
      </Typography>
      <Slider
        value={value}
        onChange={ handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        min={8}
        max={34}
      />
      <Typography id="range-slider" gutterBottom>
        Välj din stickfasthet ovan (10cm X 10cm)
      </Typography>
     
    </div>
  );
}

export function HatSizeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([50]);

  const handleChange = (event, newValue) => {
    console.log("setting value till omkrets", newValue);
    props.onSizesSliderChange(newValue);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        min={20}
        max={70}
      />
      <Typography id="continuous-slider" gutterBottom>
        Välj mössans omkrets
      </Typography>
    
    </div>
  );
}

export const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);