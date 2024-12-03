export default function ServicesMainBody(){
    return <>
        <section className="flex gap-12 items-start lg:px-44">
            <div className="hidden lg:block ">
                <ul className="px-[50px] py-[42px] kerm rounded-xl mb-[30px]">
                    <li className="mb-6 font-bold text-lg w-[270px]"><a className="transition-all hover:text-black" href="">Categories</a></li>
                    <li className="mb-6 gray w-[270px]"><a className="transition-all hover:text-black" href="">Agriculture Products</a></li>
                    <li className="mb-6 gray w-[270px]"><a className="transition-all hover:text-black" href="">Organic Products</a></li>
                    <li className="mb-6 gray w-[270px]"><a className="transition-all hover:text-black" href="">Fresh Vegetables</a></li>
                    <li className="mb-6 gray w-[270px]"><a className="transition-all hover:text-black" href="">Dairy Products</a></li>
                    <li className="gray w-[270px]"><a className="transition-all hover:text-black" href="">Harvest</a></li>
                </ul>
                <div className=" lg:px-[50px] lg:py-[42px] bgGreen rounded-xl grid grid-cols-1 items-center justify-center">
                    <h4 className="text-2xl font-bold text-center text-white mb-[32px]">Need Help?</h4>
                    <p className="text-center mb-6 text-amber-50">Speak with a human to filling out a
                        form? call corporate office and we
                        will connect you with a team
                        member help.</p>
                    <h5 className="newfont text-white font-bold text-2xl text-center mb-6 cursor-pointer">+92 (000) -9630</h5>
                    <a className="text-white py-3 px-6 bg-yellow-600 rounded-lg mt-4 inline-flex mx-auto" href="" >Start Shopping Now</a>
                </div>
            </div>
            <div className="px-4">
                <div>
                    <img src="../../../public/images/Tractor.jpg" alt=""/>
                    <h2 className="leading-tight text-5xl font-bold mt-3 mb-6">Agriculture Products</h2>
                    <p className="gray mb-10">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro
                        est qui dolorem ipsum quia
                        quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                        lacus quis
                        enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text
                        of the
                        printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever
                        since
                        the 1500s.</p>
                    <p className="gray">It has survived not only five centuries. Lorem Ipsum is simply dummy text of the
                        new design printng and
                        type setting Ipsum take a look at our round. When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting.</p>
                </div>
                <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div>
                        <img src="../../../public/images/benefit1.jpg" alt=""/>
                        <h5 className="leading-tight text-3xl font-bold mt-4 mb-2">Our Benefits</h5>
                        <p className="gray">It has survived not only five centuries em simply
                            dummy text. Duis aute irure dolor in eprehenderit
                            in voluptate velit esse cillum.</p>
                    </div>
                    <div>
                        <img src="../../../public/images/benefit2.jpg" alt=""/>
                        <ul className="flex-col gap-2 mt-6 font-semibold ">
                            <li className="w-[300px]"><a className="w-fit" href="">Nsectetur cing elit.</a></li>
                            <li className="w-[300px]"><a className="w-fit" href="">Suspe ndisse suscipit sagittis leo.</a></li>
                            <li className="w-[300px]"><a className="w-fit" href="">Entum estibulum dignissim posuere.</a></li>
                            <li className="w-[300px]"><a className="w-fit" href="">Lorem Ipsum on the tend to repeat.</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 mb-20">
                    <div className="flex items-center justify-between bg-amber-50 ps-6 pe-2 py-2 rounded-xl mb-3 cursor-pointer">
                        <h6 className="text-xl font-semibold">World’s hottest destinations for vegans</h6>
                        <svg className="cursor-pointer" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.980225" y="0.75" width="60" height="60" rx="10" fill="#C5CE38"/>
                            <g clipPath="url(#clip0_4137_457)">
                                <path
                                    d="M33.1482 28.582L6.13647 1.62891C5.55054 1.04297 4.83765 0.75 3.9978 0.75C3.15796 0.75 2.44507 1.04297 1.85913 1.62891C1.27319 2.21484 0.980225 2.92773 0.980225 3.76758C0.980225 4.60742 1.27319 5.32031 1.85913 5.90625L26.7029 30.75L1.85913 55.5938C1.27319 56.1797 0.980225 56.8926 0.980225 57.7324C0.980225 58.5723 1.27319 59.2852 1.85913 59.8711C2.44507 60.457 3.15796 60.75 3.9978 60.75C4.83765 60.75 5.55054 60.457 6.13647 59.8711L33.1482 32.918C33.7341 32.332 34.0271 31.6094 34.0271 30.75C34.0271 29.8906 33.7341 29.168 33.1482 28.582Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4137_457">
                                    <rect width="60" height="60" fill="white"
                                          transform="matrix(1 0 0 -1 0.980225 60.75)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between bg-amber-50 ps-6 pe-2 py-2 rounded-xl mb-3 cursor-pointer">
                        <h6 className="text-xl font-semibold">Let’s grow naturaly and live naturaly</h6>
                        <svg className="cursor-pointer" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.980225" y="0.75" width="60" height="60" rx="10" fill="#C5CE38"/>
                            <g clipPath="url(#clip0_4137_457)">
                                <path
                                    d="M33.1482 28.582L6.13647 1.62891C5.55054 1.04297 4.83765 0.75 3.9978 0.75C3.15796 0.75 2.44507 1.04297 1.85913 1.62891C1.27319 2.21484 0.980225 2.92773 0.980225 3.76758C0.980225 4.60742 1.27319 5.32031 1.85913 5.90625L26.7029 30.75L1.85913 55.5938C1.27319 56.1797 0.980225 56.8926 0.980225 57.7324C0.980225 58.5723 1.27319 59.2852 1.85913 59.8711C2.44507 60.457 3.15796 60.75 3.9978 60.75C4.83765 60.75 5.55054 60.457 6.13647 59.8711L33.1482 32.918C33.7341 32.332 34.0271 31.6094 34.0271 30.75C34.0271 29.8906 33.7341 29.168 33.1482 28.582Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4137_457">
                                    <rect width="60" height="60" fill="white"
                                          transform="matrix(1 0 0 -1 0.980225 60.75)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex items-center justify-between bg-amber-50 ps-6 pe-2 py-2 rounded-xl cursor-pointer">
                        <h6 className="text-xl font-semibold">Best vegetables for your healthy hair</h6>
                        <svg className="cursor-pointer" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.980225" y="0.75" width="60" height="60" rx="10" fill="#C5CE38"/>
                            <g clipPath="url(#clip0_4137_457)">
                                <path
                                    d="M33.1482 28.582L6.13647 1.62891C5.55054 1.04297 4.83765 0.75 3.9978 0.75C3.15796 0.75 2.44507 1.04297 1.85913 1.62891C1.27319 2.21484 0.980225 2.92773 0.980225 3.76758C0.980225 4.60742 1.27319 5.32031 1.85913 5.90625L26.7029 30.75L1.85913 55.5938C1.27319 56.1797 0.980225 56.8926 0.980225 57.7324C0.980225 58.5723 1.27319 59.2852 1.85913 59.8711C2.44507 60.457 3.15796 60.75 3.9978 60.75C4.83765 60.75 5.55054 60.457 6.13647 59.8711L33.1482 32.918C33.7341 32.332 34.0271 31.6094 34.0271 30.75C34.0271 29.8906 33.7341 29.168 33.1482 28.582Z"
                                    fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4137_457">
                                    <rect width="60" height="60" fill="white"
                                          transform="matrix(1 0 0 -1 0.980225 60.75)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    </>
}
