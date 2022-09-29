import React from 'react';
import noResult from '../assets/illustration-empty.svg';
import companyIcon from '../assets/icon-company.svg';
import blogIcon from '../assets/icon-blog.svg'
import twitterIcon from '../assets/icon-twitter.svg';
import locationIcon from '../assets/icon-location.svg';
export default function info({userData, hasError, hasLoading}) {
    let {
        avatar_url,name,login,bio,following,followers,public_repos,location,company,twitter_username,html_url,blog
    } = userData
    return (
        <main className="container info">
            {userData ?
                <>
                    <div className="info-header">
                        <img src={avatar_url} className="avatar" alt="avatar"/>
                        <div className="general-info">
                            <h1>{name}</h1>
                            <a href={html_url} className="username">{`@${login}`}</a>
                            
                        </div>
                    </div>
                    <div className="info">
                        <div>
                            <p className="bio">
                                {bio !== null ? bio : 'This profile has no bio'}
                            </p>
                        </div>
                        <div className="status">
                            <div className="single_info">
                                <span>Repos</span>
                                <h2>{public_repos}</h2>
                            </div>
                            <div className="single_info">
                                <span>Followers</span>
                                <h2>{followers}</h2>
                            </div>  
                            <div className="single_info">
                                <span>Following</span>
                                <h2>{following}</h2>

                                <h3>{   }</h3>
                            </div>
                        </div>

                        <div className="social-accounts">
                            <div className={location === null ? 'account not-available' : 'account'}>
                                <img src={locationIcon} alt="location"/>
                                <span>{location === null ? 'Not available' : location}</span>
                            </div>
                            <div className={twitter_username === null ? 'account not-available' : 'account'}>
                                <img src={twitterIcon} alt="twittter"/>
                                <span>{twitter_username === null ? 'Not available' : `@${twitter_username}`}</span>
                            </div>
                            <div className={blog.length === 0 ? 'account not-available' : 'account'}>
                            <img src={blogIcon} alt="blog"/>
                                <a href={blog}>
                                    {blog.length === 0 ? 'Not available' : blog}
                                </a>
                            </div>
                            <div className={company === null ? 'account not-available' : 'account'}>
                            <img src={companyIcon} alt="company"/>
                                <span>{company === null ? 'Not available' : company}</span>
                            </div>
                        </div>
                    </div>
                </>
                :
                

                hasError
                    ?
                    <div className="loading">
                        <span>
                            Oops!!!
                        </span>

                        <div>
                            There is no result found
                            <br/>
                            please try again
                        </div>
                    </div>
                    :
                    hasLoading
                        &&
                    <div className="loading">
                       <span className="errorImg">
                            <img src={noResult} alt="no result found"/>
                       </span>
                        <p>Searching ...</p>
                    </div>
            }
        </main>
    )
}