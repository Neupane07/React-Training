import React from 'react'
import firebase from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const Posts = ({ username }) => {
    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const db = firebase.firestore()
    //     db.collection('posts').onSnapshot((snapshot) => {
    //         snapshot.docs.forEach(post => {
    //             if (!posts.includes(post.data())) {
    //                 setPosts(prevPosts => [...prevPosts, post.data()])
    //             }
    //         })
    //     })
    // }, [])

    const postsRef = firebase.firestore().collection('posts')
    const [posts] = useCollectionData(postsRef, { idField: 'id' })

    // const renderedPosts = posts.map(post => {
    //     return (
    //         <div className="card" key={post.caption} style={{ width: '100%' }}>
    //             <div className="card-body position-relative">
    //                 <h5>{username}</h5>
    //                 <img
    //                     className="img-fluid card-img-bottom"
    //                     src={post.imgUrl}
    //                     alt="post"
    //                 />
    //                 <p className="text-center" style={{ backgroundColor: 'white', margin: '10px 10px', position: 'absolute', bottom: '20px' }}>{post.caption}</p>
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className="container">
            {posts && posts.map(post => {
                return (
                    <div className="card" key={post.caption} style={{ width: '100%' }}>
                        <div className="card-body position-relative">
                            <div className="mb-3">
                                <img
                                    className="rounded-circle-sm img-fluid"
                                    src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/171x180"
                                    alt="profile"
                                    width={15}
                                />
                                <span className="h5 ms-3">{username}</span>
                            </div>
                            <img
                                className="img-fluid card-img-bottom"
                                src={post.imgUrl}
                                alt="post"
                            />
                            <p className="text-center" style={{ backgroundColor: 'white', margin: '10px 10px', position: 'absolute', bottom: '20px', left: '0', right: '0', fontSize: '25px' }}>{post.caption}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts
