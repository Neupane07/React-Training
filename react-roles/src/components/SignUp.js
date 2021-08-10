import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import firebase from '../firebase';
import { useHistory } from 'react-router';
import { createUserDocument } from '../firebase';
import Loader from './Loader';

const SignUp = ({currUserId, setCurrUserId}) => {
    const [loading,setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const onSubmit = async(data) => {
        console.log(data)
        setLoading(true)
        try{
            const {user} = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
            await createUserDocument(user, data);

            //upload profile picture

            firebase.storage().ref(`users/${user.uid}/profile.jpg`).put(data.profile[0])
                .then(() => {
                    console.log('Succesfully uploaded')
                })
                .catch(err => {
                    console.log('file upload error ===> ',err)
                })
            setCurrUserId = user.uid
            console.log(user.id)
            history.push("/")
        }catch(err){
            alert(err)
            setLoading(false)
        }
    }

    return (
        <>
        {loading ? <Loader/>
        :
        <div className="ui raised very padded text container segment">
            <h2 className="ui header">Sign Up form</h2>
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" {...register("firstName", { required: true })}></input>
                    {errors.firstName && <p style={{ color: 'red' }}>First Name is required</p>}
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" {...register("lastName", { required: true })}></input>
                    {errors.lastName && <p style={{ color: 'red' }}>Last Name is required</p>}
                </div>
                <div className="field">
                    <label>Profession</label>
                    <input type="text" name="profession" placeholder="Profession" {...register("profession", { required: true })}></input>
                    {errors.profession && <p style={{ color: 'red' }}>Profession is required</p>}
                </div>
                <div className="field">
                    <label>Age</label>
                    <input type="number" min={18} max={100} name="age" placeholder="Age" {...register("age", { required: true })}></input>
                    {errors.age && <p style={{ color: 'red' }}>Enter valid age from 18-100</p>}
                </div>
                <div className="field">
                    <label>Location</label>
                    <input type="text" name="location" placeholder="Location" {...register("location", { required: true })}></input>
                    {errors.location && <p style={{ color: 'red' }}>Location is required</p>}
                </div>
                <div className="field">
                    < select name="skills" className="ui fluid search dropdown" {...register("role")} >
                        <option value="admin">Admin</option>
                        <option value="member">Member</option>
                        <option value="leader">Leader</option>
                    </select >
                </div>

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
                <div className="field">
                    <label>Profile Pic</label>
                    <input type="file" name="profile" {...register("profile", { required: true})}></input>
                    {errors.profile && <p style={{ color: 'red' }}>Enter valid image</p>}
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>

        </div>}
        </>
    )
}

export default SignUp





