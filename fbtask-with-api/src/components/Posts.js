import React, { useEffect } from 'react'
import axios from 'axios'

const Posts = ({ username, posts, setPosts, orderBy, setOrderBy, filterDate }) => {

    useEffect(() => {
        console.log("useEffect ran")
        const getPosts = async () => {
            const { data } = await axios.get('http://139.59.47.49:4004/api/posts', {
                params: {
                    limit: 20,
                    start: 1,
                    orderby: orderBy,
                    date: filterDate
                }
            })
            console.log(data)
            setPosts(data)
        }
        getPosts()
        return () => {

        }
    }, [orderBy, filterDate, setPosts])

    const handleDelete = (id) => {
        axios.delete(`http://139.59.47.49:4004/api/post/delete/${id}`)
        const removeItem = posts.filter((post) => {
            return post.id !== id;
        });
        setPosts(removeItem)
    }



    return (
        <div className="container">
            {posts.length >= 2 && <button className="btn btn-primary mb-3" onClick={() => {
                if (orderBy === 0) {
                    setOrderBy(1)
                } else {
                    setOrderBy(0)
                }
            }}>Change Order</button>}
            {posts && posts.map((post) => {
                return (
                    <div className="card mb-5" key={post.id} style={{ width: '100%' }}>
                        <div className="card-body position-relative">
                            <div className="mb-3">
                                <img
                                    className="rounded-circle-sm img-fluid"
                                    src="https://images.unsplash.com/photo-1520155707862-5b32817388d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80/171x180"
                                    alt="profile"
                                    width={15}
                                />
                                <span className="h5 ms-3">{username}</span>
                                <button
                                    className="btn btn-danger ms-5"
                                    onClick={() => handleDelete(post.id)}
                                >Delete post</button>
                            </div>
                            <img
                                className="img-fluid card-img-bottom"
                                src={post.background}
                                alt="post"
                            />
                            <p className="text-center" style={{ backgroundColor: 'white', margin: '10px 10px', position: 'absolute', bottom: '20px', left: '0', right: '0', fontSize: '25px' }}>{post.post}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Posts
