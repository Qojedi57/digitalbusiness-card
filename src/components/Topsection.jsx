import me from '../assets/Imageofmyself.jpg';
function Topsection(){
    return (
        <>
        <div className='img-container'>
            </div>
        <img className='main-img' src={me} alt="Me" style={{width:"25%"}} />
        <div className='sub-container'>
            </div>
        <h2 className='name'>Eduardo Contreras</h2>
        <h4 className='role'>Software Developer</h4>
        <div className='connect'>
        </div>
        </>
    )
}

export default Topsection;