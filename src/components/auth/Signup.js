import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    let navigate = useNavigate();

    const [field, setField] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (event) => {
        setField({ ...field, [event.target.name]: event.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const signUpData = {
            email: field?.email,
            name: field?.name,
            password: field?.password,
            phone: `+91${field.phone}`,
          };

          console.log(signUpData)

          axios
          .post("http://localhost:3000/register", signUpData)
          .then((res) => {
            console.log(res);
            if (res.status == 200) {
                navigate("/");
             }
           
          })
          .catch((err) => {
            console.log(err);
          });

    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/* <AddCircleOutlineOutlinedIcon /> */}
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" onChange={handleChange} defaultValue={field?.name} name="name"  />
                    <TextField fullWidth label='Email' placeholder="Enter your email" onChange={handleChange} defaultValue={field?.email} name="email" />
                    {/* <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" onChange={handleChange} defaultValue={field?.phone} name="phone" />
                    <TextField fullWidth label='Password' placeholder="Enter your password" onChange={handleChange} defaultValue={field?.password} name="password"  />
                    {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;