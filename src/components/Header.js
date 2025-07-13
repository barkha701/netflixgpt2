import netflixlogo from '../utils/netflixlogo2.PNG';

const Header = () =>
{
    return (

        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-40" src = { netflixlogo } alt = "netflixlogo" height= "100px" length= "200px">
        </img>
        </div>

    )

}

export default Header;