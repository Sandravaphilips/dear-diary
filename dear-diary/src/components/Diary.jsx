import React, { useState, useEffect } from 'react';
import { TextField, Button, Modal } from '@material-ui/core';
import withAuth from '../axios';

const Diary = props => {
    const [photo, setPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [diary, setDiary] = useState({
        diaryText: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(false);
    
    const date = props.match.params.date;

    useEffect(() => {
        withAuth().get(`https://my-dear-diary.herokuapp.com/api/diary/${date}`)
        .then(({data}) => {
            setDiary(data.diary)
            setIsLoading(false)
            if(data.diary) {
                setResults(true)
            }
        })
        .catch(err => alert(err))
    }, [date])
    
    const onDiaryTextChange = e => {
        setDiary({...diary, diaryText: e.target.value})
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChange = e => {
        const file = e.target.files[0];
        setPhoto(file);
    };

    const onUpload = () => {
        withAuth().post('https://my-dear-diary.herokuapp.com/api/gallery', photo)
        .then(res => alert(res.data.message))
        .catch(error => {
            alert(error);
        });
    }
    const onHandleSubmit = e => {
        e.preventDefault()
        if(results) {
            const payload = {
                diaryText: diary.diaryText,
            }
            withAuth().put(`https://my-dear-diary.herokuapp.com/api/diary/${diary.id}`, payload)
            .then(res => {
                console.log(res)
                props.history.push('/dashboard')
            })
            .catch(error => {
                alert(error);
            }); 
        } else {
            const payload = {
                diaryText: diary.diaryText,
                date: date
            }
            withAuth().post('https://my-dear-diary.herokuapp.com/api/diary', payload)
            .then(res => {
                console.log(res)
                props.history.push('/dashboard')
            })
            .catch(error => {
                alert(error);
            }); 
        }              
    }
    
    if(isLoading) return <div>Loading...</div> 
    return(
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">
                Upload Picture
            </Button>
            <TextField id="diary-text" onChange={onDiaryTextChange} defaultValue={diary ? diary.diaryText : ''} variant="outlined" />
            <Button onClick={onHandleSubmit} variant="contained" color="primary">
                Done
            </Button>

            {/* <Modal
                open={open}
                onClose={handleClose}
            >
                <div>
                    <h3>Upload your picture</h3>
                    <input type="file" name="Upload" onChange={onChange} />
                    <Button variant="contained" onClick={onUpload} color="primary">
                    Save
                    </Button>
                    <Button variant="contained" onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                </div>
            </Modal> */}
        </div>
    )
};

export default Diary