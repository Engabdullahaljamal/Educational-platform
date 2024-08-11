import './Nav.css'



export default function Nav() {


    const none = () => {
        const nav_bar_down_ul = document.querySelector('#navbarSupportedContent')
        nav_bar_down_ul.classList.remove('show');
    }


    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <h3>Edu<span>jar</span></h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon  text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active text-white" aria-current="page" href="#" onClick={() => { none() }}>Home</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-white" href="#courses" onClick={() => { none() }}>Courses</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link  text-white" aria-disabled="true" href='#question' onClick={() => { none() }}>About us</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link text-white" aria-disabled="true" href='#work_categories' onClick={() => { none() }}>Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white" aria-disabled="true" href="#what_client" onClick={() => { none() }}>Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  text-white" aria-disabled="true" href='#footer' onClick={() => { none() }}>Contact</a>
                            </li>
                            <li className="nav-item but" onClick={() => { none() }}>
                                <button>Signup</button>
                            </li>
                        </ul>

                    </div>
                </div>

            </nav>


            <div className="nav">
                <h3>Edu<span>jar</span></h3>
                <ul>
                    <li><a href="#">Home</a> </li>
                    <li> <a href="#courses">Courses</a></li>
                    <li> <a href="#question">About us</a> </li>
                    <li> <a href="#work_categories">Works</a></li>
                    <li> <a href="#what_client">Blog</a></li>
                    <li> <a href="#footer">Contact</a></li>

                </ul>

                <button>Signup</button>

            </div>

        </>
    )


}
