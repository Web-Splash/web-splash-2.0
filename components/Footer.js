import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

const index = () => {
    return (
        <div className="pt-10">
            <footer id="footer" className="relative z-50 bg-blue-500 dark:bg-gray-700">
                <div className="py-10">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Components</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Templates</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Pricing</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">FAQ</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <a href="#" className="text-xs
                                            lg:text-sm leading-none hover:text-brand
                                            dark:hover:text-brand text-white
                                            dark:text-gray-50">
                                                Documentation
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Free components</a>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Blog</a>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Changelog</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <a href="#" className="text-xs
                                            lg:text-sm leading-none hover:text-brand
                                            dark:hover:text-brand text-white
                                            dark:text-gray-50">
                                                Privacy policy
                                            </a>
                                        </li>
                                        <li className="mt-6">
                                            <Link href="#">
                                                <a className="text-xs lg:text-sm
                                                leading-none hover:text-brand
                                                dark:hover:text-brand text-white
                                                dark:text-gray-50">Terms of service</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="w-full lg:w-1/2 px-6 flex flex-col
                                justify-between">
                                    <div className="flex items-center mb-6">
                                        <a href="#">
                                            <div className="text-white
                                            dark:text-gray-50 cursor-pointer
                                            hover:text-brand dark:hover:text-brand ">
                                                <Link
                                                    href='https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw'>
                                                    <FontAwesomeIcon icon={['fab', 'youtube']} color="#ffffff"
                                                                     className='mx-5 cursor-pointer h-5 w-5' />
                                                </Link>

                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-white
                                            dark:text-gray-50 cursor-pointer
                                            hover:text-brand dark:hover:text-brand ">
                                                <Link
                                                    href='https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw'>
                                                    <FontAwesomeIcon icon={['fab', 'github']} color="#ffffff"
                                                                     className='mx-5 cursor-pointer h-5 w-5' />
                                                </Link>

                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-white
                                            dark:text-gray-50 cursor-pointer
                                            hover:text-brand dark:hover:text-brand ">
                                                <Link
                                                    href='https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw'>
                                                    <FontAwesomeIcon icon={['fab', 'facebook']} color="#ffffff"
                                                                     className='mx-5 cursor-pointer h-5 w-5' />
                                                </Link>

                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-white
                                            dark:text-gray-50 cursor-pointer
                                            hover:text-brand dark:hover:text-brand ">
                                                <Link
                                                    href='https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw'>
                                                    <FontAwesomeIcon icon={['fab', 'instagram']} color="#ffffff"
                                                                     className='mx-5 cursor-pointer h-5 w-5' />
                                                </Link>

                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="text-white
                                            dark:text-gray-50 cursor-pointer
                                            hover:text-brand dark:hover:text-brand ">
                                                <Link
                                                    href='https://www.youtube.com/channel/UCphDOBWR48-8Vg0VccrGJnw'>
                                                    <FontAwesomeIcon icon={['fab', 'codepen']} color="#ffffff"
                                                                     className='mx-5 cursor-pointer h-5 w-5' />
                                                </Link>

                                            </div>
                                        </a>
                                    </div>
                                    <Newsletter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default index;
