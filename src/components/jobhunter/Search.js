import React, { Component } from "react";

export default class Search extends Component{
    render() {
        return (
            <div>
                <div className="flex h-screen font-sans">

                    <div className="m-auto">

                        <form className="m-4 flex">
                            <div className="flex w-full h-12 rounded-xl border-2 mb-5 ml-2 text-gray-800">
                                <div className="w-15 pt-2">
                                     <span className="items-center px-2">What</span>
                                </div>
                                <input type="text" className="w-64 flex-1 outline-none" placeholder="Job title, keywords, or company"/>
                                <div className="w-5 pt-2">
                                    <span className="items-center"><i className="fa fa-search"></i> </span>
                                </div>
                            </div>
                            <div className="flex w-full h-12 rounded-xl border-2 mb-5 ml-2 text-gray-800">
                                <div className="w-15 pt-2">
                                    <span className="items-center px-2">Where</span>
                                </div>
                                <input type="text" className="w-64 flex-1 outline-none" placeholder="Uttarakhand"/>
                                <div className="w-5 pt-2">
                                    <span className="items-center"><i className="fa fa-map-marker"></i></span>
                                </div>
                            </div>
                            <div className="flex w-full h-12 pr-10 mb-5 ml-2">
                                <button
                                    className="rounded-xl bg-blue-900 text-white font-bold p-2 uppercase">Find Jobs
                                </button>
                            </div>
                        </form>
                        <div className="flex">
                            <div className="m-auto">
                                <p>
                                    <span className="text-blue-800">Post your resume</span> <span className="text-gray-800">- It only takes a few seconds</span>
                                </p>
                                <p className="mt-2">
                                    <span className="text-blue-800">Employers: Post a job</span> <span className="text-gray-800">- Your next hire is here</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}