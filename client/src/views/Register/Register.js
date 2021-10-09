import React from 'react'

const Register = () => {
    return (
        <div style={styles.div0}>
            <h1 style={styles.h1}>[LOGO] Welcome to the world of drawing!</h1>
            <h3 style={styles.h3}>Already have an account? <a href="/Login">Log in</a></h3>
            
            <form style={styles.form}>
                <lable for="fname" style={styles.lable}> Name</lable>
                <br></br>
                <input type="text" id="fname" name="fname" placeholder="Margarita" style={styles.input}></input>
                <br></br>
                <lable for="lname" style={styles.lable}> Last Name</lable>
                <br></br>
                <input type="text" id="lname" name="lname" placeholder="Rosario" style={styles.input}></input>
                <br></br>
                <lable for="email" style={styles.lable}>Email</lable>
                <br></br>
                <input type="emial" id="email" name="email" placeholder="bb@gmail.com" style={styles.input}></input>
                <br></br>
                <lable for="emailConfirm" style={styles.lable}>Confirm Email</lable>
                <br></br>
                <input type="emial" id="emailConfirm" name="emailConfirm" placeholder="bb@gmail.com" style={styles.input}></input>
                <br></br>
                <lable for="pwd" style={styles.lable}>Create Password </lable>
                <br></br>
                <input type="password" id="pwd" name="pwd" placeholder="•••••••••" style={styles.input}></input>
                <br></br>
                <lable for="pwdConfrim" style={styles.lable}>Confirm Password </lable>
                <br></br>
                <input type="password" id="pwdConfrim" name="pwdConfrim" placeholder="•••••••••" style={styles.input}></input>
                <br></br>
                <button type="submit" style={styles.registerBtn}> Register </button>
            </form>

        </div>
    )
}

const styles = StyleSheet.create = ({
    div0: {
        backgroundColor: '#efb6b6',
        display: 'grid',
       // padding: '0% 5% 5% 5%',
    },

    form: {
        margin: '0 20% 0 20%', 
    },

    input: {
        margin: '8px 0 28px 0',
        borderRadius: '5px',
        border: '1px solid black',
        fontSize: '26px',
        width: '100%'
    },

    lable: {
        fontSize: '26px',
    },

    h1 : {
        margin: '5% 10% 1% 20% ',
        fontSize: '40px'
    },

    h3: {
       margin: '0% 10% 5% 20% ',
    },

    registerBtn: {
        backgroundColor: 'black',
        color: '#eee',
        borderRadius: '5px',
        border: '0px solid',
        fontSize: '26px',
        width: '101%',
        padding: '10px 0px',
        margin: '5% 0',
    },

})



export default Register;