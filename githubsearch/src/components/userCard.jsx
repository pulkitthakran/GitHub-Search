import React from "react";
import styles from "../styles/userCard.module.css";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import { Grid, Typography } from "@mui/material";
function UserCard(props) {
  const { data } = props;
  const date = new Date("2022-06-17");
  return (
    <div className={styles.userCard}>
      <div className={styles.userCardUserAvatarWraper}>
        <img
          className={styles.userCardUserAvatar}
          src={data.avatar_url}
          alt="user-avatar"
        />
        <div className={styles.userCardUserInfo}>
          <h2 className={styles.userCardTitle}>{data.name}</h2>
          <h3 className={styles.userInfoUsername}>{data.login}</h3>
          
        </div>
      </div>

      <div className={styles.userCardBio}>
        <p>{data.bio || "This profile has no bio"}</p>
      </div>

      <div className={styles.userCardStats}>
        <div className={styles.userRepos}>
          <p className={styles.userStatTitle}>Repos</p>
          <p className={styles.userStatNumber}>{data.public_repos}</p>
        </div>
        <div className={styles.userFollowers}>
          <p className={styles.userStatTitle}>Followers</p>
          <p className={styles.userStatNumber}>{data.followers}</p>
        </div>
        <div className={styles.userFollowing}>
          <p className={styles.userStatTitle}>Following</p>
          <p className={styles.userStatNumber}>{data.following}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <Grid className={styles.userCardContact} xs={12}>
          <Grid item container xs={12} md={6} lg={6}>
            <LocationOnRoundedIcon />
            <Typography>{data.location || "not available"}</Typography>
          </Grid>
          <Grid item container xs={12} md={6} lg={6}>
            <LanguageRoundedIcon />
            <Typography>{data.blog || "not available"}</Typography>
          </Grid>
          <Grid item container xs={12} md={6} lg={6}>
            <TwitterIcon />
            <Typography>{data.twitter || "not available"}</Typography>
          </Grid>
          <Grid item container xs={12} md={6} lg={6}>
            <BusinessIcon />
            <Typography>{data.company || "not available"}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UserCard;
