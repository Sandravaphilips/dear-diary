import React, { useState, useEffect } from 'react';
import { Button, Modal, TextareaAutosize, Card, makeStyles, CircularProgress, Collapse, CardMedia, Grid, CardActions } from '@material-ui/core';
import { store } from 'react-notifications-component';
import withAuth from '../axios';
import { DiaryStyle } from './style';
import Navigation from './Navigation.';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

function getModalStyle() {
    return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid black',
        padding: theme.spacing(2, 4, 3),
        paddingLeft: '4rem'
    },
    media: {
        height: 240,
        width: 200,
    },
    modalMedia: {
        height: 240
    },
    root: {
        flexGrow: 1,
        width: '100%'
    }
}));

const Diary = props => {
    const [photo, setPhoto] = useState(null);
    const [picture, setPicture] = useState({});
    const [photos, setPhotos] = useState([]);
    const [open, setOpen] = useState(false);
    const [pictureOpen, setPictureOpen] = useState(false);
    const [diary, setDiary] = useState({
        diaryText: ''
    });
    const [isLoading, setIsLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [results, setResults] = useState(false);
    const [expand, setExpand] = useState(false);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    
    const date = props.match.params.date;

    useEffect(() => {
        Promise.all([withAuth().get(`https://my-dear-diary.herokuapp.com/api/diary/${date}`), withAuth().get(`https://my-dear-diary.herokuapp.com/api/gallery/${date}`)])
        .then(([diaryResponse, galleryResponse]) => {
            setDiary(diaryResponse.data.diary)
            setPhotos(galleryResponse.data.pictures)
            setIsLoading(false)
            if(diaryResponse.data.diary) {
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

    const handlePictureOpen = picture => {
        setPictureOpen(true)
        setPicture(picture)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handlePictureClose = () => {
        setPictureOpen(false);
    };

    const handleClick = () => {
        setExpand(!expand)
    }

    const onChange = e => {
        const file = e.target.files[0];
        setPhoto(file);
    };

    const onUpload = e => {
        e.preventDefault()        
        setUploading(true)
        let fd = new FormData();
        fd.append('photo', photo)
        fd.append('date', date)
        withAuth('multipart/form-data').post('https://my-dear-diary.herokuapp.com/api/gallery', fd)
        .then(res => {
            console.log(res.data)
            handleClose()
            store.addNotification({
                title: "Success!",
                message: res.data.message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }               
            });
            setUploading(false)
        })
        .catch(error => {
            store.addNotification({
                title: "Error!",
                message: error.response.data.message,
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }                
            });
            setUploading(false)
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
                store.addNotification({
                    title: "Error!",
                    message: error.response.data.message,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }                
                });
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
                store.addNotification({
                    title: "Error!",
                    message: error.response.data.message,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 3000,
                        onScreen: true
                    }                
                });
            }); 
        }              
    };

    const onPictureDelete = (e, id) => {
        e.preventDefault()
        withAuth().delete(`https://my-dear-diary.herokuapp.com/api/gallery/${id}`)
        .then(res => {
            const newPhotos = photos.filter(photo => photo !== picture)
            setPhotos(newPhotos)
            store.addNotification({
                title: "Success!",
                message: res.data.message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }               
            });
            handlePictureClose()
        })
        .catch(err => {
            store.addNotification({
                title: "Error!",
                message: err.response.data.message,
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    onScreen: true
                }                
            });
        })
    }
    
    if(isLoading) return (
        <div className='loading'>
            <Navigation />
            <CircularProgress style={{color: '#38b6ff', marginTop: '30vh'}} />
        </div>
    ) 
    return(
        <DiaryStyle>
            <Navigation />
            <div className='diary-form'>
                <TextareaAutosize id="diary-text" onChange={onDiaryTextChange} rowsMin={25} rowsMax={45} defaultValue={diary ? diary.diaryText : ''} variant="outlined" placeholder="Start writing..." />
                <section className='btn'>
                    <Button className='diary-button' onClick={handleOpen} variant="contained" color="primary">
                        Upload Picture
                    </Button>
                    <Button className='diary-button' onClick={onHandleSubmit} variant="contained" color="primary">
                        Done
                    </Button>
                </section>
            </div>
            <div>
                <section className='gallery-title'>
                    <h3>Gallery</h3>
                    <span onClick={handleClick}>{ expand ? <ExpandLess /> : <ExpandMore />}</span>
                </section>
                <Collapse in={expand} timeout="auto">
                    {
                        photos.length === 0 ? <p>You have no photos for this date!</p> : (
                            <Grid container justify="center" spacing={2} className={classes.root}>
                                {
                                    photos.map(photo =>
                                        <Grid key={photo.id} item>
                                            <CardMedia onClick={() => handlePictureOpen(photo)} className={classes.media} image={photo.picture} title={photo.date + photo.id} />
                                        </Grid>
                                    )
                                }
                            </Grid>
                        )
                    }
                </Collapse>
            </div>
            <footer>
                <p>&copy; Dear Diary</p>
            </footer>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>         
                    {
                        uploading ? (
                            <div style={{textAlign: 'center', marginTop: '20px'}}>
                                <CircularProgress color='primary' style={{color: '#38b6ff'}} />
                                <h5>Uploading...</h5>
                            </div>
                        ) : (
                            <div>
                                <h2>Upload your picture</h2>                   
                                <input type="file" name="Upload" onChange={onChange} />
                                <div style={{fontSize: '0.7rem'}}><em>(Note: Only jpeg, jpg, png and gif file types are accepted)</em></div>
                                <section style={{marginTop: '20px'}}>
                                    <Button variant="contained" style={{backgroundColor: '#38b6ff', fontSize: '1.2rem'}} onClick={onUpload} color="primary">
                                        Save
                                    </Button>
                                    <Button variant="contained" style={{backgroundColor: '#38b6ff', marginLeft: '10px', fontSize: '1.2rem'}} onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                </section>
                            </div>
                        )
                    }
                </div>
            </Modal>
            <Modal
                open={pictureOpen}
                onClose={handlePictureClose}
            >
                <Card style={modalStyle} className={classes.paper}>
                    <CardMedia className={classes.modalMedia} image={picture.picture} title={picture.date + picture.id} />
                    <CardActions>
                        <Button onClick={e => onPictureDelete(e, picture.id)} variant='contained' color="primary">
                            Delete
                        </Button>
                        <Button onClick={handlePictureClose} variant='contained' color="primary">
                            Cancel
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </DiaryStyle>
    )
};

export default Diary