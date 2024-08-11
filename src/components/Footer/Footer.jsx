import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div>
                <h3>Edu<span>jar</span></h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
                <p>© 2024 <span>edujar</span> - All Rights Reserved</p>
            </div>
            <div>
                <h3>Quick links</h3>
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li><a href="#courses">Courses</a></li>
                    <li> <a href="#question">About us</a></li>
                    <li><a href="#work_categories">Works</a></li>
                    <li> <a href="#what_client" >Blog</a></li>

                </ul>
            </div>
            <div>
                <h3>Legal</h3>
                <ul>
                    <li>Terms of use</li>
                    <li>Terms & conditions</li>
                    <li>lirivacy policy</li>
                    <li> Cookie policy </li>
                </ul>

            </div>
            <div>
                <h3>Quick links</h3>


                <input type="email" name="email" id="email" placeholder="Enter Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
