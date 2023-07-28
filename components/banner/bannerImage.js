import classes from './bannerImage.module.css'


function BannerImg(){
    return(
        <div className={classes.figure}>
            <img src="../fimage.jpeg" alt="banner" /> 
        </div>
    )
}

export default BannerImg