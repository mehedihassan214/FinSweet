import React from 'react'
import Container from '../Components/Layouts/Container'
import navLogo from '../assets/navLogo.png'
import Flex from '../Components/Layouts/Flex'
import List from '../Components/Layouts/List'
import ListItems from '../Components/Layouts/ListItems'
import { Link } from 'react-router-dom'

const Header = () => {
    const navbar = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About us',
            link: '/about'
        },
        {
            name: 'Features',
            link: '/features'
        },
        {
            name: 'Pricing',
            link: '/pricing'
        },
        {
            name: 'FAQ',
            link: '/faq'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        // {
        //     name: 'Contact us',
        //     link: '/contact us'
        // },
    ]
    return (
        <>
            <nav className='bg-[#1C1E53] py-4'>
                <Container>
                    <Flex className={'flex justify-between items-center'}>
                        <div>
                            <img src={navLogo} alt="" />
                        </div>

                        <div className='flex items-center'>
                            <List className={'flex text-white gap-x-8 font-[pop] font-medium text-[16px]'}>
                                {
                                    navbar.map(({ name, link }) => (
                                        <ListItems title={name} link={link} key={name} />
                                    ))
                                }
                            </List>

                            <div>
                                <Link to={'/contact'}>
                                    <ListItems title={'Contact us'} className={'text-white list-none ml-12 py-4 px-12 rounded-[41px]  border-[2px] border-border_rgb text-center font-[pop] font-bold'} />
                                </Link>

                            </div>
                        </div>


                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default Header