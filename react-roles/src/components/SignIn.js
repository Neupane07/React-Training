import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory,Link } from 'react-router-dom';
import firebase from '../firebase'
import Loader from './Loader';

const SignIn = ({ signedIn, setSignedIn }) => {
    const [loading,setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();

    useEffect(() => {
        if (signedIn) {
            history.push("/")
        }
    },[signedIn,history])

    const onSubmit = data => {
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                setSignedIn(true);
                setLoading(false)
                history.push("/")
            })
            .catch((error) => {
                alert(error)
                setLoading(false)
            })
    }

    return (
        <div>
            {loading ? <Loader/> 
            :
            <div className="ui raised very padded text container segment">
                <h2 className="ui header">Sign In form</h2>
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" {...register("email", { required: true })}></input>
                        {errors.email && <p style={{ color: 'red' }}>Email is required</p>}
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" {...register("password", { required: true, min: 6 })}></input>
                        {errors.password && <p style={{ color: 'red' }}>Enter valid password</p>}
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </form>
            </div>}
        </div>
    )
}

export default SignIn
