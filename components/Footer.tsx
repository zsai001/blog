"use client"

import Link from './Link'
import React, { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
    const [isItDevNow, setIsItDevNow] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hostname = window.location.hostname;
            if (hostname === 'itdevnow.com') {
                setIsItDevNow(true);
            }
        }
    }, []);
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6}/>
                    <SocialIcon kind="github" href={siteMetadata.github} size={6}/>
                    {/*<SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />*/}
                    {/*<SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />*/}
                    {/*<SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />*/}
                    <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6}/>
                    {/*<SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />*/}
                    {/*<SocialIcon kind="threads" href={siteMetadata.threads} size={6} />*/}
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{siteMetadata.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMetadata.title}</Link>
                </div>
                <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    {isItDevNow && (<div>
                        <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
                            湘ICP备2022016053号-2
                        </a>
                    </div>)}
                </div>
            </div>
        </footer>
    )
}
