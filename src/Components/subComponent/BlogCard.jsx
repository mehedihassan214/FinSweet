// import React from 'react'
// import blogPic1 from '../../assets/blogPic1.png'

// const BlogCard = () => {
//     const BlogCardParts = [
//         {
//             url: <img src={blogPic1} alt="" />,
//             date: '19 Jan 2022',
//             title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
//             des: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
//         },
//         {
//             url: <img src={blogPic1} alt="" />,
//             date: '19 Jan 2022',
//             title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
//             des: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
//         },
//         {
//             url: <img src={blogPic1} alt="" />,
//             date: '19 Jan 2022',
//             title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
//             des: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
//         }
//     ]
//     return (
//         <div className='flex flex-wrap gap-x-7'>
//             {
//                 BlogCardParts.map(({ url, date, title, des }, index) => (
//                     <div key={index} className='w-[405px]'>
//                         {url}
//                         <p>{date}</p>
//                         <h4>{title}</h4>
//                         <p>{des}</p>
//                         <div className='flex justify-center items-center gap-x-4'>
//                             <p className='text-[white] font-pop font-medium text-[16px] '> Read More</p>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
//                                 <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
//                             </svg>
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// export default BlogCard


import React from 'react';
import blogPic1 from '../../assets/blogPic1.png'; 

const BlogCard = () => {
    const BlogCardParts = [
        {
            url: <img src={blogPic1} alt="Blog Image" className="w-full h-auto rounded-t-lg" />,
            date: '19 Jan 2022',
            title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            des: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract',
        },
        {
            url: <img src={blogPic1} alt="Blog Image" className="w-full h-auto rounded-t-lg" />,
            date: '20 Feb 2023',
            title: '10 Tips to Improve Your Frontend Skills as a Developer',
            des: 'Master the fundamentals and learn advanced techniques to level up your frontend development skills.',
        },
        {
            url: <img src={blogPic1} alt="Blog Image" className="w-full h-auto rounded-t-lg" />,
            date: '05 Mar 2023',
            title: 'The Ultimate Guide to Responsive Design with Tailwind CSS',
            des: 'Learn how to create responsive web applications with Tailwind CSS. Master breakpoints and utilities.',
        }
    ];

    return (
        <div className="flex flex-wrap justify-center md:justify-between p-4">
            {BlogCardParts.map(({ url, date, title, des }, index) => (
                <div 
                    key={index} 
                    className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[32%] md:w-[32%] hover:scale-105 transition-transform duration-300"
                >
                    {url}
                    <div className="p-4">
                        <p className="text-gray-500 text-sm mb-2">{date}</p>
                        <h4 className="font-semibold text-lg text-gray-800 mb-2 font-pop">{title}</h4>
                        <p className="text-gray-600 text-sm mb-4">{des}</p>
                        <div className="flex justify-center items-center gap-4">
                            <p className="text-white bg-blue-600 px-4 py-2 rounded-lg font-pop font-medium text-[16px] cursor-pointer hover:bg-blue-700 transition-colors">
                                Read More
                            </p>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="25" 
                                height="12" 
                                viewBox="0 0 25 12" 
                                fill="none" 
                                className="fill-blue-600 hover:fill-blue-700 transition-colors"
                            >
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
