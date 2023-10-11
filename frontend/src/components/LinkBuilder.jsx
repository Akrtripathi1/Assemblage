import React, { useEffect, useState } from 'react'
import { Formik, useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const LinkBuilder = () => {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [linkData, setLinkData] = useState(null);

    const getLinkData = async () => {
        const res = await fetch('http://localhost:5000/link/getbyuser/' + currentUser._id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setLinkData(data);
    }

    useEffect(() => {
        getLinkData();
    }, [])


    const updateForm = async (values, { setSubmitting }) => {
        console.log(values);
        const res = await fetch("http://localhost:5000/link/update/" + linkData._id, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(res.status);

        if (res.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Nice",
                text: "You have signed up successfully",
            })
            setSubmitting(true);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops!!",
                text: "Something went wrong",
            });
        }
    }

    return (
        <div>
            {
                linkData !== null &&
                <a href={"/displaypage/" + linkData._id} target='_blank'>Link Preview</a>
            }
            <div className='col-md-8 mx-auto'>
                <div className="card">
                    <div className="card-body">
                        {
                            linkData !== null ? (
                                <Formik initialValues={linkData} onSubmit={updateForm}>
                                    {
                                        (linkForm) => {
                                            return <form onSubmit={linkForm.handleSubmit} >
                                                <label htmlFor="">Logo</label>
                                                <input className="form-control mb-4" type="file" />
                                                <label htmlFor="">Title</label>
                                                <input
                                                    id="title"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.title}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Description</label>
                                                <textarea htmlFor="">Description</textarea>
                                                <input type="text" />
                                                <label htmlFor="">Facebook</label>
                                                <input
                                                    id="facebook"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.facebook}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Instagram</label>
                                                <input
                                                    id="instagram"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.instagram}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Youtube</label>
                                                <input
                                                    id="youtube"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.youtube}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Linkedin</label>
                                                <input
                                                    id="linkedin"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.linkedin}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Github</label>
                                                <input
                                                    id="github"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.github}
                                                    type="text"
                                                    className="form-control mb-4"
                                                />
                                                <label htmlFor="">Telegram</label>
                                                <input
                                                    id="Telegram"
                                                    onChange={linkForm.handleChange}
                                                    value={linkForm.values.telegram}
                                                    type="tex"
                                                    className="form-control mb-4"
                                                />

                                                <button>Submit</button>
                                            </form>
                                        }
                                    }
                                </Formik>
                            ) : <h1>Loading ... </h1>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkBuilder