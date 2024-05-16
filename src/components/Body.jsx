import './page.css';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import CopyToClipboard from 'react-copy-to-clipboard';
import spinnerImage from './spinner.gif'

const API = 'https://urlshortend-backend.onrender.com';

const Body = () => {
    const [shortLink, setShortLink] = useState('');
    const [loading, setLoading] = useState(false);
    const [longLink, setLongLink] = useState('');

    const handleApi = () => {
        setLoading(true);
        axios.post(`${API}/api/v8/urlshortner`, { longURL: longLink })
        .then((res) => {
            toast.success("Link Shortened Successfully");
            setLoading(false);
            setShortLink(res.data.url.shortURL);
        })
        .catch((error) => {
            setLoading(false);
            toast.error(error.response?.data?.message || "An error occurred");
        });
    }

    const handleCopy = () => {
        toast.success("Link copied");
    }

    return (
        <>
            <Toaster position='top-center' reverseOrder={false} />
            {loading && <div className='spinner'><img src={spinnerImage} alt='spinner'/></div>}
            <div className='main'>
                <input placeholder='Enter Url' value={longLink} onChange={(e) => setLongLink(e.target.value)} />
                <button onClick={handleApi} title='Short Url'>Shorten</button>
            </div>
            <div className='result main' style={{ marginTop: "5%" }}>
                {shortLink && (
                    <>
                        <h2 style={{ color: "white", backgroundColor: "rgba(0,0,0,0.7)", padding: "1%", borderRadius: "10px" }}>SHORT URL</h2>
                        <input value={shortLink} />
                        <CopyToClipboard text={shortLink} onCopy={handleCopy}>
                            <button style={{ width: "5vw" }} title='Copy'><i className='search-icon fa fa-copy'>Copy</i></button>
                        </CopyToClipboard>
                    </>
                )}
            </div>
        </>
    );
}

export default Body;
