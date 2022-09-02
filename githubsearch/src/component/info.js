import React from "react";

import locationIcon from '../images/location.svg';
import twitterIcon from '../images/twitter.svg';
import blogIcon from '../images/blog.svg';
import companyIcon from '../images/companyIcon.svg';

export default function Info({userData, hasError, hasLoading}){
    let{name, photo, login , bio , followers, following, repository, locations , companyName, twitterId, website, blogLink } = userData;
    return(
        <main className="container info">
            {userData ?
                <>
                    <div className="info-header">
                        <img src={photo} className="imageId"/>
                        <div className="general-info">
                            <h1>{name}</h1>
                            <a href={website} className="username">{`@${login}`}</a>
                        </div>
                    </div>
                    <div className="data">
                        <p className="bio">
                            {bio !=null ? bio: "This profile has no bio"}
                        </p>
                        <div className="repoBox">
                            <div className="details">
                                <p>Repoz</p>
                                <p>{repository}</p> 
                            </div>
                            <div className="details">
                                <p>Followers</p>
                                <p>{followers}</p>
                            </div>
                            <div className="details">
                                <p>Following</p>
                                <p>{following}</p>
                            </div>
                        </div>
                        <div className="locationSocial">
                            <div className="location">
                                <img src={locationIcon} />
                                <p>{locations == null ? 'Not Available' : locations}</p>
                            </div>
                            <div className="twitter">
                                <img src={twitterIcon}/>
                                <p>{twitterId === null ? 'Not Available' : `@${twitterIcon}` }</p>
                            </div>
                            <div className="blog">
                                <img src= {blogIcon}/>
                                <a href={blogLink}>
                                    {blogLink.length === 0 ? 'Not available': blogLink}
                                </a>
                            </div>
                            <div className="company">
                                <img src= {companyName} />
                            </div>
                        </div>

                    </div>
                </>

            }
        </main>
    )
}