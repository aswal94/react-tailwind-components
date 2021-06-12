// Navigation bar

import React, {Component} from "react";

class Navbar extends Component{
    render() {
        return (
            <>
                <div className="max-w-7xl mx-auto text-gray-700">
                    <div  className="flex  flex-shrink mx-auto my-auto md:items-center md:flex-row ">
                        <div className="p-4 flex flex-row items-center justify-between">
                            <a href="#" className="text-lg font-semibold uppercase">Pathik</a>
                        </div>
                        <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                            <a className="px-4 py-2 mt-2 text-lg font-semibold" href="#">Destination</a>
                            <a className="px-4 py-2 mt-2 text-lg font-semibold" href="#">Events</a>
                            <a className="px-4 py-2 mt-2 text-lg font-semibold" href="#">Activities</a>
                            <a className="px-4 py-2 mt-2 text-lg font-semibold" href="#">Video</a>
                            <a className="px-4 py-2 mt-2 text-lg font-semibold" href="#">Blog</a>
                        </nav>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;